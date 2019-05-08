import React from 'react'
import { List, Avatar } from 'antd';
const data = [
  {
    title: 'Capacitacion 1',
  },
  {
    title: 'Capacitacion 2',
  },
  {
    title: 'Capacitacion 3',
  },
  {
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
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="http://localhost:3000/editar-Capacitacion">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
      </div>
    )}      
  }


export default Capacitaciones

