import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Sidebar from "./components/Sider/Sidebar";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Messages from "./components/Pages/Messages/Messages";
import Page404 from "./components/NotFound/Page404";

import { Provider } from "react-redux";

import { store } from "./redux/store";

import Drawer from "./components/Drawer/Drawer";

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/messages" exact component={Messages} />
          <Route path="/*" exact>
            <Page404 />
          </Route>
        </Switch>

        {/* drawer action*/}
        <Drawer />
      </Provider>
    </Router>
  );
}
