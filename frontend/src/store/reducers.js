import C from '../constants';

export const user = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_USER:
            return {
                username: action.username,
                fullName: action.fullName
            };
        default:
            return state;
    }
};

export const users = (state = {isFetching: false, didInvalidate: false, items:[]}, action) => {
    switch (action.type) {
        case C.ADD_USER:
            return {isFetching: false, didInvalidate: false, items:[
                ...state.items,
                user({}, action)
            ]};
        case C.REMOVE_USER:
            return {isFetching: false, didInvalidate: false, items: state.items.filter(
                    u => u.username !== action.username
                )};
        case C.INVALIDATE_USERS:
            return {isFetching: false, didInvalidate: true, items: state.items};
        case C.REQUEST_USERS:
            return {isFetching: true, didInvalidate: false, items: []};
        case C.RECEIVE_USERS:
            return {isFetching: false, didInvalidate: false, items: action.users};
        default:
            return state;
    }
};

export const currentUser = (state = "", action) => {
    switch (action.type) {
        case C.MARK_CURRENT_USER:
            return action.username;
        default:
            return state;
    }
};

export const showCreate = (state = "", action) => {
    switch (action.type) {
        case C.SHOW_CREATE_USER:
            return action.show;
        default:
            return state;
    }
};

const initialModalState = {showModal: "false", username: ""};
export const showRemoveUserModal = (state = initialModalState, action) => {
    switch (action.type) {
        case C.SHOW_REMOVE_USER_MODAL:
            return {showModal:"true", username: action.username};
        case C.HIDE_REMOVE_USER_MODAL:
            return {showModal:"false", username: ""};
        default:
            return state;
    }
};