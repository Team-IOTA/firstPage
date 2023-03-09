import React, { useState, useRef } from 'react';
import './Player.css';


const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoPlayer = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoPlayer.current.pause();
        } else {
            videoPlayer.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <video className="player"
                ref={videoPlayer}
                width="1000px"
                height="600px"
                controls
            >
            <source src="" type="video/mp4" />
            </video>
        </div>
    )
}

export default Player;
