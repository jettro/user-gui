import React from 'react';

const NewUserForm = ({showForm = false, onNewUser = f => f, onCancelCreate = f => f}) => {
    let _username, _fullName;

    const submit = e => {
        e.preventDefault();
        onNewUser(_username.value, _fullName.value);
        _username.value = '';
        _fullName.value = '';
        _username.focus();
    };

    const cancel = e => {
        e.preventDefault();
        onCancelCreate();
        _username.value = '';
        _fullName.value = '';
    };

    if (showForm === "true") {
        return (
            <form className="add-user" onSubmit={submit}>
                <input ref={input => _username = input}
                       type="text"
                       placeholder="username ..." required/>
                <input ref={input => _fullName = input}
                       type="text"
                       placeholder="full name ..." required/>
                <button>ADD</button>
                <button onClick={cancel}>CANCEL</button>
            </form>
        )
    } else {
        return null;
    }
};

export default NewUserForm;