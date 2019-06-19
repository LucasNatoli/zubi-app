import React from 'react'
import DraftsList from './DraftsList'
import { connect } from 'react-redux'
import { zubiActions } from '../../actions'


class Drafts extends React.Component {
  constructor(props) {
    super(props)
    this.onDraftClick = this.onDraftClick.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(zubiActions.getMyDrafts())
  }

  onDraftClick(id) {
    console.log("draft click", id)
  }

  render() {
    const { drafts } = this.props
    return (
      <div>       
        <h1>Borradores (Drafts)</h1>
        <DraftsList drafts={drafts.items} onDraftClick={this.onDraftClick}></DraftsList>

      </div>
    )
  }
}

function mapStateToProps(state) {
  const { drafts } = state
  const {
    isFetching,
    lastUpdated,
    items: allCourses
  } = allCourses || {
    isFetching: true,
    items: []
  }

  return {
    drafts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(Drafts)
