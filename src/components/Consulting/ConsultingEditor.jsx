import React from 'react'
import { Alert, Avatar, Button, Card, Col, Form, Icon, Input, Layout, Row, Tabs, Upload } from 'antd';
import UploadJpg from '../UploadJpg'
import './Consulting.css'
import { connect } from 'react-redux'
import { zubiActions } from '../../actions'


class ConsultingForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    this.props.post && console.log('rendering post', this.props.post)
    const { Header, Content } = Layout;
    const TabPane = Tabs.TabPane;

    return (
      <Layout className="inner-layout ">
        <Header className="header">
          <Button type="secondary" onClick={this.props.goHomeClick}><Icon type="arrow-left" />Volver al escritorio</Button>
          <Button type="primary" href="/">Guardar</Button>
        </Header>
        <Content>
          <Tabs defaultActiveKey="1" style={{ margin: '2em 0.7em 0 0.7em' }}>

            <TabPane key="1" tab="Inicio" className="panel">
              <h3>Consultoría: Página de Inicio</h3>
              <hr></hr>
              <Form>
                <h4>Título</h4>
                <Input
                  type="text"
                  name="titulo_de_la_consultoría"
                  placeholder="Inserta el título de tu consultoría"
                  value={this.props.post && this.props.post.post_title}
                />
                <h4>Descripción</h4>
                <Input
                  type="text"
                  name="descripcion_de_la_consultoría"
                  placeholder="Inserta la descripción de tu consultoría."
                  value={this.props.post && this.props.post.post_content}
                  maxLength="144" />
                <h4>Categorías</h4>
                <Input type="text" name="categoria_de_la_consultoría" placeholder="Inserta la descripción de tu consultoría." maxLength="144" />
              </Form>
              <h4>Perfiles de los instructores</h4>
              <Alert
                message="Todos los instructores visibles de este consultoría deben completar su perfil para que el consultoría se pueda publicar. Esto incluye el nombre, una foto y una breve biografía (mínimo de 50 palabras)."
                type="warning" />
              <Alert message="La biografía de un instructor debe tener al menos 50 palabras." type="warning" />

              <Avatar style={{ marginBottom: 20 }} src="/image_171x180.svg" />

              {/*   <Alert message="Es necesaria una imagen del instructor." type="warning" />
                
              <Link to="/mi-perfil" label="Actualiza tu perfil"></Link> */}
            </TabPane>
            <TabPane key="2" tab="Imagen">
              <h4>Imagen de la consultoría</h4>
              <p>Haz que tu consultoría destaque con una atractiva imagen de nuestro equipo de diseño basada en tus preferencias y estilo. Consigue tu imagen gratis.</p>
              <p>Si creas la imagen por tu cuenta, tendrá que cumplir los estándares de calidad que deben cumplir las imágenes de los consultorías para que la aceptemos.</p>
              <p>Directrices importantes: 750 x 422 píxeles, formato .jpg, .jpeg, .gif, o .png y sin texto en la imagen.</p>
              <UploadJpg />
            </TabPane>
            <TabPane key="3" tab="Video">
              <h4>Video Promocional</h4>
              <p>Los estudiantes que ven un vídeo promocional bien hecho tienen 5 veces más probabilidades de matricularse en tu consultoría. Esa estadística se multiplica por 10 si los vídeos son excepcionalmente buenos. Aprende a hacer los tuyos impresionantes.</p>
              <UploadJpg />
            </TabPane>

          </Tabs>
        </Content>
      </Layout>
    )
  }
}

class ConsultingEditor extends React.Component {
  constructor(props) {
    super(props)
    this.goHomeClick = this.goHomeClick.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(zubiActions.getMisConsultorias())
  }

  goHomeClick() {
    this.props.history.push('/')
  }
  render() {
    const { posts } = this.props
    const postId = this.props.match.params.id
    const post = posts.find(post => post.ID == postId)
    //TODO: Si el id del post no existe debe mandar a 404
    return (
      <ConsultingForm post={post} goHomeClick={this.goHomeClick}></ConsultingForm>
    )
  }
}


function mapStateToProps(state) {
  const { consulting, authentication } = state
  //TODO: Revisar que pasa con authentication invalido. fallo en ventana de incognito
  let userId = authentication.user.data.ID ? authentication.user.data.ID : 0

  const {
    isFetching,
    lastUpdated,
    items: posts
  } = consulting || {
    isFetching: true,
    items: []
  }

  return {
    userId,
    posts,
    isFetching,
    lastUpdated
  }
}


export default connect(mapStateToProps)(ConsultingEditor)