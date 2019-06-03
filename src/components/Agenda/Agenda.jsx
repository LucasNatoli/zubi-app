import React from 'react'
import { Button, Layout, Typography } from 'antd'
import DaytimeForm from './DaytimeForm'
import { connect } from 'react-redux'
import { agendaActions } from '../../actions'

class Agenda extends React.Component {
  constructor(props) {
    super(props)
    //this.onTrainingClick = this.onTrainingClick.bind(this)
    this.state =  {
      dayNames : ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
    }
  }

  componentDidMount() {
    const { dispatch } = this.props 
    dispatch(agendaActions.getMyAgenda())
  }

  agendaContainsDay(agenda, day) {
    return agenda.items.filter(item=> item.agenda_dia_dia === day).length > 0
  }

  render() {
    const {Text} = Typography
    const { agenda } = this.props
    let dias = []
    this.state.dayNames.map(dayName => {
      dias.push({dayName: dayName, openTime:'08:00:00', closeTime:'19:00:00', checked: false})
    })
    agenda.items.map(dia=>{
      dias[dia.agenda_dia_dia].openTime = dia.agenda_dia_hora_inicio
      dias[dia.agenda_dia_dia].closeTime = dia.agenda_dia_hora_fin
      dias[dia.agenda_dia_dia].checked = true
    })
    return (
      <Layout>
        <h1 style={{fontSize: 22}}>Carga tu agenda</h1>
        <Text>Indica a tus clientes en que dias y horarios estas disponible para concertar video llamadas de consultoria.</Text>
        <Text>Podes agregar mas de una banda horaria por dia haciendo click en el boton 'agregar horarios'</Text>
        {dias.map(dia=> (
          <DaytimeForm day={dia.dayName} checked={dia.checked} openTime={dia.openTime} closeTime={dia.closeTime}></DaytimeForm>
        ))}
        <Button type="primary">Guardar cambios</Button>
      </Layout>
    )
  }
}


function mapStateToProps(state) {

const { agenda } = state
  const {
    isFetching,
    lastUpdated,
    items: myAgenda
  } = myAgenda || {
    isFetching: true,
    items: []
  }
  return {
    agenda,
    isFetching,
    lastUpdated
  }
}
export default connect(mapStateToProps)(Agenda);