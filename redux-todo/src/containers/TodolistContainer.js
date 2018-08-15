import React, { Component } from 'react';

import TodoList from '../components/TodoList/TodoList'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as todosActions from '../modules/todos';

class TodoListContainer extends Component {
    
    handleToggle = (id) => {
        const {todosActions} = this.props;
        todosActions.toggle(id);
    }

    handleRemove = (id) => {
        const {todosActions} = this.props;
        todosActions.remove(id);
    }



    render() {

        const {todos} = this.props;
        const {handleRemove, handleToggle} = this;

        return (
            <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        todosActions: bindActionCreators(todosActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
