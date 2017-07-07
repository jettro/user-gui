import C from "./constants";
import fetch from 'isomorphic-fetch'

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

export const invalidateUsers = () =>
    ({
        type: C.INVALIDATE_USERS
    });

export const receiveUsers = (json) =>
    ({
        type: C.RECEIVE_USERS,
        users: json,
        receivedAt: Date.now()
    });

export const requestUsers = () =>
    ({
        type: C.REQUEST_USERS
    });

export function storeNewUser(username, fullName) {
    return function(dispatch) {
        return fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"username": username, "fullName": fullName})
        })
            .then(response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(addUser(username, fullName)));
    }
}

export function fetchUsers() {
    return function(dispatch) {
        dispatch(requestUsers());
        return fetch(`http://localhost:8080/users`)
            .then(response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveUsers(json)));
    }
}