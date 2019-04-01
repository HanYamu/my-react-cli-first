import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { Router } from "react-router";
import createBrowserHistory from 'history/createBrowserHistory';
import {axiosGet, axiosPost} from './utils/axiosRequest';
import store from "./store/initState";
import { Provider } from 'react-redux'
import "./style/index.less";

// import Routers from "./router/router";
import routes from "./router/routes";
import App from "./App";
import Home from "./views/home/home.js";
import ModuleFirst from "./views/module/moduleFirst.js";
import ModuleSecond from "./views/module/moduleSecond.js";
import ModuleThird from "./views/module/moduleThird.js";
console.log(routes)
const createHistory = createBrowserHistory()

window.$get = axiosGet;
window.$post = axiosPost;

// ReactDOM.render(
//   <Provider store={store}>
//   <Router
//     history={createHistory}
//     children={routes}
//   >
//   </Router></Provider>,  document.getElementById('app')
// );

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Switch history={createHistory} >
      <Route path='/' render={() => (
          <App>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/module1' component={ModuleFirst} />
              <Route path='/module2' component={ModuleSecond} />
              <Route path='/module3' component={ModuleThird} />
            </Switch>
          </App>
        )}
      />
      <Route render={() => <Redirect to='/home' />} />
    </Switch>
  </Router></Provider>,
  document.getElementById('app')
);