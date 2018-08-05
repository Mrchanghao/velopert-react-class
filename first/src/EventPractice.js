import React, { Component } from 'react';

class EventPractice extends Component {
  constructor(props) {
    super(props);
		this.state = { 
			message: '',
			username: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleChange(e) {
		// console.log(e.target.name)
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleClick() {
		alert(`${this.state.username}이 이런 ${this.state.message}을 합니다`);
		this.setState({
			message: '',
			username: ''
		})
	}

	handleKeyPress = (e) => {
		// conso/le.log(e.key)
		if(e.key === 'Enter') {
			this.handleClick()
		}
	}

  render() {
    return (
      <div>
				<h1>EventPractice</h1>
				<input
				type='text'
				name='username'
				placeholder='username'
				value={this.state.username}
				onChange={this.handleChange}
				/>
				<input
				type='text'
				name='message'
				placeholder='일단 입력'
				value={this.state.message}
				onChange={this.handleChange}
				onKeyPress={this.handleKeyPress}
				/>
				<br />
				<button type='button' onClick={this.handleClick}>입력</button>
			</div>
    );
  }
}

export default EventPractice;