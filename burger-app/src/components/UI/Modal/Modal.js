import React from 'react';
import Aux from '../../../hoc/Aux1';
import './Modal.css';
import Backdrop from  '../Backdrop/Backdrop';
const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modelClosed} />
    <div
     class="Modal"
     style={{
         transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
         opacity: props.show ? '1': '0'
     }}
    >
        {props.children}
    </div>
    </Aux>
);

export default modal;