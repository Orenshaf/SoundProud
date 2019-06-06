import React from 'react';
import Filler from './filler';

const ProgressBar = ({percentage}) => {
    return (
        <div className="progress-bar">
            <Filler percentage={percentage} />
        </div>
    )
}

export default ProgressBar;