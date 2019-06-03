import React from 'react'
import ChatList from './ChatList'
import { connect } from 'react-redux'
import { zubiActions } from '../../actions'

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.onChatClick = this.onChatClick.bind(this)
  }
  onChatClick(id) {
    console.log(id)
  }

  componentDidMount() {
    const { dispatch } = this.props 
    dispatch(zubiActions.getMyActiveChats())
  }
    
  render() {

    const { chats } =  this.props
    return (
      <div>
        <ChatList chats={chats} onChatClick={this.onChatClick}></ChatList>
      </div>
    )}      
  }

  function mapStateToProps(state) {
    
    const { chatApp } = state
    const {
      isFetching,
      lastUpdated,
      items: chats
    } = chatApp || {
      isFetching: true,
      items: []
    }
  
    return {
      chats,
      isFetching,
      lastUpdated
    }
  }
  

export default connect(mapStateToProps)(Chat)