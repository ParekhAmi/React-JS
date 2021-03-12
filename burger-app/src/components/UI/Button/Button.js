import React from 'react';

const button = (props) => (
    <button
    disabled={props.disabled} 
    onClick={props.clicked}
    class={props.Name}>{props.children}</button>
);

export default button;