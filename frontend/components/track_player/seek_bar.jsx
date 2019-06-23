import React from 'react';

const SeekBar = ({revealBall, hideBall, changePercentage, progressBar, ball, percentage, handlePercentage }) => {
    return (
        <div className="progress-bar-container" onMouseEnter={revealBall} onMouseLeave={hideBall}>
            <div className="progress-bar-outer" onClick={changePercentage}>
                <input ref={progressBar} type="range" min="0" max="100" className="progress-bar" onChange={handlePercentage()} />
                <button className={`ball ${ball ? "show" : ""}`} style={{ left: `${percentage}%` }} onDrag={handlePercentage()}></button>
            </div>
        </div>
    )
}

export default SeekBar;