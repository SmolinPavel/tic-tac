import React, { Component } from 'react';

import { calculateWinner } from './helpers';
import Board from './Board';
import Moves from './Moves';
import SortToggle from './SortToggle';

class Game extends Component {
    state = {
        history: [{
            squares: Array(9).fill(null)
        }],
        stepNumber: 0,
        xIsNext: true,
        toggle: false,
    };

    handleClick(i) {
        const { stepNumber, xIsNext } = this.state;
        const history = this.state.history.slice(0, stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !xIsNext,
        });
    }

    handleSortToggle = () => {
        this.setState({ toggle: !this.state.toggle });
    }

    jumpTo = (step) => {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const { history, stepNumber, xIsNext, toggle } = this.state;
        const current = history[stepNumber];
        const winner = calculateWinner(current.squares);

        let status;
        let winLine;
        if (winner) {
            status = 'Winner: ' + winner.sign;
            winLine = winner.winLine;
        } else {
            status = 'Next player: ' + (xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        winLine={winLine}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <SortToggle
                        value={toggle}
                        onChange={this.handleSortToggle}
                    />
                    <Moves
                        history={history}
                        onClick={this.jumpTo}
                        stepNumber={stepNumber}
                        toggle={toggle}
                    />
                </div>
            </div>
        );
    }
}

export default Game;