import React from 'react'
import TodoItem from '../TodoItem/TodoItem';
// import styles from './TodoList.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

class TodoList extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        // console.log(this.props.todos)
        const {todos, onToggle, onRemove} = this.props;
        const TodoList = todos.map((todo) => (
            <TodoItem
            key={todo.get('id')}
            done={todo.get('done')}
            id={todo.get('id')}
            onToggle={() => onToggle(todo.get('id'))}
            onRemove={() => onRemove(todo.get('id'))}
            >{todo.get('text')}</TodoItem>
        ))
        return (
            <div>
                {TodoList}
            </div>
        );
    }
}

export default TodoList;
