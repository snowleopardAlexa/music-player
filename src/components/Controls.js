import React from 'react';
import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Controls(props) {
    return (
        <div className="control">
           <button className="control__skipBtn" onClick={() => props.skipSong(false)}>
               <FontAwesomeIcon icon={faBackward} />
           </button>
           <button className="control__playButton" onClick={() => props.setIsPlaying(!props.isPlaying)}>
               <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
           </button>
           <button className="control__skipBtn" onClick={() => props.skipSong()}>
               <FontAwesomeIcon icon={faForward} />
           </button>
        </div>
    )
}

export default Controls;
