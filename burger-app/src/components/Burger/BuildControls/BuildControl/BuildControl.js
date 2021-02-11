
import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div class="BuildControl">
        <div class="Label">{props.label}</div>
        <button class="Less">Less</button>
        <button class="More">More</button>
    </div>
);
export default buildControl;

//Stateless function use ()
//Statefull class use {}