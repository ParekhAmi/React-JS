import React, { Component } from 'react';
import AddList from './components/AddList/AddList';

class App extends Component {
  render() {
    return (
      <div>
        <p style={{ textAlign: 'center',backgroundColor: 'lightGreen'}}><strong>To Do List</strong></p>
        <AddList />
        
      </div>
    );
  }   
}

export default App;
