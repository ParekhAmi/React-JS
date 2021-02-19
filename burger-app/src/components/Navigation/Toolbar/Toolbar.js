import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = (props) => (
    <header class="Toolbar">
        <div>MENU</div>
        <div class="Logo">
            <Logo />
        </div>  
        <nav class="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;