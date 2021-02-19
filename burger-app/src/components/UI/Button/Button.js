import React from 'react';

const button = (props) => (
    <button 
    onClick={props.clicked}
    class={props.Name}>{props.children}</button>
);

export default button;