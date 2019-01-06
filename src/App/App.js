import React, { Component } from 'react';
import ForniteList from '../Fornite/Fornite';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Credibl</h1>
          <p>Making things in-credibl</p>
          <ForniteList />
        </header>
      </div>
    );
  }
}

export default App;
