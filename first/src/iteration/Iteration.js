import React, { Component } from 'react';

class Iteration extends Component {

    state ={
        sns: ['facebook', 'google', 'kakao', 'github'], 
        ss: ''
    }

    handleChange = (e) => {
        this.setState({
            ss: e.target.value
        })
    }

    handleInsert = (e) => {
        this.setState({
            // sns: this.state.sns.concat(this.state.ss),
            sns: [...this.state.sns, this.state.ss],
            ss: ''
        })
    }
    handleRemove = (index) => {
        const { sns } = this.state;
        // console.log(index, sns)
        // // const newsns = sns.filter((name, i) => i !== index )
        this.setState({
            // sns: [
            //     ...sns.slice(0, index),
            //     ...sns.slice(index + 1, sns.length) 
            // ]
            sns: sns.filter((s, i) => i !== index )
        })
    }

    render() {
        const list = this.state.sns.map((s, index) => (
            <li 
        onDoubleClick={() => this.handleRemove(index)} 
        key={index}>{s}</li>
        ) 
    )
        return (
            <div>
                <input
                value={this.state.ss}
                onChange={this.handleChange}
                />
                <button onClick={this.handleInsert}>ADD</button>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default Iteration;