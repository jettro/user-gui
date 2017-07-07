import React from 'react';
import {Link} from "react-router-dom";

const Main = () => (
    <div className="container main">
        <h1>Management site</h1>
        <div>
            <Link to="about">[About]</Link>
            <Link to="users">[Users]</Link>
        </div>
    </div>
);

export default Main;