import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
const word = "Hello";
class App extends Component {
  render() {
    return (
      <div className="App">
        <WordCard value="hello"/>
         </div>
      );
  }
}

export default App;
