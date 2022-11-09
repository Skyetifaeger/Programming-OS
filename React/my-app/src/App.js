import logo from './logo.svg';
import React, { propTypes } from 'react';
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
        <HelloWorld name="Skye" greeting='Wassup'/>
        <HelloWorld name="World" />
      </header>
    </div>
  );
}

function HelloWorld({name, greeting = "Hello"}) {
  return (
    <h1>
      {greeting} {name}!
    </h1>
  )
}

HelloWorld.propTypes = {
  name: propTypes.String,
  greeting: propTypes.string
}

export default App;