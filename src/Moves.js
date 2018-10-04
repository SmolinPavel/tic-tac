import React from 'react';

const Moves = ({ history }) => (
    <ol>
        {
            history.map((step, move) => {
                const desc = move ?
                    'Go to move #' + move :
                    'Go to game start';
                return (
                    <li key={move}>
                        <button onClick={() => this.jumpTo(move)}>{desc}</button>
                    </li>
                );
            })
        }
    </ol>
);

export default Moves;