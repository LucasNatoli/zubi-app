import React, { Component } from 'react';

import {
  Form, Layout, Input,
} from 'antd';

class Pagina1 extends Component {
  render() {
    return (
      <Layout>
        <h3>Llega a tus estudiantes</h3>
        <hr></hr>
        <p>Las descripciones que escribas aquí ayudará a los estudiantes a decidir si tu curso es el adecuado para ellos.</p>
        <Form>
          <p>¿Qué aprenderán los estudiantes en tu custo?</p>
          <Form.Group>
            <Input type="text" name="respuesta_1" placeholder="Ejemplo: Crear un modelo de negocios" />
          </Form.Group>     
        </Form>

        <Form>
          <p>¿Hay requisitos para crear un curso?</p>
          <Form.Group>
            <Input type="text" name="respuesta_1" placeholder="Ejemplo: Crear un modelo de negocios" />
          </Form.Group>     
        </Form>

        <Form>
          <p>¿Quiénes son tus estudiantes objetivo?</p>
          <Form.Group>
            <Input type="text" name="respuesta_1" placeholder="Ejemplo: Crear un modelo de negocios" />
          </Form.Group>     
        </Form>
      </Layout>
    )
  }
}

export default Pagina1