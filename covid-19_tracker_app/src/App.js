import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import Countrypicker from './components/Countrypicker/Countrypicker';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Covid19 Tracker App</h1>

        
        <Countrypicker />
        <Cards />    
        <Chart /> 
      </div>
    );
  }
}

export default App;
