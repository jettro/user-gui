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

export const users = (state = [], action) => {
    switch (action.type) {
        case C.ADD_USER:
            return [
                ...state,
                user({}, action)
            ];
        case C.REMOVE_USER:
            return state.filter(
                    u => u.username !== action.username
                );
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