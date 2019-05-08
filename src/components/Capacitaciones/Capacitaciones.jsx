import React from 'react'
import { List, Avatar } from 'antd';
const data = [
  {
    id: 1,
    title: 'Capacitacion 1',
  },
  {
    id: 2,
    title: 'Capacitacion 2',
  },
  {
    id: 3,
    title: 'Capacitacion 3',
  },
  {
    id: 4,
    title: 'Capacitacion 4',
  },
];

class Capacitaciones extends React.Component {
  render() {
    return (
      <div>
        <h1>Capacitaciones</h1>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="http://localhost:3000/editar-capacitacion/${item.id}">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}


export default Capacitaciones

