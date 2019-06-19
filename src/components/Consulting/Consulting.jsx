import React from 'react'
import ConsultingList from './ConsultingList'
import { connect } from 'react-redux'
import { zubiActions } from '../../actions'

class Consulting extends React.Component {
  constructor(props) {
    super(props)
    this.onConsultancyClick = this.onConsultancyClick.bind(this)
  }
  onConsultancyClick(id) {
    console.log(id)
  }

  componentDidMount() {
    const { dispatch } = this.props 
    dispatch(zubiActions.getMisConsultorias())
  }
    
  render() {
    const { posts } =  this.props
    return (
      <div>
        <ConsultingList consulting={posts} onConsultancyClick={this.onConsultancyClick}></ConsultingList>
      </div>
    )}      
  }

  function mapStateToProps(state) {
    const { consulting } = state
    const {
      isFetching,
      lastUpdated,
      items: posts
    } = consulting || {
      isFetching: true,
      items: []
    }
  
    return {
      posts,
      isFetching,
      lastUpdated
    }
  }
  

export default connect(mapStateToProps)(Consulting)