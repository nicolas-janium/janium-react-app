import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { NavBar, Footer, Loading } from "./components";
import { Login, Accounts, AccountHomePage, SettingsPage } from "./views";
import * as Api from "./api.js";


import "./app.css";
import { SettingsInputAntennaTwoTone } from "@material-ui/icons";

const App = () => {
  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />;
  // }
  const [accountInfo, setAccountInfo] = React.useState({
    accountId: null,
    isSignedIn: false,
  });

  const [accountPage, setAccountPageData] = React.useState({
    accountPageData: null
  })

  const getAccountPageData = () => {
    Api.getAccountPageData(accountPageDataSuccess, accountPageDataFailure);
  }
  const accountPageDataSuccess = (response) => {
    setAccountPageData({...accountPage, accountPageData: response.data});
    return <Accounts accountInfo={accountInfo} state={accountPage.accountPageData}/>
  }

  const accountPageDataFailure = () => {
    console.log("could not pull data");
  }

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
              if (accountPage.accountPageData == null) {
                getAccountPageData();
              } else {
                return <Accounts accountInfo={accountInfo} state={accountPage.accountPageData}/>
              }
            }} />
            <Route path="/accountHomePage" component={AccountHomePage} />
            <Route path="/settingsPage" component={SettingsPage} />
          </Switch>
      </div> 
    </Router>
  );
};

export default App;
