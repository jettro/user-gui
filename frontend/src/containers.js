import {connect} from "react-redux";
import {
    fetchUsers, hideRemoveUserModal, markCurrentUser, removeUser, showCreateUserForm, showRemoveUserModal,
    storeNewUser
} from "./actions";
import UsersList from "./users/UsersList";

export const Users = connect (
    state =>
        ({
            users: state.users,
            currentUser: state.currentUser,
            removeUser: state.removeUser,
            showCreate: state.showCreate,
            showRemoveUserModal: state.showRemoveUserModal
        }),
    dispatch =>
        ({
            onRemove(username) {
                dispatch(showRemoveUserModal(username))
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
            },
            onConfirmRemove(username) {
                dispatch(removeUser(username));
                dispatch(hideRemoveUserModal());
            },
            onCancelRemove() {
                dispatch(hideRemoveUserModal());
            }
        })
)(UsersList);