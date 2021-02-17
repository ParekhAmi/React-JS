import React from 'react';
import './NavigationItem.css';

const navigationItem = (props) => (
    <li class="NavigationItem">
        <a 
        href={props.link}
        class={props.active ? "active" : null}>{props.children}</a>
    </li>
);

export default navigationItem;