import React, { Component } from 'react';
import './App.css';
import Listado from './Components/List.js';
import Header from './Components/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Listado/>
      </div>
    );
  }
}

export default App;
