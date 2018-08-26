import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post';

class App extends Component {


    loadData = async () => {
        const {postActions, number} = this.props;
        // postActions.getPost(number)
        // .then(res => {
        //     console.log(res);
        // })
        try {
            const res = await postActions.getPost(number);
            console.log(res);
        } catch (error) {
            
        }
    }

    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts/1')
        // .then(res => console.log(res));
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.number !== prevProps.number) {
            this.loadData();
        }
    }


    render() {
        const { counterActions, number, postActions, post, loading, error } = this.props;

        return (
            <div>
                <h1>{number}</h1>
                {loading ? <h2>Loading 중</h2> : (error ? <h2>error 발생</h2> : (
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
                <button onClick={counterActions.incrementAsync}>+</button>
                <button onClick={counterActions.decrementAsync}>-</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.counter,
        post: state.post.data,
        loading: state.post.pending,
        error: state.post.error
    }
};

const mapDispatchToProps = (dispatch) => {
    
    return {
        counterActions: bindActionCreators(counterActions, dispatch),
        postActions: bindActionCreators(postActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);







// export default connect(
//     (state) => ({
//         number: state.counter,
//         // post: state.post.data,
//         // loading: state.post.pending,
//         // error: state.post.err
//     }),
//     (dispatch) => ({
//         CounterActions: bindActionCreators(counterActions, dispatch),
//         // PostActions: bindActionCreators(postActions, dispatch)
//     })
// )(App);