import React from 'react'
import DraftsList from './DraftsList'
import { connect } from 'react-redux'
import { zubiActions } from '../../actions'
import { Card, Icon } from 'antd'


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
      <Card
        title="Borradores"
        extra={[<span style={{color: '#08c'}}><Icon type="plus-square" style={{ fontSize: '16px'}} /> Hello</span>]}
        actions={[<Icon type="setting" />]}>
        <DraftsList drafts={drafts.items} onDraftClick={this.onDraftClick}></DraftsList>
      </Card>
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
