import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      clickNumber1: 0,
      clickNumber2: 0,
      clickNumber3: 0,
    }

    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }

  handleClick1() {
    this.setState((state, _props) => ({
      clickNumber1: state.clickNumber1 + 1
    }))
  }
  
  handleClick2() {
    this.setState((state, _props) => ({
      clickNumber2: state.clickNumber2 + 1
    }))
  }
  
  handleClick3() {
    this.setState((state, _props) => ({
      clickNumber3: state.clickNumber3 + 1
    }))
  }
  
  render() {
    return (
      <>
        <button onClick={this.handleClick1}>{this.state.clickNumber1}</button>
        <button onClick={this.handleClick2}>{this.state.clickNumber2}</button>
        <button onClick={this.handleClick3}>{this.state.clickNumber3}</button>
      </>
    );
  }
}

export default App;
