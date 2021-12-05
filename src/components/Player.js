import React, { useState, useRef, useEffect } from 'react';
import Controls from './Controls';
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

    const skipSong = (forwards = false) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.setCurrentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        }  else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    };
    
    return (
        <div className="player">
            <h4>Playing Now</h4>
            <Details 
              song = {props.songs[props.currentSongIndex]}
            />
            <Controls 
              isPlaying = {isPlaying}
              setIsPlaying = {setIsPlaying}
              skipSong = {skipSong}
            />
              <audio 
                className="player__audio"
                src={props.songs[props.currentSongIndex].src}
                ref={audioElement}
                controls
              >
              </audio>
              <p>
                  Next Up: {""}
                  <span>
                      {props.songs[props.nextSongIndex].title} by { "" }
                      {props.songs[props.nextSongIndex].artist}
                  </span>
              </p>
        </div>
    );
}

export default Player;
