import React, { Component } from 'react';
import styles from './App.scss';
import classNames from 'classnames/bind';
import Button from './Button';
import StyledButton from './Button/StyledButton';


console.log(styles.blue)

const cx = classNames.bind(styles);
console.log(cx('blue'))

class App extends Component {
  render() {
    const isBlue = true;
    return (
      <div className={cx('box', {
        blue: isBlue
      })}>
        {/* <div className={cx('box-inside')}></div> */}
        <Button>버튼 1</Button>
        <StyledButton>버튼2</StyledButton>
      </div>
    );
  }
}

export default App;
