import React from 'react'
import { List, Avatar } from 'antd'
import { Link } from 'react-router-dom'

const ConsultingList = ({ consulting, onConsultancyClick }) => (
  <List
      itemLayout="horizontal"
      dataSource={consulting}
      renderItem={cons => (
        <List.Item  key={cons.id}  onClick={() => onConsultancyClick(cons.id)} {...cons}>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={cons.post_title}
            description={cons.post_content}
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

export default ConsultingList