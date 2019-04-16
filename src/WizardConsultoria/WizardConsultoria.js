import React, { Component } from 'react';
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from 'react-bootstrap/Button';
import Pagina1 from './Pagina1';
import Pagina3 from './Pagina3';
import Pagina6 from './Pagina6';
import Container from 'react-bootstrap/Container';

class WizardConsultoria extends Component {
  render() {
    return (
			<Container fluid>
				<TabContainer id="list-group-tabs-example" defaultActiveKey="#llega_a_tus_estudiantes">
					<Row>
						<Col sm={3}>
							<ListGroup variant="flush">
								<h5 style={{marginTop: 20}}>Crea tu Consultoría</h5>		
								<ListGroupItem style={ListGroupItemStyle} action href="#llega_a_tus_estudiantes">Llega a tus estudiantes</ListGroupItem>
								<ListGroupItem style={ListGroupItemStyle} action href="#grabacion_y_edicion">Grabación y edición</ListGroupItem>
								<ListGroupItem style={ListGroupItemStyle} action href="#pagina_de_inicio">Página de inicio</ListGroupItem>
								<ListGroupItem style={ListGroupItemStyle} action href="#precios_y_cupones">Precios y Cupones</ListGroupItem>
							</ListGroup>
							<Button variant="danger">Enviar para revisión</Button>
						</Col>
						<Col sm={9}>
							<TabContent style={{marginTop: 30}}>
								<TabPane eventKey="#llega_a_tus_estudiantes">
									<Pagina1 />
								</TabPane>
								<TabPane eventKey="#pagina_3">
									<Pagina3 />
								</TabPane>
								<TabPane eventKey="#grabacion_y_edicion">
									Blank
								</TabPane>
								<TabPane eventKey="#pagina_de_inicio">
									<Pagina6 />
								</TabPane>
								<TabPane eventKey="#precios_y_cupones">
									Blank
								</TabPane>
								<TabPane eventKey="#pagina_8">
									Blank
								</TabPane>
							</TabContent>
						</Col>
					</Row>
				</TabContainer>
			</Container>
		);
  }
}

const ListGroupItemStyle = {
	backgroundColor: 'transparent',
	borderColor: 'transparent', 
	color: 'gray'
}

export default WizardConsultoria