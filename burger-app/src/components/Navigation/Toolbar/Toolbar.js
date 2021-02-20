import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => (
    <header class="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
            <Logo />
        <nav class="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;