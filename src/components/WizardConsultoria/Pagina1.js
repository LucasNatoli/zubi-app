import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class Pagina1 extends Component {
  render() {
    return (
      <Container>
        <h3>Llega a tus estudiantes</h3>
        <hr></hr>
        <p>Las descripciones que escribas aquí ayudará a los estudiantes a decidir si tu curso es el adecuado para ellos.</p>
        <Form>
          <p>¿Qué aprenderán los estudiantes en tu custo?</p>
          <Form.Group>
            <Form.Control type="text" name="respuesta_1" placeholder="Ejemplo: Crear un modelo de negocios" />
          </Form.Group>     
        </Form>

        <Form>
          <p>¿Hay requisitos para crear un curso?</p>
          <Form.Group>
            <Form.Control type="text" name="respuesta_1" placeholder="Ejemplo: Crear un modelo de negocios" />
          </Form.Group>     
        </Form>

        <Form>
          <p>¿Quiénes son tus estudiantes objetivo?</p>
          <Form.Group>
            <Form.Control type="text" name="respuesta_1" placeholder="Ejemplo: Crear un modelo de negocios" />
          </Form.Group>     
        </Form>
      </Container>
    )
  }
}

export default Pagina1