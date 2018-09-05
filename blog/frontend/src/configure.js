import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducers(modules);
const middleware = [penderMiddleware()];

const isDev = process.env.NODE_ENV === 'development';
const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const configure = (preloadedState) => createStore(reducers, 
    preloadedState, composeEnhancers(applyMiddleware(...middleware)))


export default configure;