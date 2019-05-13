import React from 'react'
import { Avatar, Card, Icon, List } from 'antd'
import { Link } from 'react-router-dom'

const ConsultingList = ({ consulting, onConsultancyClick }) => (
  <Card title="Consultoria">
    <List
      itemLayout="horizontal"
      dataSource={consulting}
      renderItem={cons => (
        <Link href="/editar-consultoria" to="editar-consultoria">
          <List.Item key={cons.id} onClick={() => onConsultancyClick(cons.id)} {...cons}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={cons.post_title}
              description={cons.post_content}
              extra={
                <div class="image-placeholder">
                  <h4>image placeholder text</h4>
                </div>
              }
            />
          </List.Item>
        </Link>
      )}
    />
  </Card>
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