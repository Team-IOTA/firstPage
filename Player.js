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

    function handleFileChange(event) {
        const filePath = event.target.files[0];
        if (filePath){
            const file = URL.createObjectURL(filePath);
            videoPlayer.current.src=file;
        }
    }

    return (
        <div>
            <br/>
            <br/>
            
            <label htmlFor="video-upload" className="upload-btn">Upload video</label>
            <input id='video-upload' type="file" accept='video/*' onChange={handleFileChange} style={{ display: 'none' }}/>
            <br/>
            <br/>
            <br/>
            <video className="player"
                ref={videoPlayer}
                width="1000px"
                height="600px"
                controls
            />
            
            {/* <div>Timestamps : {formatTime(currentTime)}</div> */}
            {/* <label htmlFor="video-upload" className="upload-btn">Upload video</label>
            <input id='video-upload' type="file" accept='video/*' onChange={handleFileChange} style={{ display: 'none' }}/> */}
            {/* <button className="button">Upload Video</button> */}
            {/* <source src="" type="video/mp4" />
             </video> */}
        </div>
    )
}

export default Player;



