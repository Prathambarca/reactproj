import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CSales from './CSales';

class App extends Component {
  render() {
    var courses= [
      {name:'Complete prize pack',price: 199},
      {name:'Complete book pack',price: 200},
      {name:'Complete car pack',price: 120},
      {name:'Complete pen pack',price: 300}
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <CSales items ={courses}/>
      </div>
    );
  }
}

export default App;
