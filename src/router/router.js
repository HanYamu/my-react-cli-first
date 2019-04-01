import React, { Component } from 'react';
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import routes from "./routes"

const createHistory = createBrowserHistory()

const router = <Router
  history={createHistory}
  children={routes}
>
</Router>

export default router