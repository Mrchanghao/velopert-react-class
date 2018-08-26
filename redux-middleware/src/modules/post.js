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

// 다음 으로 thunk를 만들어 요청 상태에 따라 액션을 디스패치 해야 한다 
// 비동기 요처을 할 때 각 단계에 맞게 액션 크레이터를 디스패치 하는 미들웨어
export const getPost = (postId) => dispatch => {
    // 요청 시작을 알린다.
    dispatch(getPostPending());
    // 그 후 요청을 시작 --> 여기에서 만든 프로미스를 return해야 나중에 컴포넌트에서 호출 할수 있으므로
    // 호출 할 때 getPost().then(...) 할 수 있다
    return getPostAPI(postId).then(res => {
        // 요청이 성공하면 서버 응답 내용을 payload로 설정 해서
        // GET_POST_SUCCESS 액션을 디스패치
        dispatch(getPostSuccess(res))
        // 나중에 getPostAPI.then 할 때 then에서 전달 되는 함수에서 
        // res에 접근 할 수 있게 한다
        return res;
    })
    .catch(error => {
        dispatch(getPostFail(error));
        throw(error);
    })

}

// thunk action creator
// export const getPost = (postId) => dispatch => {
//     // 요청이 시작됬음을 알린다
//     dispatch(getPostPending());
//     // 요청을 시작,
//     return getPostAPI(postId).then((res) => {
//             // 요청이 성공하면 응답 내용을 payload로 설정
//             // GET_POST_SUCCESS 액션을 디스패치
//             dispatch(getPostSuccess(res))
//             return res;
//         }).catch(err => {
//             dispatch(getPostFail(err));
//             throw(err);
//         })
// }

const initialState = {
    pending: false,
    error: false,
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
            error: false
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
            error: true
        }
    }
}, initialState);


