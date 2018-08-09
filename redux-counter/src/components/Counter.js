import React from 'react'
import './Counter.css';


const Counter = ({index, onIncrement, number, color, onDecrement, onSetColor}) => {
    return (
        <div
        onContextMenu={(e) => {
            e.preventDefault();
            onDecrement(index);
        }}
        onDoubleClick={() => onSetColor(index)}
        style={{
            background: color
        }}
        onClick={()=> onIncrement(index)}
        className='Counter'>
            {number}
        </div>
    )
};


Counter.defaultProps = {
    index: 0,
    number: 0,
    color: 'black'
}


export default Counter;