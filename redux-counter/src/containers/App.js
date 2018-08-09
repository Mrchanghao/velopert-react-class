import React, { Component } from 'react';
// import Counter from '../components/Counter';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import CounterContainer from './CounterContainer';
import CounterListContainer from './CounterListContainer';
import Buttons from '../components/Buttons';
import { getRandomColor } from '../lib/getRandomColor';


class App extends Component {
    
    render() {
        const {onCreate, onRemove} = this.props;
        return (
            <div className='App'>
                <Buttons onCreate={onCreate} onRemove={onRemove} />
                <CounterListContainer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreate: () => dispatch(actions.create(getRandomColor())),
        onRemove: () => dispatch(actions.remove())
    }
}

export default connect(null, mapDispatchToProps)(App);