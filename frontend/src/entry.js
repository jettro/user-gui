require('font-awesome-sass-loader');
import './entry.scss';
import {Provider} from "react-redux";
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import UsersReduxHome from './home/UsersReduxHome';
import storeFactory from './store';

const App = () => (
    <Router>
        <div className="app">
            <Route exact path="/" component={UsersReduxHome} />
            {/*<Route exact path="/articles" component={Articles} />*/}
            {/*<Route path="/dashboard/:text?" component={Dashboard} />*/}
            {/*<Route path="/home" component={ActorHome} />*/}
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
