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
        return (
            <div>
                {todos.map((todo, id) => <TodoItem 
                done={todo.done}
                onRemove={() => onRemove(todo.id)}
                onToggle={() => onToggle(todo.id)} 
                key={todo.id}>
                    {todo.text}
                </TodoItem>
            )}
            </div>
        );
    }
}

export default TodoList;
