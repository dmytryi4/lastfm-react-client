import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './components/home/home';
import SingleArtist from './components/singleArtist/singleArtist';

import { Provider } from 'react-redux';

// import rootReducers from './store/reducers';
import { rootReducers } from './reducers/reducers';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/singleArtist/:name" component={SingleArtist}></Route>   
            </App>
        </Router>
    </Provider>
, 
document.getElementById('root'));