import React from 'react'
import { Avatar, Card, Button, List } from 'antd'
import { Link } from 'react-router-dom'
import IconText from '../IconText'

const ConsultingList = ({ consulting, onConsultancyClick }) => (
  <Card title="Consultoria"
    extra={[<Button style={{ color: '#08c' }} icon="plus">Nueva</Button>]}>
    <List
      itemLayout="horizontal"
      dataSource={consulting}
      renderItem={cons => (
        <Link href="/editar-consultoria" to="editar-consultoria">
          <List.Item
            key={cons.ID}
            actions={[              
              <IconText type="star-o" text="0" />,
              <IconText type="dollar" text="0" />,
              <Link href="/editar-consultoria" to="editar-consultoria" onClick={() => onConsultancyClick(cons.ID)} {...cons}>
                <IconText type="message" text="2" />
              </Link>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={cons.post_title}
              description={cons.post_content}

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