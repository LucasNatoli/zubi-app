import React from 'react'
import ConsultingList from './ConsultingList'
import { connect } from 'react-redux'
import { zubiActions } from '../../actions'

const data = [
  {
    id: 1, 
    post_title: 'Consultoria 1',
    post_content: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    post_status: "pending"
  },
  {
    id: 2,
    post_title: 'Consultoria 2',
    post_content: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    post_status: "approved"
  },
  {
    id: 3,
    post_title: 'Consultoria 3',
    post_content: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    post_status: "draft"
  },
  {
    id: 4,
    post_title: 'Consultoria 4',
    post_content: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    post_status: "published"
  },
];

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
    console.log('consulting', consulting)
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