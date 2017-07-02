import React from 'react';

const User = ({username, fullName, showDetails, onRemove = f => f, onMarkCurrent = f => f}) => (
    (showDetails) ?
        <tr className="userDetails">
            <td colSpan={3}>
                <div className="userDetails">
                    <span>Username: </span><span>{username}</span><br/>
                    <span>Full name: </span><span>{fullName}</span>
                </div>
            </td>
        </tr> :
        <tr className="user">
            <td className="username">{username}</td>
            <td className="fullName">{fullName}</td>
            <td className="actions">
                <button onClick={onRemove}>remove</button>
                <button onClick={onMarkCurrent}>details</button>
            </td>
        </tr>
);

export default User;

