import C from "./constants";

export const addUser = (username, fullName) =>
    ({
        type: C.ADD_USER,
        username,
        fullName
    });

export const removeUser = (username) =>
    ({
        type: C.REMOVE_USER,
        username
    });

export const markCurrentUser = (username) =>
    ({
        type: C.MARK_CURRENT_USER,
        username
    });

export const showCreateUserForm = (show) =>
    ({
        type: C.SHOW_CREATE_USER,
        show
    });