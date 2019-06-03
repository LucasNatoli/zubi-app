import React from 'react'
import { Button, Form, Icon, Input, Layout } from 'antd';
import { connect } from 'react-redux'
import { zubiActions } from '../../actions'


class NewConsultancyForm extends React.Component {
  constructor(props) {
    super(props)
  }
/* 
  componentDidMount() {
    const { dispatch } = this.props 
    dispatch(zubiActions.getMisConsultorias())
  } */

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  goHomeClick() {
    this.props.history.push('/')
  }
  render() {
    const { Header, Content } = Layout;
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout className="inner-layout">
        <Header className="header">
          <Button type="secondary" onClick={this.goHomeClick}><Icon type="arrow-left" />Volver al escritorio</Button>
          <Button type="primary"
          >Continuar</Button>
        </Header>
        <Content style={{margin:20}}>
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
          </Form>
        </Content>
      </Layout>
    );
  }
}

const NewConsultancy = Form.create({ name: 'normal_login' })(NewConsultancyForm);

export default NewConsultancy