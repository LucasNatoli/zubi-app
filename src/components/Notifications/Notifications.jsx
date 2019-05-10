import React from 'react'
import NotificationList from './NotificationList'

const data = [
  {
    id: 1, 
    post_title: 'Notificaciones 1',
    post_content: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    post_status: "pending"
  },
  {
    id: 2,
    post_title: 'Notificaciones 2',
    post_content: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    post_status: "approved"
  },
  {
    id: 3,
    post_title: 'Notificaciones 3',
    post_content: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    post_status: "draft"
  },
  {
    id: 4,
    post_title: 'Notificaciones 4',
    post_content: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    post_status: "published"
  },
];

class Notifications extends React.Component {
  constructor(props) {
    super(props)
    this.onNotificationClick = this.onNotificationClick.bind(this)
  }
  onNotificationClick(id) {
    console.log(id)
  }
  render() {
    return (
      <div>
        <h1>Notificaciones</h1>
        <NotificationList notification={data} onNotificationClick={this.onNotificationClick}></NotificationList>
      </div>
    )}      
  }


export default Notifications

