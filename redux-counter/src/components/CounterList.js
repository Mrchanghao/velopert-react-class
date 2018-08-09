import React from 'react'
import Counter from './Counter';
import './CounterList.css';


const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {

    const counterList = counters.map((counter, i) => (
        <Counter key={i} index={i} {...counter} 
        onDecrement={onDecrement}
        onSetColor={onSetColor}
        onIncrement={onIncrement}   />
    ))
    console.log([...counters])
    return (
        <div className='CounterList'>
            {counterList}
        </div>
    )
}



CounterList.defaultProps = {
    counters: []
};

export default CounterList;