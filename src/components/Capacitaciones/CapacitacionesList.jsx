import React from 'react'
import { Avatar, Card, Icon, List } from 'antd'
import { Link } from 'react-router-dom'

const CapacitacionesList = ({ capacitaciones, loading, onConsultancyClick }) => (
  <Card title="Capacitaciones">
    <List
      itemLayout="vertical"
      size="large"
      dataSource={capacitaciones}
      loading={loading}
      renderItem={capacitacion => (
        <Link href={"/editar-capacitacion/" + capacitacion.ID} to={"/editar-capacitacion/" + capacitacion.ID}>
          <List.Item key={capacitacion.id} onClick={() => onConsultancyClick(capacitacion.id)} {...capacitacion}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={capacitacion.post_title}
              description={capacitacion.post_content}
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

export default CapacitacionesList