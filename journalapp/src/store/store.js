import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer';
import { createStore, applyMiddleware , combineReducers, compose } from 'redux'
import { uiReducer } from '../reducers/uiReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose ;//https://github.com/zalmoxisus/redux-devtools-extension#usage

// -- --- -- rutas de reducers
const reducers = combineReducers({
    auth : authReducer,
    ui : uiReducer
})

//createStore Recibe solamente 1 REDUCER, enviar referencia de un combineReducer
// store se debe proveer (PROVIDER) a mi punto mas alto

//AGREGAMOS MIDDLEWARE CON THUNK PARA TRABAJAR PETICIONES ASINCRONAS---------------
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
