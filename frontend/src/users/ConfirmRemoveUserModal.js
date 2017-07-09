import React from 'react';

const ConfirmRemoveUserModal = ({
                          username,
                          showModal,
                          onConfirm = f => f,
                          onCancel = f => f
                      }) => {
        if (showModal === "true") {
            return <div>
                <div>Do you want to remove the user {username}</div>
                <div>
                    <button onClick={onConfirm}>Confirm</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </div>
        } else {
            return null;
        }
    }
;

export default ConfirmRemoveUserModal;
