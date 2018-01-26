import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParticleTest from './particleTest'

const center = {
  column: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  }
};

class App extends Component {
  render() {
    return (
      <div style={center.column}>
        <ParticleTest/>
      </div>
    );
  }
}

export default App;
