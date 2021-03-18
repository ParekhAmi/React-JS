import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import './Form.css';

class Form extends Component {

    submitHandler = (event) => {

    }

    resetHandler = (event) => {
        
    }

    sendMessageHandler = (event) => {

    }
    render() {
        return (
        <div className="Form">
        <form>
            <label className="Label">Name</label><input type="text" className="Input" placeholder="Enter your name"/><br/>
            <label className="Label">Address</label><textarea className="Textarea" placeholder="Enter your address"></textarea><br/>
            <label className="Label">Courses</label>
            <select>
                <option>C</option>
                <option>C++</option>
                <option>Advance Java</option>
                <option>ReactJS</option>
                <option>AngularJS</option>  
            </select><br/>
            <label className="Label">City</label>
            <input type="text" className="Input" placeholder="Enter your city"/><br/>
            <label className="Label">Contact Number</label>
            <input type="text" className="Input" placeholder="Enter your contact number"/><br/>
            <label className="Label">Email ID</label>
            <input type="email" className="Input" placeholder="Enter your Email-Id"/><br/>
            <Button clicked={(event) => this.submitHandler(event)}>Submit</Button>
            <Button clicked={(event) => this.resetHandler(event)}>Reset</Button>
            <Button clicked={(event) => this.sendMessageHandler(event)}>Whatsapp</Button>
        </form> 
        </div>
        );
    }    
}


export default Form;