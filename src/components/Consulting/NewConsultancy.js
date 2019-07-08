import React from 'react'
import { Button, Form, Icon, Input, Layout } from 'antd';
import { connect } from 'react-redux'
import { zubiActions } from '../../actions'

let user = JSON.parse(localStorage.getItem('user'));

class NewConsultancyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      loading: false
    }
    console.log('props', props)
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('title', this.props.form.getFieldValue('title'))
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log('user', user)
        //zubiActions.createConsultoria()
      }
    });
  };

  render() {
    const { Header, Content } = Layout;
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout className="inner-layout">
        <Header className="header">
          <Button type="secondary" href="/"><Icon type="arrow-left" />Volver al escritorio</Button>
        </Header>
        <Content style={{ margin: 20 }}>
          <h1>Ingresa el nombre de tu consultoria. Este nombre sera el que se muestre como título.</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Por favor ingresa el titulo de tu consultoría' }],
              })(
                <Input
                  prefix={<Icon type="font-size" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Titulo"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">Continuar</Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    );
  }
}

const NewConsultancy = Form.create({ name: 'normal_login' })(NewConsultancyForm);

export default NewConsultancy