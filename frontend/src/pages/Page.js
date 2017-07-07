import React from 'react';
import {MainMenu} from "./MainMenu";

const Page = ({children}) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>

export default Page;
