

import {createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';

const reducers = combineReducers({
    auth : authReducer
})

//createStore Recibe solamente 1 REDUCER, enviar referencia de un combineReducer
// store se debe proveer (PROVIDER) a mi punto mas alto
export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //https://github.com/zalmoxisus/redux-devtools-extension#usage
);
