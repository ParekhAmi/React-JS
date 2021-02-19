import React from 'react';
import './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul class="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;