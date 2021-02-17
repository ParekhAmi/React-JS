import React from 'react';
import Aux from '../../hoc/Aux1';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props)=>(    
    <Aux>
        <Toolbar />
        <main class="Container">
            {props.children} 
        </main>
    </Aux>
);

export default layout;