import React from 'react';
import {Link} from "react-router-dom";

export const MainMenu = () =>
    <nav className="main-menu">
        <Link to="/">
            [Home]
        </Link>
        <Link to="about">
            [About]
        </Link>
        <Link to="users">
            [Users]
        </Link>
    </nav>
