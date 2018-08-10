import { Map } from 'immutable';

import {handleActions, createAction} from 'redux-actions';

// initialState

const initialState = Map({
    value: ''
})

// types
const SET_INPUT = 'input/SET_INPUT';

//action creator

export const setInput = createAction(SET_INPUT);

// handle reducer

export default handleActions({
    [SET_INPUT]: (state, action) => {
        return state.set('value', action.payload)
    } 
}, initialState)