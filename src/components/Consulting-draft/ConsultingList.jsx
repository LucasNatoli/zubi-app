import React from 'react'
import { List, Avatar } from 'antd'

const ConsultingList = ({ consulting, onConsultancyClick }) => (
  <List
      itemLayout="horizontal"
      dataSource={consulting}
      renderItem={cons => (
        <List.Item  key={cons.id}  onClick={() => onConsultancyClick(cons.id)} {...cons}>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="http://localhost:3000/editar-consultoria">{cons.post_title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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