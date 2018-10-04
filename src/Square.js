import React from 'react';

const Square = ({value, onClick, colored}) => {
    const className = colored ? 'square colored' : 'square';
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;