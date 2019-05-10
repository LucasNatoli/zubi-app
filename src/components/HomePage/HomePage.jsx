import React from 'react';
import { Row, Col, Card } from 'antd';
import Courses from '../Courses/Courses';
import Notifications from '../Notifications/Notifications';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col md={12}>
            <Card>
              <Courses/>
            </Card>
          </Col>
          <Col md={12}>
            <Card>
              <Notifications/>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;