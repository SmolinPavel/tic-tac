import React from 'react';

const Moves = ({ history, onClick, stepNumber, toggle }) => {
    const historyToShow = toggle ? history.slice().reverse() : history;
    
    return (
        <ol>
            {
                historyToShow.map((step, move) => {
                    const historyLength = historyToShow.length - 1;
                    const moveNumber = toggle ? historyLength - move : move;
                    const className = stepNumber === moveNumber ? 'bold' : 'usual';
                    let desc;
                    if (toggle) {
                        desc = historyLength === move ? 'Go to game start' : `Go to move # ${historyLength - move}`;
                    } else {
                        desc = move === 0 ? 'Go to game start' : `Go to move # ${move}`;
                    }

                    return (
                        <li key={move}>
                            <button
                                className={className}
                                onClick={() => onClick(moveNumber)}
                            >
                                {desc}
                            </button>
                        </li>
                    );
                })
            }
        </ol>
    );
};

export default Moves;