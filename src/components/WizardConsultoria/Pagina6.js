import React, { Component } from 'react';
import { Alert, Avatar, Button, Icon, Input, Form, Layout, Row, Upload, Col } from 'antd';
import { Link } from 'react-router-dom';

class Pagina6 extends Component {
  render() {
    return (
      <Layout>
        <h3>Página de inicio de consultoría</h3>
        <hr></hr>
        <Form>
          <Form.Group>
            <Form.Label>Título de la consultoría</Form.Label>
            <Input type="text" name="titulo_de_la_consultoría" placeholder="Inserta el título de tu consultoría" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Descripción de la consultoría</Form.Label>
            <Input type="text" name="descripcion_de_la_consultoría" placeholder="Inserta la descripción de tu consultoría." maxLength="144" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Categoría de la consultoría</Form.Label>
            <Input type="text" name="categoria_de_la_consultoría" placeholder="Inserta la descripción de tu consultoría." maxLength="144" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Imagen de la consultoría</Form.Label>
            <Row>
              <Col sm={1} md={6}>
                <img
                  style={{ width: '100%', height: 'auto' }}
                  className="mr-3"
                  src="/subi_tu_foto.png"
                  alt="Subi tu foto"
                />
              </Col>
              <Col sm={1} md={6}>
                <p>Haz que tu consultoría destaque con una atractiva imagen de nuestro equipo de diseño basada en tus preferencias y estilo. Consigue tu imagen gratis.</p>
                <p>Si creas la imagen por tu cuenta, tendrá que cumplir los estándares de calidad que deben cumplir las imágenes de los consultorías para que la aceptemos.</p>
                <p>Directrices importantes: 750 x 422 píxeles, formato .jpg, .jpeg, .gif, o .png y sin texto en la imagen.</p>
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
            </Row>
          </Form.Group>

          <Form.Group>
            <Form.Label>Video Promocional</Form.Label>
            <Row>
              <Col sm={1} md={6}>
                <img
                  style={{ width: '100%', height: 'auto' }}
                  className="mr-3"
                  src="/subi_tu_foto.png"
                  alt="Subi tu foto"
                />
              </Col>
              <Col>
                <p>Los estudiantes que ven un vídeo promocional bien hecho tienen 5 veces más probabilidades de matricularse en tu consultoría. Esa estadística se multiplica por 10 si los vídeos son excepcionalmente buenos. Aprende a hacer los tuyos impresionantes.</p>
                <Upload className="mb-3">
                  <Button>
                    <Icon type="upload">Subir imagen</Icon>
                  </Button>
                </Upload>
              </Col>
            </Row>
          </Form.Group>

        </Form>
        <h6>Perfiles de los instructores</h6>
        <Alert type="warning">
          Todos los instructores visibles de este consultoría deben completar su perfil para que el consultoría se pueda publicar. Esto incluye el nombre, una foto y una breve biografía (mínimo de 50 palabras).
        </Alert>
        <Avatar style={{ marginBottom: 20 }} src="/image_171x180.svg" />
        <Alert type="warning">
          <p>La biografía de un instructor debe tener al menos 50 palabras.</p>
          <p>Es necesaria una imagen del instructor.</p>
          <Link to="/mi-perfil" label="Actualiza tu perfil"></Link>
        </Alert>
      </Layout>
    )
  }
}

export default Pagina6