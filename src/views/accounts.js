import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardActions, CardContent, Button, TextField, Checkbox, FormControlLabel, Link }  from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { NavBar, AccountsCard, CommunicationStatsTable, AccountDetailsDataList } from "../components";

let accountsData = require('../test_data/account.json');

const useStyles = makeStyles({
  root: {
    
  }, 
  tablesWrapper: {
    maxWidth: 1400
  }
});

export default function Accounts(props) {
  const classes = useStyles();
  // console.log('thems be my account props: ', props);

  return (
  	<div className={classes.root + " h-100"}>
      <br />
		  <AccountsCard accountsData={props.state} /> 
      <br />
      <div className={classes.tablesWrapper + " d-flex justify-content-around align-items-center px-5 mx-auto mt-3"}>
        <CommunicationStatsTable accountsData={props.state} />
        {/* <AccountDetailsDataList /> */}
      </div>
      

    </div>
  );
}

