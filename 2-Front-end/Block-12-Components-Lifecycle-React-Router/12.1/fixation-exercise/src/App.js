// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      person: [],
      dataIsHere: false,
      message: 'Loading...'
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => { 
        this.setState({ person: data.results, dataIsHere: true });
      });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.person[0].dob.age > 50) {
      return false 
    } return true
  }

  render() {
    const { person, dataIsHere, message } = this.state;
    return (
      <div className="App">
        {dataIsHere ? <div>
          <img src={person[0].picture.large} alt='random person' />
          <h2>{`${person[0].name.first} ${person[0].name.last}`}</h2>
          <h3> {person[0].email} </h3>
          <h3> {`${person[0].dob.age} years old`} </h3>
        </div> : <h2>{ message }</h2> }
      </div>
    );
  }
}

export default App;