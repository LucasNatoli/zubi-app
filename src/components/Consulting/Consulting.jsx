import React from 'react'
import ConsultingList from './ConsultingList'
import { connect } from 'react-redux'
import { zubiActions } from '../../actions'
import './Consulting.css'

class Consulting extends React.Component {
  constructor(props) {
    super(props)
    this.onConsultancyClick = this.onConsultancyClick.bind(this)
  }

  onConsultancyClick(id) {
    console.log("consultoria", id)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(zubiActions.getMisConsultorias())
  }

  render() {
    const { posts, isFetching } = this.props
    return (
      <ConsultingList 
        consulting={posts} 
        loading={isFetching} 
        onConsultancyClick={this.onConsultancyClick}
      ></ConsultingList>
    )
  }
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