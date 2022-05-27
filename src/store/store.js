import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/AuthReducer';

export const store = createStore(
    combineReducers({
        auth:AuthReducer
    }),
    {},
    applyMiddleware(thunk)
);