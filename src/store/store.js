import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/AuthReducer';
import { ToastReducer } from './reducers/ToastReducer';

export const store = createStore(
    combineReducers({
        auth:AuthReducer,
        toast:ToastReducer
    }),
    {},
    applyMiddleware(thunk)
);