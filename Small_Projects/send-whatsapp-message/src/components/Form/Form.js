import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import axios from '../Axios/axios-forms';
import './Form.css';

class Form extends Component {

    state = {
            name: '',
            address: '',
            course: 'C',
            city: '',
            contact: '',
            email: ''
    }

    inputChangedHandler = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        const form = {  
            name: this.state.name,
            address: this.state.address,
            course: this.state.course,
            city: this.state.city,
            contact: this.state.contact,
            email: this.state.email         
        }
        axios.post('/forms.json',form)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    resetHandler = () => {
        document.getElementById("inquiryForm").reset();
    }

    sendMessageHandler = (event) => {

    }
    render() {
        return (
            <div className="Form">

                <form id="inquiryForm" onSubmit={this.submitHandler}>
                    <label className="Label">Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.inputChangedHandler} className="Input" placeholder="Enter your name" /><br />
                    <label className="Label">Address</label>
                        <textarea name="address" value={this.state.address} onChange={this.inputChangedHandler} className="Textarea" placeholder="Enter your address"></textarea><br />
                    <label className="Label">Course</label>
                        <select name="course" value={this.state.course} onChange={this.inputChangedHandler}>
                            <option>---Select One Course---</option>
                            <option value="C">C</option>
                            <option value="C++">C++</option>
                            <option value="Advance Java">Advance Java</option>
                            <option value="ReactJS">ReactJS</option>
                            <option value="AngularJS">AngularJS</option>
                        </select><br />
                    <label className="Label">City</label>
                        <input type="text" name="city" value={this.state.city} className="Input" onChange={this.inputChangedHandler} placeholder="Enter your city" /><br />
                    <label className="Label">Contact Number</label>
                        <input type="text" name="contact" value={this.state.contact} className="Input" onChange={this.inputChangedHandler} placeholder="Enter your contact number" /><br />
                    <label className="Label">Email ID</label>
                        <input type="email" name="email" value={this.state.email} className="Input" onChange={this.inputChangedHandler} placeholder="Enter your Email-Id" /><br />

                    <Button>Submit</Button>
                    <Button clicked={this.resetHandler}>Reset</Button>
                    <Button clicked={(event) => this.sendMessageHandler(event)}>Whatsapp</Button>
                </form>
            </div>
        );
    }
}


export default Form;