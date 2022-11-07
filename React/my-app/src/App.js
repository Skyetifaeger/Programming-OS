import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function App() {

  this.state = {
    toggle: true
  }

  this.toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    }
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Welcome text="welcome to react" />
        </p>
        {this.state.toggle &&
          <p>This should show and hide</p>
        }
        <button class="button" onClick={this.toggle}>Show / Hide</button>
      </header>
    </div>
  );
}

class Welcome extends Component {
  render() {
    const { text } = this.props; //This is a place for Javascript
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