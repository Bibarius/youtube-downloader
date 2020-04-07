import React from 'react';
import Response from './Response'
import './video.css';
import axios from 'axios'

class Video extends React.Component {
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

        if (this.state.url == '') {
            return
        }

        axios.post('http://localhost:5000/api', ({ url: this.state.url }))
            .then(res => {
                console.log(res.data);
                this.refs.resp.changeState(res.data)
            },
                error => console.log(error.response.status))
    }

    render() {
        return (
            <div className="video">
                <h3>Вставьте сюда ссылку</h3>
                <form onSubmit={this.mySubmitHandler}>
                    <input type="text" className="input" onChange={this.handleChange}></input>
                    <input type="submit" value="Скачать" className="download-button"></input>
                </form>
                <Response ref='resp' />
            </div>
        );
    }
}

export default Video;