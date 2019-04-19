import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container";
import RouteLink from '../RouteLink';

class WizardNavbar extends Component {
  render () {
    return (
      <Container fluid>
        <Navbar collapseOnSelect expand="md" variant="dark" style={{backgroundColor: "#648cff"}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end"/>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <RouteLink activeOnlyWhenExact={true} to="/" label="< Volver al Escritorio" />
            </Nav> 
          </Navbar.Collapse>  
        </Navbar>
      </Container>
    )
  }
}

export default WizardNavbar;