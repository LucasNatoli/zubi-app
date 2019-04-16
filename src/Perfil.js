import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './Perfil.css'

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      titulo: '',
      biografia: ''
    };
  }  
  render() {
    return (
      <Container>  
        <Row>  
          <Col sm={1} md={6}>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="apellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group controlId="titulo">
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder="Contador o Arquitecto"  />
            </Form.Group>
            <Form.Group controlId="biografia">
              <Form.Label>Biografía</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>

          <Col sm={1} md={6}>
          <h6>Vista previa de imagen</h6>
          <p>Mínimo 200x200 píxeles, máximo 6000x6000 píxeles</p>
            <div className="anonymous">
              <Image
                src="anonymous.png"
              />
            </div>
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
      </Container>
    );
  }
}

export default Perfil