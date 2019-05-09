import React, { Component } from 'react';
import { Alert, Anchor, Avatar, Button, Card, Col, Form, Icon, Input, Layout, Row, Tabs, Upload } from 'antd';

export default class WizardConsultoria extends Component {
	render() {
		const { Link } = Anchor
		const TabPane = Tabs.TabPane;
		return (
			<Layout>
				<Tabs>
					<TabPane tab="Llega a tus estudiantes">
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
					</TabPane>
					<TabPane tab="Grabación y edición">
						<Layout>
							<h3>Configuración y vídeo de prueba</h3>
							<Alert type="info">
								<Row>
									<Col>
										<h5>Arregla tu estudio ideal y obtén los primeros comentarios</h5>
										<p>Es importante que configures correctamente el vídeo y el audio ahora, ya que es mucho más difícil modificar tus vídeos después de grabarlos. Hay muchas formas creativas de utilizar lo que tienes para crear un vídeo con aspecto profesional.</p>
									</Col>
									<Col>
										<Card title="Ayuda profesional gratuita en vídeo">
											Obtén ayuda personalizada para tu audio y vídeo
                  <Button variant="outline-info">Crear un video de prueba</Button>
										</Card>
									</Col>
								</Row>
							</Alert>
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
						</Layout>

					</TabPane>
					<TabPane tab="Página de inicio">
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
					</TabPane>
					<TabPane tab="Precios y Cupones">Blank</TabPane>
				</Tabs>
			</Layout>
		);
	}
}

