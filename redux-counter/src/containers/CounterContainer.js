// import React, { Component } from 'react';

import Counter from '../components/Counter';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

export const getRandomColor = () => {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb',
        '#1c7cb6',
        '#1098ad',
        '#0ca678',
        '#37b24b',
        '#74b816',
        '#f59f00',
        '#f76707'
    ]
    const random = Math.floor(Math.random() * 13);
    return colors[random];
}


const mapStateToProp = (state) => {
    console.log(state.color.color)
    return {
        color: state.color.color,
        number: state.number.number
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(actions.increment()),
        onDecrement: () => dispatch(actions.decrement()),
        onSetColor: () => {
            const color = getRandomColor();
            dispatch(actions.setColor(color))
        }
    }
};


const CounterContainer = connect(mapStateToProp, mapDispatchToProps)(Counter);

// export default CounterContainer;