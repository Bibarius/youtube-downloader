import React from 'react';

class Response extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "invisible",
            urls: {}
        }
    }

    renderLinks() {
        let links = [];
        for (var key in this.state.urls) {
            links.push(
                <a href={this.state.urls[key]}>{key}</a>
            )
        }
        return links
    }

    changeState(urls) {
        this.setState({ class: "visible" })
        this.setState({ urls: urls })
    }

    createLinks() {

    }

    render() {
        return (
            <div className={this.state.class}>
                <h3>Выберите разрешение для скачивания</h3>
                {this.renderLinks()}
            </div>
        );
    }
}

export default Response;