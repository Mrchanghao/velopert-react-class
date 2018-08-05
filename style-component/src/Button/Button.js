import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const Button = ({children, ...rest}) => {
    return (
        <div {...rest} className={cx('button')}>
            {children}
        </div>
    )
}

export default Button