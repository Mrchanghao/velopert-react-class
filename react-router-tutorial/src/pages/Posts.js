import React from 'react'
import {Post} from 'pages';

import {Link, Route} from 'react-router-dom';

const Posts = ({match}) => {
    console.log(match)
    return (
        <div>
            <h3>Post 내용</h3>
        <ul>
            <li><Link to={`${match.url}/1`}>Post #1</Link></li>
            <li><Link to={`${match.url}/2`}>Post #2</Link></li>
            <li><Link to={`${match.url}/3`}>Post #3</Link></li>
            <li><Link to={`${match.url}/4`}>Post #4</Link></li>
        </ul>
        <Route path={match.url} render={() => <p>포스트를 선택하시오</p>} />
        <Route path={`${match.url}/:id`} component={Post} />
        </div>
    )
};

export default Posts;