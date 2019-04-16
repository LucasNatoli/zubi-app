import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AppRouter from './AppRouter';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Container fluid>
          <AppRouter />
        </Container>
      </Router>
      </div>
    );
  }
}

export default App;
