import React, { Component } from 'react'

export default class ScrollBox extends Component {

    scrollBottom = () => {
        console.log(this.box)
        const {scrollHeight, clientHeight} = this.box;

        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        }
        const inline = {
            width: '100%',
            height: '600px',
            background: 'linear-gradient(white, black)'
        }
    return (
        <div
        style={style}
        ref={ref => this.box = ref}
        >
            <div style={inline} />
        </div>
        )
    }
}
