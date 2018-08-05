import React, {Component} from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 성능 최적화 이유로 class 를 사용해야 함

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.done !== nextProps.done;
    }

    render() {
        const {done, onToggle, onRemove, children} = this.props;
        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type='checkbox' checked={done} readOnly />
                <span className={cx('text', {done})}>{children}</span>
                <span className={cx('delete')} 
                    onClick={(e) => {
                    onRemove();
                    e.stopPropagation();
                }}>
                    DELETE
                </span>
            </div>
        );
    }
}

export default TodoItem;