import React from 'react'
import NotificationList from './NotificationList'

const data = [
  {
    id: 1, 
    post_title: 'Capacitacion "Experto en evacuaciones"',
    post_content: "Vendiste este curso. Haz click aqui para ver mas detalles.",
    post_type: "shopping",
  },
  {
    id: 2,
    post_title: 'Consultoria "El uso correcto del matafuegos"',
    post_content: "Tienes una cita nueva pendiente de aprobacion. Haz click aqui para ver mas detalles.",
    post_type: "video-camera"
  },
  {
    id: 3,
    post_title: 'Consultoria "Tipos de Matafuegos"',
    post_content: "Tienes una cita nueva pendiente de aprobacion. Haz click aqui para ver mas detalles.",
    post_type: "video-camera"
  },
  {
    id: 4,
    post_title: 'Capacitacion "Evacuaciones para principiantes"',
    post_content: "Vendiste este curso. Haz click aqui para ver mas detalles.",
    post_type: "shopping"
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

