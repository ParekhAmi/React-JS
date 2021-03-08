import React from 'react';
import './Input.css';

const Input = (props) => {

    let inputElement = null;

    switch(props.elementType)
    {
            case ('input') : 
                inputElement= <input 
                class="InputElement" 
                {...props.elementConfig} 
                value={props.value}/>
                break;
            case ('textarea'):
                inputElement= <textarea 
                class="InputElement" 
                {...props.elementConfig} 
                value={props.value}/>
                break;
            case ('select'):
                inputElement= (
                <select 
                    class="InputElement"
                    {...props.elementConfig} 
                    value={props.value}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}    
                    </select>
                );
                break;
            default :
                inputElement= <input 
                class="InputElement" 
                {...props.elementConfig} 
                value={props.value}/>
    }

    return(
                <div class="Input">
                    <label class="Label">{props.label}</label>
                    {inputElement}
                </div>

        );

};

export default Input;
