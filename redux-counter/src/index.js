import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());



const app = <Provider store={store}><App /></Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
