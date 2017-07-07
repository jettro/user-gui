import {Users} from "../containers";
import React from 'react';

const UsersPage = () => (
    <div className="container userHome">
        <p>
            Hier beheren we all gebruikers:
        </p>
        <Users />
    </div>
);

export default UsersPage;