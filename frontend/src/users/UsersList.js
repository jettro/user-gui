import React from 'react';
import "./users.scss";
import User from "./User";
import NewUserForm from "./NewUserForm";

const UsersList = ({
                       users, currentUser, showCreate,
                       onRemove = f => f,
                       onCreate = f => f,
                       onMarkCurrent = f => f,
                       onShowCreate = f => f,
                       onCancelCreate = f => f
                   }) => (
    <div className="users">
        <NewUserForm showForm={showCreate} onNewUser={onCreate} onCancelCreate={onCancelCreate}/>

        <p>List of current users</p>
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>Full name</th>
                <th>
                    <button onClick={onShowCreate}>Create</button>
                </th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user, i) =>
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
