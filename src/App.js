import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import AppRouter from './AppRouter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <AppRouter />
        </Container>
      </div>
    );
  }
}

export default App;
