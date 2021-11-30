import React, { useState, useRef, useEffect } from 'react';
import Control from './Control';
import Details from './Details';

function Player(props) {
 
    const audioElement = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if(isPlaying) {
            audioElement.current.play()
        } else {
            audioElement.current.pause()
        }
    });

    const SkipSong = (forwards = true) => {
        
    }
    
    return (
        <div className="player">
            <h4>Playing Now</h4>
            <Details 
              song = {props.songs[props.currentSongIndex]}
            />
            <Control 
              isPlaying = {isPlaying}
              setIsPlaying = {setIsPlaying}
              skipSong = {SkipSong}
            />
              <audio 
                className="player__audio"
                src={props.songs[props.currentSongIndex].src}
                ref={audioElement}
                controls
              >
              </audio>
              <p>
                  Next Up: 
                  <span>
                      {props.songs[props.nextSongIndex].title} by { "" }
                      {props.songs[props.nextSongIndex].artist}
                  </span>
              </p>
        </div>
    );
}

export default Player
