import React from 'react';
import Aux from '../../hoc/Aux1';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props)=>(    
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main class="Container">
            {props.children} 
        </main>
    </Aux>
);

export default layout;