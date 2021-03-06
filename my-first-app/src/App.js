import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person.js';

const StyledButton = styled.button`
          background-color: green;
          color: white;
          border: 1px solid blue;
          font: inherit;
          padding: 8px;
          cursor: pointer
          &:hover {
            background-color: lightgreen;
            color: black;  
          }
`;

class App extends Component {

  state = {
    persons: [
      { id:'kfgjfk',name: "Mukesh shah", age: 40 },
      {
        id:'asdef',name: "Mehul CHavada", age: 30, hob:
        {
          priority: ['FINANCE , ', 'SHARE , ', 'MUTUAL FUND']
        }
      },
      { id:'sdfd',name: "Ami Parekh", age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }
  
  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
  
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }

    };

    let person = null;
    if (this.state.showPersons) {

      person = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event,person.id)}/>
          })}

        </div>);

        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = "red"
    } 
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red','bold']
    }

    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React JS</h1>
        </header>
        <h1 className="App-intro"> React JS App </h1>
        <p className={classes.join(' ')}>React App learning..let's get started. </p>

        <StyledButton onClick={this.togglePersonsHandler}>Toggle Persons
        </StyledButton>

        {person}

      </div>
      
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi,I\'m learning React'));
  }
}

export default App;



