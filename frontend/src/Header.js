import React from 'react';
import Video from './Video';


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>Скачать видео с ютуба</h1>
                <hr></hr>
                <Video />
            </div>
        );
    }
}

export default Header;