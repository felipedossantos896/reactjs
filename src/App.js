import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      number: 0
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { target } = event
    const { name } = target 
    const value = target.type === 'checkbox' ? target.checked : target.value

    return this.setState({
      [name]: value
    })
  }

  render() {
    console.log(this.state)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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

          <input type="text" name="name" onChange={ this.handleInput } />
          <br/>
          <input type="text" name="number" onChange={ this.handleInput } />

        </header>
      </div>
    );
  }
}

export default App;
