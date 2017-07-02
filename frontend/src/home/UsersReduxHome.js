import {Users} from "../containers";
import React from 'react';

const UsersReduxHome = () => (
    <div className="container userHome">
        <p>
            Hier beheren we all gebruikers:
        </p>
        <Users />
    </div>
);

export default UsersReduxHome;