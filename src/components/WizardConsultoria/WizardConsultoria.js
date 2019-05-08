import React, { Component } from 'react';
import {Anchor, Button, Col, Layout, Row, Tabs} from 'antd';
import Pagina1 from './Pagina1';
import Pagina3 from './Pagina3';
import Pagina6 from './Pagina6';

class WizardConsultoria extends Component {
  render() {
		const {Link} = Anchor
		const TabPane = Tabs.TabPane;
    return (
			<Layout>
				<Tabs>
					<TabPane tab="Llega a tus estudiantes"><Pagina1 /></TabPane>
					<TabPane tab="Grabación y edición"><Pagina3 /></TabPane>
					<TabPane tab="Página de inicio"><Pagina6 /></TabPane>
					<TabPane tab="Precios y Cupones">Blank</TabPane>
				</Tabs>
{/* 				<TabContainer id="list-group-tabs-example" defaultActiveKey="#llega_a_tus_estudiantes">
					<Row>
						<Col sm={3}>
							<Anchor variant="flush">
								<h5 style={{marginTop: 20}}>Crea tu Consultoría</h5>		
								<Link style={ListGroupItemStyle} action href="#llega_a_tus_estudiantes">Llega a tus estudiantes</Link>
								<Link style={ListGroupItemStyle} action href="#grabacion_y_edicion">Grabación y edición</Link>
								<Link style={ListGroupItemStyle} action href="#pagina_de_inicio">Página de inicio</Link>
								<Link style={ListGroupItemStyle} action href="#precios_y_cupones">Precios y Cupones</Link>
							</Anchor>
							<Button type="danger">Enviar para revisión</Button>
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
 */}
			</Layout>
		);
  }
}

const ListGroupItemStyle = {
	backgroundColor: 'transparent',
	borderColor: 'transparent', 
	color: 'gray'
}

export default WizardConsultoria