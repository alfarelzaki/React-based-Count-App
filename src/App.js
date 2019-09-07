import React from 'react';
import logo from './logo.svg';
import CardGame from "./components/CardGame"
// import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <CardGame className="row"/>
    )
  }
}

export default App;
