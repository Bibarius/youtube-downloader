import React from 'react';
import './video.css';

class Video extends React.Component {
    render() {
        return (
            <div className="video">
                <h3>Вставьте сюда ссылку</h3>
                <form>
                    <input type="text" class="input"></input>
                    <input type="submit" class="download-button"></input>
                </form>

            </div>
        );
    }
}

export default Video;