import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {axiosGet, axiosPost} from './utils/axiosRequest';
import "./style/index.less";

import App from "./App";
import Home from "./views/home/home.jsx";

const createHistory = createBrowserHistory()

window.$get = axiosGet;
window.$post = axiosPost;

ReactDOM.render(
  <HashRouter>
    <Switch history={createHistory} >
      <Route path='/' render={() => (
          <App>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/home' component={Home} />
            </Switch>
          </App>
        )}
      />
      <Route render={() => <Redirect to='/home' />} />
    </Switch>
  </HashRouter>,
  document.getElementById('app')
);