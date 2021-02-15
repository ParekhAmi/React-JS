import React from 'react';
import './Button.css';  


const button = (props) => (
    <button 
    onClick={props.clicked}
    class="Button">{props.children}</button>
);

export default button;