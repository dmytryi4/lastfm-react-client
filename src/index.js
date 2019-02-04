import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { rootReducers } from './reducers/rootReducers';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from './containers/App';
import Home from './containers/homeContainer';
import Artist from './containers/ArtistContainer';

import './index.scss';

const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/singleArtist/:name" component={Artist}></Route>   
            </App>
        </Router>
    </Provider>
, 
document.getElementById('root'));