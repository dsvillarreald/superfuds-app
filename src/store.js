import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
debugger
const store = createStore(
    reducer, 
    compose( applyMiddleware(thunk), 
        // (typeof window === 'object' &&
        // typeof window._REDUX_DEVTOOLS_EXTENSION_ !== 'undefined') ? window._REDUX_DEVTOOLS_EXTENSION_() :
        // (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ) ?
        // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : f => f
        typeof window === 'object' &&
            typeof window._REDUX_DEVTOOLS_EXTENSION_ !== 'undefined' ? 
                window._REDUX_DEVTOOLS_EXTENSION_() : f => f
    )
);

export default store;