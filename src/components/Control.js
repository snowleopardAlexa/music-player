import { faBackward, faForward, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Control() {
    return (
        <div className="control">
           <button>
               <FontAwesomeIcon icon={faBackward} />
           </button>
           <button className="control__playbutton">
               <FontAwesomeIcon icon={faPause} />
           </button>
        </div>
    )
}

export default Control;
