import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post';
// import axios from 'axios';

class App extends Component {

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts/1')
    //     .then(res => console.log(res));
    // }


    loadData = () => {
        const {PostActions, number} = this.props;
        PostActions.getPost(number);
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        // 이전 넘버와 현재 넘버가 다르면 호출 
        if(prevProps.number !== this.props.number) {
            this.loadData();
        }
    }

    render() {
        const { CounterActions, number, post, loading, error } = this.props;
        console.log(this.props);
        console.log(postActions);
        // console.log(CounterActions)
        
        return (
            <div>
                <h1>{number}</h1>
                {loading ? <h1>로딩중....</h1> : (error ? <h2>오류 발생</h2> : <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>)}
                <button onClick={CounterActions.incrementAsync}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.post.pending,
        error: state.post.err
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);