import React from 'react';
import styled from 'styled-components';
//import './Person.css';

const StyledDiv = styled.div`
            margin: 16px auto;
            width:60%;
            padding: 10px;
            box-shadow: 5px 5px 10px darkslateblue;
            border: 1px solid darkgray;
            text-align: center;       

            @media (min-width: 500px) {
                width: 450px;
            }   
        `;

const person = (props) => {
    const style = {
        '@media (min-width: 500px)' :{
            width: '450px'
        }
    };
    return (
        //<div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}> I'm {props.name} and {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
};

export default person;