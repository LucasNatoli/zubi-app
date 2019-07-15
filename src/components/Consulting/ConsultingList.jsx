import React from 'react'
import { Avatar, Card, Button, List } from 'antd'
import { Link } from 'react-router-dom'
import IconText from '../IconText'

class ConsultingList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <Card title="Consultoria"
      extra={[<Button style={{ color: '#08c' }} icon="plus" href="/nueva-consultoria">Nueva</Button>]}
    >
      <List
        itemLayout="vertical"
        size="large"
        dataSource={this.props.consulting}
        loading={this.props.loading}
        renderItem={cons => (
          <Link href={"/editar-consultoria/" + cons.ID} to={"/editar-consultoria/" + cons.ID}>
            <List.Item
              key={cons.ID}
              actions={[
                <IconText type="star-o" text="0" />,
                <IconText type="dollar" text="0" />,
                <Link href={"/editar-consultoria/" + cons.ID} to={"/editar-consultoria/" + cons.ID}>
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
  }
}

/* const ConsultingList = ({ consulting, loading, onConsultancyClick, onNewConsultancyClick }) => (
  <Card title="Consultoria"
    extra={[<Button style={{ color: '#08c' }} icon="plus" onClick={()=> onNewConsultancyClick()}>Nueva</Button>]}
  >
    <List
      itemLayout="vertical"
      size="large"
      dataSource={consulting}
      loading={loading}
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
) */

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