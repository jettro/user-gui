require('font-awesome-sass-loader');
import './entry.scss';
import {MainMenu} from "./pages/MainMenu";
import About from "./pages/About";
import Main from "./pages/Main";
import {Provider} from "react-redux";
import React from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import UsersPage from './pages/UsersPage';
import storeFactory from './store';

const App = () => (
    <Router>
        <div className="app">
            <MainMenu />
            <Route exact path="/" component={Main}/>
            <Route  path="/users" component={UsersPage} />
            <Route  path="/about" component={About} />
        </div>
    </Router>
);

const store = storeFactory();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
