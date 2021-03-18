import React, { Component } from 'react';
import Form from './components/Form/Form';

class App extends Component {
  render() {
    return (
      <div>
        <p style={{textAlign: 'center',fontWeight: 'bold',backgroundColor: 'lightseagreen'}}>Send Whatsapp Message from React App</p>
      
        <Form />

      </div>
    );
  }
}

export default App;
