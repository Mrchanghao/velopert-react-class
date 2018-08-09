import React from 'react'
import './Buttons.css';

const Buttons = ({onCreate, onRemove}) => {
    return (
        <div className='Buttons'>
            <button className='btn add' onClick={onCreate}>생성</button>
            <button className='btn remove' onClick={onRemove}>제거</button>
        </div>
    )
};


export default Buttons