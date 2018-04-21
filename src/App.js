import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isVisible: true};
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState({isVisible: !this.state.isVisible});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React ;)</h1>
        </header>
        <p className="App-intro">
        <button onClick={this.toggleVisibility}>toggle</button>
        {this.state.isVisible ? (
          <span>To get started, edit <code>src/App.js</code> and save to reload.</span>
        ):null}
        </p>
      </div>
    );
  }
}

export default App;
