import React from 'react'
import { Link } from 'react-router-dom'
import { List, Icon, Progress } from 'antd'
import './Drafts.css'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const DraftsList = ({ drafts, onDraftClick }) => (

  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={drafts}
    renderItem={draft => (
      <List.Item key={draft.id}
        extra={
          <div>
            <div class="image-placeholder">
              <h4>Upload an Image</h4>
            </div>
          </div>
        }
      >

        <List.Item.Meta
          title={draft.post_title + " (" + draft.post_type + ")"}
          description={draft.post_content}
        />
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#fc6a42',
          }}
          percent={draft.course_progress}
        />
      </List.Item>
    )}
  />
)
/* 
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
} */

export default DraftsList