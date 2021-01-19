import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

const app = props => {

  const [personsState , setPersonsState] = useState({
    persons:[
        {name:"Mukesh shah",age:40},
        {name:"Mehul CHavada",age:30,hob:
        {
           priority:['FINANCE , ', 'SHARE , ', 'MUTUAL FUND']
         }},
        {name:"Ami Parekh",age:26}
       ]
  });

const [otherState , setOtherState] = useState('Some Other Value');
console.log(personsState,otherState);

  const switchNameHandler =(newName)=>{
    console.log('BUtton is PRessed.');
    setPersonsState({
      persons : [
        {name:newName,age:22},
        {name:"Nirali Parmar",age:19,hob:
         {
            priority:[]
          }
      },
        {name:"Mitul",age:27}
       ]
    });
  };


  const nameChangedHandler = (event) => {
    setPersonsState({
      persons : [
        {name:'Ankit',age:22},
        {name:event.target.value,age:19,hob:
         {
            priority:[]
          }
      },
        {name:"Mitul",age:27}
       ]
    });
  }
  

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React JS</h1>
          
        </header>
        
         <h1 className="App-intro"> React JS App </h1>
         <p>React App learning..let's get started. </p>
         <button onClick={switchNameHandler.bind(this,'Ankit Thakor')}>Switch Names</button>
         <Person 
              name={personsState.persons[0].name} 
              age={personsState.persons[0].age}/>
         <Person 
            name={personsState.persons[1].name} 
            age={personsState.persons[1].age}
            click={switchNameHandler.bind(this,'Ankit')}
            changed={nameChangedHandler}>
            Hobbies: {personsState.persons[1].hob.priority} </Person>
         <Person 
            name={personsState.persons[2].name} 
            age={personsState.persons[2].age}/>
          
      </div> 
     
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi,I\'m learning React'));
  }


export default app;



