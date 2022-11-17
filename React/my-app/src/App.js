import React, { propTypes } from 'react';
import './App.css';
import { Component } from 'react';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

// function HelloWorld({name, greeting = "Hello"}) {
//   return (
//     <h1>
//       {greeting} {name}!
//     </h1>
//   )
// }

// HelloWorld.propTypes = {
//   name: propTypes.String,
//   greeting: propTypes.string
// }

export default App;