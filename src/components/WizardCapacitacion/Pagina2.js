import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';

class Pagina2 extends Component {
  render() {
    return (
      <Container>
        <h3>Estructura del Curso</h3>
        <Jumbotron>
          <Row>
            <Col>
              <h5>Hay un curso en ti. Hazlo realidad.</h5>
              <p>Planificar tu curso con cuidado creará una clara vía de aprendizaje para los estudiantes y te ayudará una vez que empieces a grabar. Piensa detenidamente en los detalles de cada clase, incluida la habilidad que enseñarás, la duración estimada del vídeo, actividades prácticas que incluirás y cómo crearás introducciones y resúmenes.</p>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Image src="/CourseStructure_CTA.png" />
                  <Card.Title>Nuestra biblioteca de recursos</Card.Title>
                  
                  <Card.Text>Consejos y directrices para estructurar un curso que les encante a los estudiantes</Card.Text>
                  <Button variant="outline-info">Aprende en el Centro de enseñanza</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Jumbotron>
        <h5>Consejos</h5>
        <h6>Elabora un esquema.</h6>
        <p>Decide qué habilidades enseñarás y cómo lo harás. Organiza las clases en secciones. Cada sección debe tener de 3 a 7 clases e incluir al menos una tarea o actividad práctica.</p>
        <h6>Preséntate y capta su atención.</h6>
        <p>La gente en Internet quiere empezar a aprender rápidamente. Haz una sección introductoria que ofrezca a los estudiantes algo que les entusiasme durante los primeros 10 minutos.</p>
        <h6>Las secciones deben tener un objetivo de aprendizaje claro.</h6>
        <p>Presenta cada sección con una descripción del objetivo de la misma y de su importancia. Los títulos de las secciones y clases deben reflejar su contenido y tener un flujo lógico.</p>
        <h6>Las clases deben cubrir un único concepto.</h6>

        <p>La duración ideal de una clase es entre 2 y 7 minutos, con el fin mantener el interés de los estudiantes y ayudarlos a estudiar en intervalos cortos. Haz que las clases vayan sobre un único tema para que los estudiantes puedan volver a ver puntos específicos más adelante.</p>
        <h6>Mezcla y combina varios tipos de clases.</h6>
        <p>Alterna entre grabarte a ti mismo y a tu pantalla con diapositivas y otros elementos visuales. Mostrarte a ti mismo ayudará a los estudiantes a sentirse conectados.</p>
        <h6>Las actividades generan aprendizaje práctico.</h6>
        <p>Ayuda a los estudiantes a aplicar las clases en el mundo real con proyectos, tareas, ejercicios de codificación o fichas.</p>
        <h6>Requisitos</h6>
        <ul>
          <li>Tu curso debe tener al menos cinco clases</li>
          <li>Las clases deben sumar en total al menos 30 minutos de vídeo</li>
          <li>Tu curso se compone de contenido educativo valioso (más información)</li>
        </ul>
  </Container>
    )
  }
}

export default Pagina2