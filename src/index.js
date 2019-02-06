import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { rootReducers } from './reducers/rootReducers';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from './containers/App';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import Preloader from './components/preloader/preloader';

import './index.scss';

const Home = React.lazy(() => import('./containers/homeContainer'));
const Artist = React.lazy(() => import('./containers/ArtistContainer'));
const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Suspense fallback={<Preloader/>}>
                <ScrollToTop>
                    <App>
                        <Route exact path="/" component={ props => <Home {...props} />}></Route>
                        <Route exact path="/singleArtist/:name" component={  props =>  <Artist {...props} /> }></Route>   
                    </App>
                </ScrollToTop>
            </Suspense>
        </Router>
    </Provider>
, 
document.getElementById('root'));