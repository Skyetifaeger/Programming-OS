import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const welcome = "Welcome to React";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class Welcome extends Component {
  render() {
    return (
      <h1
        className="Welcome message"
      >
        {Welcome}
      </h1>
    )
  }
}

export default App;