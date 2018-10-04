import React, { Component } from 'react';

import Square from './Square';

class Board extends Component {
    configArray = [0,1,2];
    renderSquare(i) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                colored={this.props.winLine && ~this.props.winLine.indexOf(i)}
            />
        );
    }

    render() {
        const { configArray } = this;
        return (
            <div>
                {
                    configArray.map((row, rowId) => (
                        <div
                            key={rowId}
                            className="board-row"
                        >
                            {
                                configArray.map((col, colId) => (
                                    this.renderSquare(colId + rowId*configArray.length)
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Board;