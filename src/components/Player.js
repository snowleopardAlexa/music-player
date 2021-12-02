import React from 'react';
import Details from './Details';
import Control from './Control';

function Player() {
    return (
        <div className="player">
            <h4>Playing Now</h4>
            <Details />
            <Control />
              <audio 
                className="player__audio"
                src=""
                controls
              >
              </audio>
              <p>
                  Next Up: 
                  <span>
                      Next Song
                  </span>
              </p>
        </div>
    );
}

export default Player
