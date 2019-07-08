import React from 'react';
import { Row, Col, Card } from 'antd';
//import Courses from '../Courses/Courses';
import Notifications from '../Notifications/Notifications';
import Drafts from '../Drafts/Drafts';
/* import { connect } from 'react-redux'
import { coursesActions } from '../../actions'
 */
class HomePage extends React.Component {
  constructor(props) {
    super(props)
    //this.onTrainingClick = this.onTrainingClick.bind(this)
  }
/* 
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(coursesActions.getAllCourses())
  } */

  render() {
    const { courses } = this.props
    return (
      <div>
        <Row gutter={16}>

          <Col md={12}>
            <Card>
              <Drafts />
            </Card>
          </Col>
{/*           <Col md={12}>
            <Card>
              <Courses courses={courses} />
            </Card>
          </Col> */}
          <Col md={12}>
            <Card>
              <Notifications />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
/* 
function mapStateToProps(state) {
  const { courses } = state
  const {
    isFetching,
    lastUpdated,
    items: allCourses
  } = allCourses || {
    isFetching: true,
    items: []
  }

  return {
    courses,
    isFetching,
    lastUpdated
  }
}


export default connect(mapStateToProps)(HomePage); */
export default HomePage;