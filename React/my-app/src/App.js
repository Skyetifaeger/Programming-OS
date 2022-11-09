import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld />
      </header>
    </div>
  );
}

function HelloWorld() {
  return(
    <h1>Hello World</h1> 
  )
}

export default App;