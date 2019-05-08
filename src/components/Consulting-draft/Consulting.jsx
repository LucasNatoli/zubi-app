import { connect } from 'react-redux'
import React from 'react'
import ConsultingList from './ConsultingList'

const data = [
  {
    title: 'Consultoria 1',
  },
  {
    title: 'Consultoria 2',
  },
  {
    title: 'Consultoria 3',
  },
  {
    title: 'Consultoria 4',
  },
];

class Consulting extends React.Component {
  render() {
    return (
      <div>
        <h1>Consulting</h1>
        <ConsultingList></ConsultingList>
      </div>
    )}      
  }


export default Consulting

