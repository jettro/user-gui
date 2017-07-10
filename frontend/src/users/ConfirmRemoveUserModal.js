import React from 'react';

const ConfirmRemoveUserModal = ({
                                    username,
                                    showModal,
                                    onConfirm = f => f,
                                    onCancel = f => f
                                }) => {
        let _username = {username};

        const confirm = e => {
            e.preventDefault();
            onConfirm(_username.value);
        };

        if (showModal === "true") {
            return <div>
                <input ref={input => _username = input} value={username} type="hidden"/>
                <div>Do you want to remove the user '{username}'</div>
                <div>
                    <button onClick={confirm}>Confirm</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </div>
        } else {
            return null;
        }
    }
;

export default ConfirmRemoveUserModal;
