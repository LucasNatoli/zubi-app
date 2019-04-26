import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Pagina3 extends Component {
  render() {
    return (
      <Container>
        <h3>Configuración y vídeo de prueba</h3>
        <Jumbotron>
          <Row>
            <Col>
              <h5>Arregla tu estudio ideal y obtén los primeros comentarios</h5>
              <p>Es importante que configures correctamente el vídeo y el audio ahora, ya que es mucho más difícil modificar tus vídeos después de grabarlos. Hay muchas formas creativas de utilizar lo que tienes para crear un vídeo con aspecto profesional.</p>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Ayuda profesional gratuita en vídeo</Card.Title>
                  
                  <Card.Text>Obtén ayuda personalizada para tu audio y vídeo</Card.Text>
                  <Button variant="outline-info">Crear un video de prueba</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Jumbotron>
        <h5>Consejos</h5>
        <h6>Es fácil hacerte con el equipo.</h6>
        <p>No tienes por qué complicarte comprando equipo. La mayoría de las cámaras de smartphones pueden grabar vídeo en calidad HD, y puedes grabar el audio con otro teléfono o micrófono externo.</p>

        <h6>Los estudiantes tienen que oirte.</h6>
        <p>Un buen micrófono es la pieza más importante del equipo que puedes elegir. Hay gran cantidad de opciones asequibles. Asegúrate de que está conectado correctamente y de que lo tienes colocado a unos 15-30 cm (6-12 pulgadas) de ti.</p>

        <h6>Crea un estudio.</h6>
        <p>Ordena lo que tienes de fondo y decora el espacio. Casi cualquier espacio, por pequeño que sea, se puede transformar con fondos de papel pintado o sábanas sin arrugas.</p>

        <h6>Ilumina la escena y tu cara.</h6>
        <p>Apaga las luces superiores. Intenta colocar tres puntos de iluminación: dos lámparas en frente de ti y otra detrás al fondo.</p>

        <h6>Reduce el ruido y el eco.</h6>
        <p>Apaga ventiladores o aires acondicionados, y graba cuando no haya ruidos. Coloca revestimiento acústico o mantas en las paredes, y pon alfombras y muebles para disminuir el eco.</p>

        <h6>Sé creativo.</h6>
        <p>Los estudiantes no verán lo que hay detrás. Nadie sabrá si estás rodeado de almohadas para insonorizar... ¡a menos que se lo reveles a otros instructores de la comunidad!</p>

        <h6>Requisitos</h6>
        <ul>
          <li>Graba y exporta en HD para crear vídeos con una resolución de al menos 720p, 1080p si es posible</li>
          <li>El audio debería salir de los canales derecho e izquiero y estar sincronizado con el vídeo</li>
          <li>El audio no debe tener eco ni ruido de fondo, pues puede resultar una distracción para los estudiantes</li>
        </ul>
  </Container>
    )
  }
}

export default Pagina3