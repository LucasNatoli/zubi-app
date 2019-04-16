import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container";
import RouteLink from './RouteLink';

class AppNavbar extends Component {
  render () {
    return (
      <Container fluid>
        <Navbar collapseOnSelect expand="md" variant="dark" style={{backgroundColor: "#648cff"}}>
          <Navbar.Brand>
{/*             <img src="/logo-blanco.png"
              width="45"
              height="43"
              className="d-inline-block align-top"
              alt="logo"
            /> */}
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end"/>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <RouteLink activeOnlyWhenExact={true} to="/" label="Home" />
{/*               <RouteLink to="/login" label="Iniciar Sesion" />
              <RouteLink to="/register" label="Registrarse" />
              <RouteLink to="/cursos" label="Cursos" />
              <RouteLink to="/blog" label="Blog" />
              <RouteLink to="/dashboard-instructor" label="Dashboard" /> */}

            </Nav> 
          </Navbar.Collapse>  
        </Navbar>
      </Container>
    )
  }
}

export default AppNavbar;