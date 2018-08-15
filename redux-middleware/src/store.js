import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
// import loggerMiddleware from './lib/loggerMiddleware';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk'

const logger = createLogger();

const store = createStore(modules, applyMiddleware(thunk, logger));

export default store;