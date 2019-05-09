import React from 'react'
import { Button, Layout, Typography, TimePicker } from 'antd'
import DaytimeForm from './DaytimeForm'

class Agenda extends React.Component {
  render() {
    const {Text} = Typography
    return (
      <Layout>
        <h1>Agenda</h1>
        <Text>Indica a tu audiencia en que dias y horarios pueden concertar citas de consultoria</Text>
        <DaytimeForm day="Lunes" openTime="08:00:00" closeTime="21:00:00"></DaytimeForm>
        <DaytimeForm day="Martes" openTime="08:00:00" closeTime="21:00:00"></DaytimeForm>
        <DaytimeForm day="Miercoles" openTime="08:00:00" closeTime="21:00:00"></DaytimeForm>
        <DaytimeForm day="Jueves" openTime="08:00:00" closeTime="21:00:00"></DaytimeForm>
        <DaytimeForm day="Viernes" openTime="08:00:00" closeTime="21:00:00"></DaytimeForm>
        <DaytimeForm day="Sabado" openTime="08:00:00" closeTime="21:00:00"></DaytimeForm>
        <DaytimeForm day="Domingo" openTime="08:00:00" closeTime="21:00:00"></DaytimeForm>
        <Button type="primary">Guardar cambios</Button>
      </Layout>
    )
  }
}

export default Agenda