import React, { useRef, useState } from "react";
import classNames from 'classnames';

const Video = ({themeLight, text, poster, videoSrc, autoPlay=false }) => {
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const vidRef = useRef(null);
    const cmptClasses = classNames({
        'cmpt-video': true,
        '--is-light': themeLight,
        '--is-dark': !themeLight,
        '--is-playing': isPlaying
    });

    function togglePlayback() {
        if (vidRef.current.paused) {
            vidRef.current.play();
            setIsPlaying(true);
        } else {
            vidRef.current.pause();
            setIsPlaying(false);
        }
    }

    return (
        <div className={cmptClasses}>
            <div className="cmpt-video-wrapper">
                <div className="cmpt-video-inner">
                    <button onClick={togglePlayback} className="cmpt-video-button">{isPlaying ? "PAUSE" : "PLAY"}</button>
                    <video
                        className="cmpt-video-player"
                        poster={poster}
                        ref={vidRef}
                        autoPlay={autoPlay}
                        controls={true}
                    >

                        {/* commented out because webpack cant process mp4 files */}
                        {/* <source src={videoSrc} type="video/mp4" /> */}
                        <source src={videoSrc} type="video/mp4" />
                            
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>
            </div>
            { text && 
                <div className="cmpt-video__text" dangerouslySetInnerHTML={{ __html: text }}></div>
            }
        </div>
    );
}

export default Video;