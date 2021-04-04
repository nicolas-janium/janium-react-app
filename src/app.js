import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { NavBar, Footer, Loading } from "./components";
import { Login, Accounts, AccountHomePage, SettingsPage } from "./views";


import "./app.css";

const App = () => {
  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <Router>
      <div id="app" className="d-flex flex-column h-100">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/accounts" component={Accounts} />
            <Route path="/accountHomePage" component={AccountHomePage} />
            <Route path="/settingsPage" component={SettingsPage} />
          </Switch>
      </div> 
    </Router>
  );
};

export default App;
