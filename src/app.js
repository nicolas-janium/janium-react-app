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
  const [accountInfo, setAccountInfo] = React.useState({
    accountId: null,
    isSignedIn: false,
  });

  return (
    <Router>
      <div id="app" className="d-flex flex-column h-100">
      
          <Switch>
            <Route path="/" exact render={() => {
              if (accountInfo.isSignedIn === true) {
                return <Redirect to="/accounts" />
              } else {
                return <Login accountInfo={accountInfo} setAccountInfo={setAccountInfo}/>
              }
            }}/>
            <Route path="/accounts"  render={() => {

              return <Accounts accountInfo={accountInfo}/>
            }} />
            <Route path="/accountHomePage" component={AccountHomePage} />
            <Route path="/settingsPage" component={SettingsPage} />
          </Switch>
      </div> 
    </Router>
  );
};

export default App;
