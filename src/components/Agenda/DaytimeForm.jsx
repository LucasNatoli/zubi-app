import React from 'react'
import { Checkbox, Col, Form, TimePicker, Row } from 'antd'
import moment from 'moment'

export default class DaytimeForm extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Recibido: ', values)
      }
    })
  }
  
  render() {
    return (
      <Form layout="inline">
        <Row>
          <Col span="6">
            <Form.Item title="Dia de la semana">
              <Checkbox>{this.props.day}</Checkbox>
            </Form.Item>
          </Col>
          <Col span="6">
            <Form.Item title="Item 1">
              <TimePicker
                //onChange={onChange} 
                format="HH:mm"
                minuteStep={10}
                defaultOpenValue={moment(this.props.openTime, 'HH:mm')}
                placeholder="Inicio" />
            </Form.Item>
          </Col>
          <Col span="6">
            <Form.Item title="Item 1">
              <TimePicker
                //onChange={onChange}  
                format="HH:mm"
                minuteStep={10}
                defaultOpenValue={moment(this.props.closeTime, 'HH:mm')}
                placeholder="Fin" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }
}