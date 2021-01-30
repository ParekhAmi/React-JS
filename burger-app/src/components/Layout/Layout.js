
import React from 'react';
import Aux from '../../hoc/Aux1';
import classes from './Layout.css';
const layout = (props)=>(    
    <Aux>
        <div >Toolbar, Side Bar, Drawer</div>
        <main class="Container" >
            {props.children} 
        </main>
    </Aux>
);

export default layout;