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
import Login from "./components/Pages/Login/Login";
import Drawer from "./components/Drawer/Drawer";

import { useSelector } from "react-redux";

import _ from "lodash";

export default function App() {
  const user = useSelector((state) => state.userReducer.user);
  console.log("user", user);
  return (
    <Router>
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
    </Router>
  );
}
