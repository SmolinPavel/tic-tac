import React from 'react';

const Moves = ({ history, onClick, stepNumber }) => (
    <ol>
        {
            history.map((step, move) => {
                const desc = move ?
                    'Go to move #' + move :
                    'Go to game start';
                const className = stepNumber === move ? 'bold' : 'usual';
                return (
                    <li key={move}>
                        <button
                            className={className}
                            onClick={() => onClick(move)}
                        >
                            {desc}
                        </button>
                    </li>
                );
            })
        }
    </ol>
);

export default Moves;