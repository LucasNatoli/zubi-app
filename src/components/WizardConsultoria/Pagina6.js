import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Media from 'react-bootstrap/Media';
import RouteLink from '../RouteLink';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Pagina6 extends Component {
  render() {
    return (
      <Container>
        <h3>Página de inicio de consultoría</h3>
        <hr></hr>
        <Form>
          <Form.Group>
            <Form.Label>Título de la consultoría</Form.Label>
            <Form.Control type="text" name="titulo_de_la_consultoría" placeholder="Inserta el título de tu consultoría" />
          </Form.Group>     
         

          <Form.Group>
            <Form.Label>Descripción de la consultoría</Form.Label>
            <Form.Control type="text" name="descripcion_de_la_consultoría" placeholder="Inserta la descripción de tu consultoría." maxLength="144"/>
          </Form.Group>     


          <Form.Group>
            <Form.Label>Categoría de la consultoría</Form.Label>
            <Form.Control type="text" name="categoria_de_la_consultoría" placeholder="Inserta la descripción de tu consultoría." maxLength="144"/>
          </Form.Group> 
          <Form.Group>
            <Form.Label>Imagen de la consultoría</Form.Label>
            <Row>
              <Col sm={1} md={6}>
              <img
                style={{width: '100%', height: 'auto'}}
                  className="mr-3"
                  src="/subi_tu_foto.png"
                  alt="Subi tu foto"
                />
              </Col>
              <Col sm={1} md={6}>
              <p>Haz que tu consultoría destaque con una atractiva imagen de nuestro equipo de diseño basada en tus preferencias y estilo. Consigue tu imagen gratis.</p>
              <p>Si creas la imagen por tu cuenta, tendrá que cumplir los estándares de calidad que deben cumplir las imágenes de los consultorías para que la aceptemos.</p>
              <p>Directrices importantes: 750 x 422 píxeles, formato .jpg, .jpeg, .gif, o .png y sin texto en la imagen.</p>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="No has seleccionado un archivo"
                  aria-label="No has seleccionado un archivo"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Subir imagen</Button>
                </InputGroup.Append>
              </InputGroup>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Form.Label>Video Promocional</Form.Label>
            <Row>
              <Col sm={1} md={6}>
              <img
                style={{width: '100%', height: 'auto'}}
                  className="mr-3"
                  src="/subi_tu_foto.png"
                  alt="Subi tu foto"
                />              
              </Col>
              <Col>
              <p>Los estudiantes que ven un vídeo promocional bien hecho tienen 5 veces más probabilidades de matricularse en tu consultoría. Esa estadística se multiplica por 10 si los vídeos son excepcionalmente buenos. Aprende a hacer los tuyos impresionantes.</p>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="No has seleccionado un archivo"
                  aria-label="No has seleccionado un archivo"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Subir imagen</Button>
                </InputGroup.Append>
              </InputGroup>
              </Col>
            </Row>
          </Form.Group>

        </Form>
        <h6>Perfiles de los instructores</h6>
        <Alert  variant="danger">
          Todos los instructores visibles de este consultoría deben completar su perfil para que el consultoría se pueda publicar. Esto incluye el nombre, una foto y una breve biografía (mínimo de 50 palabras).
        </Alert>   
        <Media style={{marginBottom:20}}>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="/image_171x180.svg"
                  alt="Instructor"
                />
                <Media.Body>
                  Nombre del instructor
                </Media.Body>
              </Media>              
              <Alert variant="danger">
                  <p>La biografía de un instructor debe tener al menos 50 palabras.</p>
                  <p>Es necesaria una imagen del instructor.</p>
                  <RouteLink to="/mi-perfil" label="Actualiza tu perfil"></RouteLink>
                  </Alert>
      </Container>
    )
  }
}

export default Pagina6