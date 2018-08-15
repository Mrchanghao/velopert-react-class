import { handleActions, createAction } from "redux-actions";

import axios from 'axios';
// import thunk from 'redux-thunk';



const getPostAPI = (postId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAIL = 'GET_POST_FAIL';

// acion creator

const getPostPending = createAction(GET_POST_PENDING);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFail = createAction(GET_POST_FAIL);

// thunk action creator
export const getPost = (postId) => dispatch => {
    // 요청이 시작됬음을 알린다
    dispatch(getPostPending());
    // 요청을 시작,
    return getPostAPI(postId).then((res) => {
            // 요청이 성공하면 응답 내용을 payload로 설정
            // GET_POST_SUCCESS 액션을 디스패치
            dispatch(getPostSuccess(res))
            return res;
        }).catch(err => {
            dispatch(getPostFail(err));
            throw(err);
        })
}

const initialState = {
    pending: false,
    err: false,
    data: {
        title: '',
        body: ''
    }
}


// reducer 

export default handleActions({
    [GET_POST_PENDING]: (state, action) => {
        return {
            ...state,
            pending: true,
            err: false
        }
    },
    [GET_POST_SUCCESS]: (state, action) => {
        const {title, body} = action.payload.data
        return {
            ...state,
            pending: false,
            data: {
                title,
                body
            }

        }
    },
    [GET_POST_FAIL]: (state, action) => {
        return {
            ...state,
            pending: false,
            err: true
        }
    }
}, initialState);


