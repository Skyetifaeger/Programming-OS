import React, { propTypes } from 'react';
import './App.css';
import { Component } from 'react';
import { Counter } from './Counter';
import { Accordion } from './Accordion'

function App() {
  return (
    <div>
      <Counter />
      <Accordion />
    </div>
  );
}

export default App;