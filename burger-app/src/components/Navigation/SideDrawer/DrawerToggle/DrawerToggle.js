import React from 'react';
import './DrawerToggle.css';

const drawerToggle = (props) => (
    <div class="DrawerToggle" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;