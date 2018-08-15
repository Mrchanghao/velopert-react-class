import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInput = ({value, onInsert, onChange}) => {
    return (
        <form className={cx('todo-input')} onSubmit={(e) => {
            onInsert();
            e.preventDefault();
            }}>
            <input onChange={onChange} value={value} />
            <button className={cx('add-button')}>
                ADD
            </button>
        </form>
    )
};

export default TodoInput;
