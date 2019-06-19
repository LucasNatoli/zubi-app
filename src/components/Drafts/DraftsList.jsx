import React from 'react'
import { Link } from 'react-router-dom'
import { List, Icon, Progress } from 'antd'
import './Drafts.css'
import { IconText } from '../IconText'

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
      <List.Item key={draft.ID}
        actions={[
          <Link href="#" onClick={() => onDraftClick(draft.ID)} {...draft}><IconText type="form" text="Completar" /></Link>,
          <IconText type="check" text="Pedir revisión" />,

        ]}
        extra={
          <div>
            <div class="image-placeholder">
              <h4>Subí una imagen</h4>
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
  >
  </List>
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