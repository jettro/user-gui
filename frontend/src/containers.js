import {connect} from "react-redux";
import {addUser, markCurrentUser, removeUser, showCreateUserForm} from "./actions";
import UsersList from "./users/UsersList";

export const Users = connect (
    state =>
        ({
            users: [...state.users],
            currentUser: state.currentUser,
            showCreate: state.showCreate
        }),
    dispatch =>
        ({
            onRemove(username) {
                dispatch(removeUser(username))
            },
            onCreate(username,fullName) {
                dispatch(addUser(username, fullName));
                dispatch(showCreateUserForm("false"));
                dispatch(markCurrentUser(username));
            },
            onMarkCurrent(username) {
                dispatch(markCurrentUser(username))
            },
            onShowCreate() {
                dispatch(showCreateUserForm("true"));
            },
            onCancelCreate() {
                dispatch(showCreateUserForm("false"));
            }
        })
)(UsersList);

