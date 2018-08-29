import React from 'react'
import {NavLink, withRouter} from 'react-router-dom';


const Menu = () => {
    const activeStyle ={
        color: 'green',
        fontSize: '2rem'
    }
    return (
        <div>
            <ul>
                <li><NavLink exact activeStyle={activeStyle} to='/'>Home</NavLink></li>
                <li><NavLink exact activeStyle={activeStyle} to='/about'>About</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to='/about/react'>React 소개</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to='/posts'>posts들</NavLink></li>
            </ul>
        </div>
    )
}

// NavLink에서 모두 경로가 겹치기 때문에 모든 링크에 스타일이 적용 된다. exact 프랍을 설정해주면 
// 이걸 방지 할 수 있다

export default withRouter(Menu);