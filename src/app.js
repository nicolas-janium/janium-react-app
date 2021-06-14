import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { NavBar, Footer, Loading } from "./components";
import { Login, Accounts, AccountHomePage, SettingsPage, CampaignPage } from "./views";
import * as Api from "./api.js";
import Cookies from 'js-cookie';


import "./app.css";
import { SettingsInputAntennaTwoTone } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    
  }
});

const App = () => {

  const classes = useStyles();
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

  const [accountHomepage, setAccountHomepageData] = React.useState({
    accountHomepageData: null
  })

  const [campaignContacts, setcampaignContacts] = React.useState({
    campaignContactsData: null
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

  const handleGoToAccountHomepage = (accountData) => { 

    let params = {
      accountId: accountData
    }
  
    Api.getAccountHomepageData(params, gotoAccountHomepageSuccess, gotoAccountHomepageFail);
  }
  
  const gotoAccountHomepageSuccess = (response) => {
    setAccountHomepageData({...accountHomepage, accountHomepageData: response.data});
  }
  
  const gotoAccountHomepageFail = () => {
   console.log('homepage call failed');
  }

  const getCampaignContactsData = () => {
    var url_string = window.location.href; 
    var url = new URL(url_string);
    var janiumCampaignId = url.searchParams.get("janiumCampaignId");

    let params = {
      janiumCampaignId: janiumCampaignId
    }

    Api.getCampaignContacts(params, getCampaignContactsDataSuccess, getCampaignContactsDataFailure)
  }

  const getCampaignContactsDataSuccess = (response) => {
    console.log('campaign contacts call success ', response.data);

    setcampaignContacts({...campaignContacts, campaignContactsData: response.data});
  }

  const getCampaignContactsDataFailure = () => {
    console.log('campaign contacts call failed');
  }

  return (
    <Router>
      <div id="app" className={classes.root + " d-flex flex-column pb-3"}>
        
        {
          (accountInfo.isSignedIn || Cookies.get('access_token_cookie')) ? <NavBar setAccountInfo={setAccountInfo}/> : ""
        }
          <Switch>
            <Route path="/" exact render={() => {
              if (accountInfo.isSignedIn === true || Cookies.get('access_token_cookie')) {
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
            {/* <Route path="/accountHomePage" component={AccountHomePage} /> */}
            <Route path="/accountHomePage" render={(prop) => {
              if (accountHomepage.accountHomepageData == null) {
                handleGoToAccountHomepage(prop.location.state.account.ulinc_config_id);
              } else {
                return <AccountHomePage accountInfo={accountHomepage.accountHomepageData} />
              }
            }} />
            <Route path="/settingsPage" component={SettingsPage} />
            <Route path="/campaign" render={(prop) => {
              if (campaignContacts.campaignContactsData == null) {
                getCampaignContactsData();
              } else {
                return <CampaignPage campaignContactsData={campaignContacts.campaignContactsData} />
              }
            }} />
          </Switch>
      </div> 
    </Router>
  );
};

export default App;
