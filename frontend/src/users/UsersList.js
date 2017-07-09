import React from 'react';
import "./users.scss";
import User from "./User";
import NewUserForm from "./NewUserForm";
import {Confirm} from "../containers";
import ConfirmRemoveUserModal from "./ConfirmRemoveUserModal";

const UsersList = ({
                       users, currentUser, showCreate, showRemoveUserModal, removeUsername,
                       onRemove = f => f,
                       onCreate = f => f,
                       onMarkCurrent = f => f,
                       onShowCreate = f => f,
                       onCancelCreate = f => f,
                       onRefresh = f => f,
                       onConfirmRemove = f => f,
                       onCancelRemove = f => f
                   }) => (
    <div className="users">
        <NewUserForm showForm={showCreate} onNewUser={onCreate} onCancelCreate={onCancelCreate}/>

        <ConfirmRemoveUserModal
            username={showRemoveUserModal.username}
            showModal={showRemoveUserModal.showModal}
            onConfirm={onConfirmRemove}
            onCancel={onCancelRemove}/>

        <p>List of current users</p>
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>Full name</th>
                <th>
                    <button onClick={onShowCreate}>Create</button>
                    <button onClick={onRefresh}>Refresh</button>
                </th>
            </tr>
            </thead>
            <tbody>
            {
                users.items.map((user, i) =>
                    <User key={i} {...user}
                          onRemove={() => onRemove(user.username)}
                          onMarkCurrent={() => onMarkCurrent(user.username)}
                          showDetails={currentUser === user.username}/>
                )
            }
            </tbody>
        </table>
    </div>
);

export default UsersList;
