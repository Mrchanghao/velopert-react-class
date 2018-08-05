import React, { Component } from 'react';
import './Validate.css';


class Validate extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input
                ref={(ref) => this.input = ref}
                value={this.state.password}
                name='password'
                type='password'
                onChange={this.handleChange}
                className={this.state.clicked ? 
                    (this.state.validated ? 'success' : 'false') : ''}
                />
                <button onClick={this.handleClick}>검증</button>
            </div>
        );
    }
}

export default Validate;