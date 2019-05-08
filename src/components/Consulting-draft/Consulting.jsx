import { connect } from 'react-redux'
import React from 'react'
import ConsultingList from './ConsultingList'

const data = [
  {
    post_title: 'Consultoria 1',
  },
  {
    post_title: 'Consultoria 2',
  },
  {
    post_title: 'Consultoria 3',
  },
  {
    post_title: 'Consultoria 4',
  },
];

class Consulting extends React.Component {
  render() {
    return (
      <div>
        <h1>Consulting</h1>
        <ConsultingList consulting={data}></ConsultingList>
      </div>
    )}      
  }


export default Consulting

