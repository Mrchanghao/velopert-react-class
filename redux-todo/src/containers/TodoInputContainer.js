import React, { Component } from 'react';
import TodoInput from '../components/TodoInput/TodoInput'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

// 액션 생성함수 임포트
import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends Component {

    id = 0;
    getId = () => {
        return ++this.id;
    }

    handleChange= (e) => {
        const {value} = e.target;
        const {inputActions} = this.props;
        inputActions.setInput(value);
    };

    handleInsert = () => {
        const {inputActions, todosActions, value} = this.props;
        const todo = {
            id: this.getId(),
            text: value,
            done: false
        };
        todosActions.insert(todo);
        inputActions.setInput('');
    }

    render() {
        const {value } = this.props;
        const { handleChange, handleInsert } = this;
        return (
            <TodoInput onChange={handleChange} onInsert={handleInsert} value={value} />
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
        inputActions: bindActionCreators(inputActions, dispatch),
        todosActions: bindActionCreators(todosActions, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoInputContainer);