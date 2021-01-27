import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {

  state = {
    persons: [
                { name:"Mukesh shah", age:40},
                { name:"Mehul CHavada", age:30, hob:
                  {
                    priority: ['FINANCE , ', 'SHARE , ', 'MUTUAL FUND']
                }},
                { name: "Ami Parekh", age: 26 }
          ],
          otherState: 'some other value',
          showPersons: false
  }
  

 switchNameHandler = (newName) => {
    console.log('BUtton is PRessed.');
    this.setState({
      persons: [
        { name: newName, age: 22 },
        {
          name: "Nirali Parmar", age: 19, hob:
          {
            priority: []
          }
        },
        { name: "Mitul", age: 27 }
      ]
    });
  }
  
  
 nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Ankit', age: 22 },
        {
          name: event.target.value, age: 19, hob:
          {
            priority: []
          }
        },
        { name: "Mitul", age: 27 }
      ]
    });
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow });
  }
  render(){
              const style = {
                backgroundColor: 'White',
                border: '1px solid blue',
                font: 'inherit',
                padding: '8px',
                cursor: 'pointer'

              };

              let person = null;
              if (this.state.showPersons) {
              
                person =(
                <div>
                  {this.state.persons.map(person => {
                    return <Person 
                    name = {person.name}
                    age = {person.age}/>
                  })}
                
              </div> );

              }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React JS</h1>
      </header>
      <h1 className="App-intro"> React JS App </h1>
      <p>React App learning..let's get started. </p>
       <button
            style={style}
             onClick={this.togglePersonsHandler}>Toggle Persons</button>
             
             {person}
             
            </div>

  );

  //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi,I\'m learning React'));
  }
}

export default App;



