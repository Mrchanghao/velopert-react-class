import React, { Component } from 'react';
import TodoInput from '../components/TodoInput/TodoInput'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

// 액션 생성함수 임포트
import * as inputAction from '../modules/input';
import * as todosAction from '../modules/todos';

class TodoInputContainer extends Component {

    render() {
        return (
            <TodoInput />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.input.get('value')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputAction: bindActionCreators(inputAction, dispatch),
        todosAction: bindActionCreators(todosAction, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoInputContainer);