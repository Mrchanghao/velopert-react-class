import {Map, List} from 'immutable';

import {handleActions, createAction} from 'redux-actions';

const INSERT = 'INSERT';
const TOGGLE = 'TOGGLE';
const REMOVE = 'REMOVE';


// action creator
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

// 초기 상태
const initialState = List([
    Map({id: 0, text: 'react study', done: false}),
    Map({id: 1, text: 'vue study', done: false}),
    Map({id: 2, text: 'javascript study', done: true})
]);

// reducer

export default handleActions({
    [INSERT]: (state, action) => {
        const {id, text, done} = action.payload;
        return state.push(Map({id, text, done}))
    },
    [TOGGLE]: (state, action) => {
        const {payload: index} = action;

        return state.updateIn([index, 'done'], done => !done);
    },
    [REMOVE]: (state, action) => {
        const {payload: index} = state.payload;

        return state.delete(index);
    }
}, initialState)