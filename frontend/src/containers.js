import {connect} from "react-redux";
import {addUser, fetchUsers, markCurrentUser, removeUser, showCreateUserForm, storeNewUser} from "./actions";
import UsersList from "./users/UsersList";

export const Users = connect (
    state =>
        ({
            users: state.users,
            currentUser: state.currentUser,
            showCreate: state.showCreate
        }),
    dispatch =>
        ({
            onRemove(username) {
                dispatch(removeUser(username))
            },
            onCreate(username,fullName) {
                dispatch(storeNewUser(username, fullName));
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
            },
            onRefresh() {
                dispatch(fetchUsers())
            }
        })
)(UsersList);

