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
          <Welcome text="welcome to react" />
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
    const{text} = this.props; //This is a place for Javascript
    return (
      <h1
        className="Welcome message"
      >
        {text}
      </h1>
    )
  }
}


export default App;
