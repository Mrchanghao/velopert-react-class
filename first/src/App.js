import React, { Component } from 'react'
// import EventPractice from './EventPractice';
// import Validate from './validate/Validate';
import ScrollBox from './scrollbox/ScrollBox'
import Iteration from './iteration/Iteration';
import LifeCycle from './lifeCycle/LifeCycle';

const randomColor = () => {
	return `#${Math.floor(Math.random()*16777215).toString(16)}`
}

export default class App extends Component {

	state = {
		color: '#000000'
	}

	handleClick = () => {
		this.setState({
			color: randomColor()
		})
	}

  render() {
  	return (
      <div>
				<ScrollBox ref={ref => this.scrollBox = ref} />
				<button onClick={() => this.scrollBox.scrollBottom()}>
				아래로
				</button>
				<Iteration />
				<button onClick={this.handleClick}>랜덤 색상</button>
				<LifeCycle color={this.state.color} />
      </div>
    )
  }
}
