import { handleActions, createAction } from 'redux-actions';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
// const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
// export const incrementIfOdd = createAction(INCREMENT_IF_ODD);


export const incrementAsync = () => dispatch => {
    // 1초 뒤에 디스패치
    setTimeout(() => {
        dispatch(increment())
    }, 2000);
};

export const decrementAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrement())
    }, 2000);
}

// export const incrementIfOdd = () => (dispatch, getState) => {
//     const {counter} = getState();

//     if(counter % 2 === 0) {
//         return;
//     }
//     dispatch(increment());
// }


export default handleActions({
    [INCREMENT]: (state, action) => state + 1,
    [DECREMENT]: (state, action) => state - 1
}, 1);


