import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Media from 'react-bootstrap/Media';
import RouterLink from './RouteLink'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './DashboardInstructor.css';
import Button from 'react-bootstrap/Button';

class DashboardInstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mis_capacitaciones: [],
      mis_consultorias: []
    };
    
  }  
  loadCapacitaciones() {
    axios.get("http://bigos.lan/wp-json/wp-react/v2/mis-capacitaciones").then(capacitaciones => {
      this.setState({
        mis_capacitaciones: capacitaciones.data
      });
    });
  }
  loadConsultorias() {
    axios.get("http://bigos.lan/wp-json/wp-react/v2/mis-consultorias").then(consultorias => {
      this.setState({
        mis_consultorias: consultorias.data
      });
    });
  }
  componentDidMount() {
    this.loadCapacitaciones();
    this.loadConsultorias();
  }   
  render() {
    return (
     <Container> 
      <Row>
        <Col>
          <h2>Capacitaciones</h2>
          <div className="lista-de-capacitaciones">
            <div className="filtros-y-acciones"></div>
            <ListGroup>
            {this.state.mis_capacitaciones.map(
              (capacitacion, i) => {
                return (
                <ListGroup.Item action key={capacitacion.ID}>
                  <Media>
                    <img
                      width={100}
                      height={100}
                      className="mr-3"
                      src="placeholder.png"
                      alt="capacitacion"
                    />
                    <Media.Body>
                      <RouterLink to={"/instructor/capacitacion/" + capacitacion.ID} label={capacitacion.post_title} />
                      
                      <ProgressBar now={60} label={'60%'}></ProgressBar>
                    </Media.Body>
                  </Media>            
                            
                </ListGroup.Item>
                )
              })}
            </ListGroup>
            
          </div>
          <Container>
            <Row className="row-action-new">
              <Col sm={{span:6, offset: 6}}>
                <Button variant="outline-primary" size="sm">Nueva Capacitación</Button>
              </Col>
            </Row>
          </Container>  
        </Col>

        <Col>
          <h2>Consultorias</h2>
          <div className="lista-de-consultorias">
          <div className="filtros-y-acciones"></div>
          <ListGroup>
          {this.state.mis_consultorias.map(
            (consultoria, i) => {
              return (
              <ListGroup.Item action key={consultoria.ID}>
                <Media>
                  <img
                    width={100}
                    height={100}
                    className="mr-3"
                    src="placeholder.png"
                    alt="consultoria"
                  />
                  <Media.Body>
                    <RouterLink to={"/instructor/consultoria/" + consultoria.ID} label={consultoria.post_title} />
                    
                    <ProgressBar now={60} label={'60%'}></ProgressBar>
                  </Media.Body>
                </Media>            
                          
              </ListGroup.Item>
              )
            })}
          </ListGroup>
        </div>
        <Container>
            <Row className="row-action-new">
              <Col sm={{span:6, offset: 6}}>
                <Button variant="outline-primary" size="sm">Nueva Consultoría</Button>
              </Col>
            </Row>
          </Container> 
        </Col>
        
      </Row>
    </Container> 
    )
  }
}

export default DashboardInstructor;