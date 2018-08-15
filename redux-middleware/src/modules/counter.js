import { handleActions, createAction } from 'redux-actions';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export const incrementAsync = () => dispatch => {
    // 1초 뒤에 디스패치
    setTimeout(() => {
        dispatch(increment())
    }, 2000);
};

export const decrementAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrement())
    }, 1000);
}


export default handleActions({
    [INCREMENT]: (state, action) => state + 1,
    [DECREMENT]: (state, action) => state - 1
}, 1);


