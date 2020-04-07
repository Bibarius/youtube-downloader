import React from 'react';
import axios from 'axios'

class Form extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        url: ''
    }

    handleChange = event => {
        this.setState({ url: event.target.value });
    }

    mySubmitHandler = event => {
        event.preventDefault();

        axios.post('http://localhost:5000/api', ({ url: this.state.url }))
            .then(res => {
                console.log(res.data);
            })
    }

    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <input type="text" className="input" onChange={this.handleChange}></input>
                <input type="submit" className="download-button"></input>
            </form>
        );
    }




}

export default Form;