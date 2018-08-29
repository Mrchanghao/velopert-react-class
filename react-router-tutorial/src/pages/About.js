import React from 'react'
import queryString from 'query-string'

const About = ({location,match}) => {
    const query = queryString.parse(location.search)
    console.log(location)
    const {color} = query;
    console.log(query)
    return (
        <div>
            <h2 style={{color}}>소개</h2>
            <p>
                안녕하세요, 리액트를 배우고 있는 학생입니다요
                <br />
                제 이름은 {match.params.name}
            </p>
        </div>
    )
};


export default About;