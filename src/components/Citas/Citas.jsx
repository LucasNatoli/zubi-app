import React from 'react';
import { List, Avatar } from 'antd';
const data = [
  {
    id: 1,
    title: 'Cita 1',
  },
  {
    id: 2,
    title: 'Cita 2',
  },
  {
    id: 3,
    title: 'Cita 3',
  },
  {
    id: 4,
    title: 'Ciat 4',
  },
];

export default class Citas extends React.Component {
  render() {
    return (
      <div>
        <h1>Citas</h1>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="http://localhost:3000/editar-capacitacion/">{item.title}</a>}
                description="Citas lala djiow an ewuiiiiiin wuernm vzxvcpbfsjiqe s ñasuñh"
              />
            </List.Item>
          )}
        />
      </div>     
    )
  }
}