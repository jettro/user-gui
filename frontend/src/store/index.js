import stateData from '../data/initialState';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {currentUser, showCreate, users} from "./reducers";


const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

const saver = store => next => action => {
    let result = next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result;
};

const storeFactory = (initialState = stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({users, currentUser, showCreate}),
        (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : stateData
    );

export default storeFactory;

