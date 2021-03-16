import React, { Component } from 'react';
import DisplayList from '../DisplayList/DisplayList';
import './AddList.css';

class AddList extends Component {
    state = {
        input: "",
        List: []
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    }

    addListHandler = (event) => {

        const updatedList = [
            ...this.state.List
        ];
        updatedList.push(this.state.input);

        this.setState({ List: updatedList });

    };
    

    render() {

        return (
            <div class="Addlist">
                <input type="text" placeholder="Enter list here" onChange={this.handleChange} />&nbsp;
                <button onClick={(event) => this.addListHandler(event)}>Add</button>
                <DisplayList display={this.state.List} />

            </div>
        );
    }

}

export default AddList;