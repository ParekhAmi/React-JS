import React from 'react';
import './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul class="NavigationItems">
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders"  >Orders</NavigationItem>
    </ul>
);

export default navigationItems;