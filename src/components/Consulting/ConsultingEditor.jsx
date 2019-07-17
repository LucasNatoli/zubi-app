import React from 'react'
import { Alert, Avatar, Button, Select, Form, Icon, Input, Layout, Row, Tabs, Upload } from 'antd';
import UploadJpg from '../UploadJpg'
import { connect } from 'react-redux'
import { zubiActions } from '../../actions'

const { Option } = Select
const children = [
  <Option key="1">Bancos</Option>,
  <Option key="2">Emprendedor</Option>,
  <Option key="3">Finanzas</Option>,
  <Option key="4">Legales</Option>,
  <Option key="5">Programa de Profesionalización</Option>,
  <Option key="6">Proveedores/Compras</Option>,
  <Option key="7">Selección de Personal</Option>  
];

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
                  placeholder="Utiliza un nombre especifico ej. Asesor en Contratos para Franquicias"
                  value={this.props.post && this.props.post.post_title}
                />
                <h4>Descripción</h4>
                <p>Describe todo lo que puede aprender de tu experiencia, que tipo de consultoría virtual sobre ese tema podrías brindarle.</p>
                <Input
                  type="text"
                  name="descripcion_de_la_consultoría"
                  placeholder="Maximo: 144 caracteres."
                  value={this.props.post && this.props.post.post_content}
                  maxLength="144" />
                <h4>Categorías</h4>
                {/* <Input type="text" name="categoria_de_la_consultoría" placeholder="Inserta la descripción de tu consultoría." maxLength="144" /> */}
                <Select
          mode="multiple"
          size={'default'}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          //onChange={handleChange}
          style={{ width: '100%' }}
        >
          {children}
        </Select>
                <h4>Precio</h4>
                <Input
                  type="text"
                  name="precio_de_la_consultoría"
                  placeholder="Indica el importe en pesos argentinos."
                  //value={this.props.post && this.props.post.post_content}
                  maxLength="5" />
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
              <p>Elige una imagen que atraiga a tu público. Tendrá que cumplir los estándares de calidad que deben cumplir las imágenes para que la aceptemos.</p>
              <p>Importante: 750 x 422 píxeles, formato .jpg, .jpeg, .gif, o .png y sin texto en la imagen.</p>
              <UploadJpg />
            </TabPane>
            <TabPane key="3" tab="Video">
              <h4>Video de Presentacion</h4>
              <h5>LLEGA A LOS DUEÑOS DE MICRO Y PEQUEÑAS EMPRESAS</h5>
              <p>Si todavía no viste los consejos de como grabarte para tu video de presentación te invitamos a hacer <a href="https://www.zubi.com.ar/primeros-pasos-para-dar-de-alta-tu-perfil">click aquí.</a></p>
              <p>Si ya viste los consejos y requisitos de como grabarte y tienes el equipo, ya estás en condiciones de enviarnos el video de Presentación para que nuestro equipo evalúe la calidad del mismo y te asesore.</p>
              <p>Recuerda enviar la consultoria para revision y recibiras un mensaje a tu mail registrado dentro de las proximas 72 a 96 horas.</p>
              <p>Recuerda revisar el correo no deseado si no recibiste respuesta.</p>
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