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
          <Button type="secondary" onClick={this.goHomeClick}><Icon type="arrow-left" />Volver al escritorio</Button>
          <Button type="primary" href="/">Guardar</Button>
        </Header>
        <Content>
          <h1>Id: { this.props.post && this.props.post.ID}</h1>
          <Tabs defaultActiveKey="1" tabPosition="left" style={{ marginTop: '2em'}}>
            <TabPane tab="Llega a tus estudiantes" key="1" style={{ margin: '0 2em'}} className="panel">
              <h3 className="title">Llega a tus estudiantes</h3>
              <hr></hr>
              <p>Las descripciones que escribas aquí ayudará a los estudiantes a decidir si tu curso es el adecuado para ellos.</p>
              <div className="content">
                <p>¿Qué aprenderán los estudiantes en tu curso?</p>
                <Input type="text" name="respuesta_1" placeholder="Ejemplo: Crear un modelo de negocios" />
                <p>¿Hay requisitos para crear un curso?</p>
                <Input type="text" name="respuesta_1" placeholder="Ejemplo: Crear un modelo de negocios" />
                <p>¿Quiénes son tus estudiantes objetivo?</p>
                <Input type="text" name="respuesta_1" placeholder="Ejemplo: Crear un modelo de negocios" />
              </div>
            </TabPane>


            <TabPane tab="Grabación y edición" key="2">
              <Layout>
                <h3>Configuración y vídeo de prueba</h3>
                <Row type="flex" justify="space-around" align="middle">
                  <Col span={10}>
                    <h4>Arregla tu estudio ideal y obtén los primeros comentarios</h4>
                    <p>Es importante que configures correctamente el vídeo y el audio ahora, ya que es mucho más difícil modificar tus vídeos después de grabarlos. Hay muchas formas creativas de utilizar lo que tienes para crear un vídeo con aspecto profesional.</p>
                  </Col>
                  <Col span={10}>
                    <Card title="Ayuda profesional gratuita en vídeo">
                      Obtén ayuda personalizada para tu audio y vídeo
                  <Button variant="outline-info">Crear un video de prueba</Button>
                    </Card>
                  </Col>
                </Row>
                <h3>Consejos</h3>
                <h4>Es fácil hacerte con el equipo.</h4>
                <p>No tienes por qué complicarte comprando equipo. La mayoría de las cámaras de smartphones pueden grabar vídeo en calidad HD, y puedes grabar el audio con otro teléfono o micrófono externo.</p>

                <h4>Los estudiantes tienen que oirte.</h4>
                <p>Un buen micrófono es la pieza más importante del equipo que puedes elegir. Hay gran cantidad de opciones asequibles. Asegúrate de que está conectado correctamente y de que lo tienes colocado a unos 15-30 cm (6-12 pulgadas) de ti.</p>

                <h4>Crea un estudio.</h4>
                <p>Ordena lo que tienes de fondo y decora el espacio. Casi cualquier espacio, por pequeño que sea, se puede transformar con fondos de papel pintado o sábanas sin arrugas.</p>

                <h4>Ilumina la escena y tu cara.</h4>
                <p>Apaga las luces superiores. Intenta colocar tres puntos de iluminación: dos lámparas en frente de ti y otra detrás al fondo.</p>

                <h4>Reduce el ruido y el eco.</h4>
                <p>Apaga ventiladores o aires acondicionados, y graba cuando no haya ruidos. Coloca revestimiento acústico o mantas en las paredes, y pon alfombras y muebles para disminuir el eco.</p>

                <h4>Sé creativo.</h4>
                <p>Los estudiantes no verán lo que hay detrás. Nadie sabrá si estás rodeado de almohadas para insonorizar... ¡a menos que se lo reveles a otros instructores de la comunidad!</p>

                <h4>Requisitos</h4>
                <ul>
                  <li>Graba y exporta en HD para crear vídeos con una resolución de al menos 720p, 1080p si es posible</li>
                  <li>El audio debería salir de los canales derecho e izquiero y estar sincronizado con el vídeo</li>
                  <li>El audio no debe tener eco ni ruido de fondo, pues puede resultar una distracción para los estudiantes</li>
                </ul>
              </Layout>

            </TabPane>

            <TabPane tab="Página de inicio" key="3">
              <h3>Página de inicio de consultoría</h3>
              <hr></hr>
              <Form>
                <h4>Título de la consultoría</h4>

                <Input 
                  type="text" 
                  name="titulo_de_la_consultoría" 
                  placeholder="Inserta el título de tu consultoría"
                  value={this.props.post && this.props.post.post_title} 
                />
                <h4>Descripción de la consultoría</h4>
                <Input type="text" name="descripcion_de_la_consultoría" placeholder="Inserta la descripción de tu consultoría." maxLength="144" />
                <h4>Categoría de la consultoría</h4>
                <Input type="text" name="categoria_de_la_consultoría" placeholder="Inserta la descripción de tu consultoría." maxLength="144" />
                <h4>Imagen de la consultoría</h4>
                <p>Haz que tu consultoría destaque con una atractiva imagen de nuestro equipo de diseño basada en tus preferencias y estilo. Consigue tu imagen gratis.</p>
                <p>Si creas la imagen por tu cuenta, tendrá que cumplir los estándares de calidad que deben cumplir las imágenes de los consultorías para que la aceptemos.</p>
                <p>Directrices importantes: 750 x 422 píxeles, formato .jpg, .jpeg, .gif, o .png y sin texto en la imagen.</p>

                <UploadJpg />

                {/*                 <Row>
                  <Col sm={1} md={6}>
                    <img
                      style={{ width: '100%', height: 'auto' }}
                      className="mr-3"
                      src="/subi_tu_foto.png"
                      alt="Subi tu foto"
                    />
                  </Col>
                  <Col sm={1} md={6}>
                    <Upload className="mb-3">
                      <Input
                        placeholder="No has seleccionado un archivo"
                        aria-label="No has seleccionado un archivo"
                      />
                      <Upload.Append>
                        <Button>Subir imagen</Button>
                      </Upload.Append>
                    </Upload>
                  </Col>
                </Row> */}



                <h4>Video Promocional</h4>
                <p>Los estudiantes que ven un vídeo promocional bien hecho tienen 5 veces más probabilidades de matricularse en tu consultoría. Esa estadística se multiplica por 10 si los vídeos son excepcionalmente buenos. Aprende a hacer los tuyos impresionantes.</p>
                    

                <UploadJpg />

              </Form>
              <h4>Perfiles de los instructores</h4>
              <Alert 
                message="Todos los instructores visibles de este consultoría deben completar su perfil para que el consultoría se pueda publicar. Esto incluye el nombre, una foto y una breve biografía (mínimo de 50 palabras)."
                type="warning" />
              <Alert message="La biografía de un instructor debe tener al menos 50 palabras." type="warning"/>
                
              <Avatar style={{ marginBottom: 20 }} src="/image_171x180.svg" />
                
              {/*   <Alert message="Es necesaria una imagen del instructor." type="warning" />
                
              <Link to="/mi-perfil" label="Actualiza tu perfil"></Link> */}
            </TabPane>
            <TabPane tab="Precios y Cupones">Blank</TabPane>
          </Tabs>
        </Content>
      </Layout>      
    )
  }
}

class ConsultingEditor extends React.Component {
  constructor(props) {
    super(props)
    console.log('ConsultingEditor Props', props.match.params.id)
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
      <ConsultingForm post={post}></ConsultingForm>
    )
  }
}


function mapStateToProps(state) {
  const { consulting, authentication } = state
  //TODO: Revisar que pasa con authentication invalido. fallo en ventana de incognito
  let userId = authentication.user.data.ID ? authentication.user.data.ID :  0
  
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