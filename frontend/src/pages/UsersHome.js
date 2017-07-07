import React from 'react';
import UsersList from "../users/UsersList";
import {Component} from "react";

class UsersHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(obj => obj.results)
            .then(data => {
                const users = data.map(obj => {
                    return {username: obj.login.username, fullName: obj.name.first + ' ' + obj.name.last}
                });
                this.setState({loaded: true, loading: false, users})
            });
    }

    render() {
        const {users, loading} = this.state;
        return (loading)?
            <div className="container">Loading users ...</div> :
            <div className="container userHome">
                <p>
                    Hier vind je alle gebruikers:
                </p>
                <UsersList users={users} onRemove={removeUser} onCreate={createUser}/>
            </div>
    }
}

function removeUser(username) {
    console.log("About to remove user: " + username);
}

function createUser() {
    console.log("Create a new user.")
}

export default UsersHome;
