import React from 'react'
import CapacitacionesList from './CapacitacionesList'
import { connect } from 'react-redux'
import { zubiActions } from '../../actions'

class Capacitaciones extends React.Component {
  constructor(props) {
    super(props)
    this.onTrainingClick = this.onTrainingClick.bind(this)
  }
  onTrainingClick(id) {
    console.log(id)
  }

  componentDidMount() {
    const { dispatch } = this.props 
    dispatch(zubiActions.getMisCapacitaciones())
  }
    
  render() {
    const { posts } =  this.props
    console.log("this.props", this.props)
    return (
      <div>
        <CapacitacionesList consulting={posts} onConsultancyClick={this.onTrainingClick}></CapacitacionesList>
      </div>
    )}      
  }

  function mapStateToProps(state) {
    const { capacitaciones } = state
    const {
      isFetching,
      lastUpdated,
      items: posts
    } = capacitaciones || {
      isFetching: true,
      items: []
    }
    
    return {
      posts,
      isFetching,
      lastUpdated
    }
  }
  

export default connect(mapStateToProps)(Capacitaciones)