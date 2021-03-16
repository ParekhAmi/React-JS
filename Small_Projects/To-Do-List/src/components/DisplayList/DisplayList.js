import React from 'react';
import './DisplayList.css';

const displaylist = (props) => (
    <div class="DisplayList">
        <ul>
            {props.display.map((listValue,index) => {
                return <li key={index}>{listValue}</li>;
            })}

       </ul>
        
    </div>
);

export default displaylist;