import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 0,
            color: null
        };
        console.log('constructor:', constructor)
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if(nextProps.color !== prevState.color) {
    //         return { color: nextProps.color}
    //     }
    //     return null;
    // }

    componentDidMount() {
        console.log('did mount, 비동기 작업시 사용')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate:', nextProps, nextState);
        // 마지막  자리가 4면 렌더링 하지 않는다? 
        return nextState.number % 10 !== 4;
    }

    componentWillMount() {
        console.log('componentWillmount')
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('getSnapShopBeforeUpdate');
    //     if(prevProps.color !== this.props.color) {
    //         return this.myRef.style.color;
    //     }
    //     return null;
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentdidupdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트 되기전 색상', snapshot)
        }
    }

    render() {
        console.log('render')
        const style = {
            color: this.props.color
        }
        return (
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>
                {this.state.number}
                </h1>
                <p>color: {this.props.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycle;