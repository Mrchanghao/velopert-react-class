import CounterList from '../components/CounterList';
import * as actions from '../actions/index';
import {connect} from 'react-redux'
import { getRandomColor } from '../lib/getRandomColor';




const mapStateToprops = (state) => {
    return {
        counters: state.counters
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (index) => dispatch(actions.increment(index)),
        onDecrement: (index) => dispatch(actions.decrement(index)),
        onSetColor: (index) => {
            const color = getRandomColor();
            dispatch(actions.setColor(index, color))
        }
    }
};

const CounterListContainer = connect(mapStateToprops, mapDispatchToProps)(CounterList)

export default CounterListContainer;