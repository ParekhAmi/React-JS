import React from 'react';
import './Input.css';

const Input = (props) => {

    let inputElement = null;
    const inputClasses = ['InputElement'];

    if(props.invalid && props.shouldValidate && props.touched)
    {
        inputClasses.push('Invalid');
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                class={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea
                class="InputElement"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('select'):
            inputElement = (
                <select
                    class="InputElement"
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                class="InputElement"
                {...props.elementConfig}
                value={props.value} />
    }

    return (
        <div class="Input">
            <label class="Label">{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;
