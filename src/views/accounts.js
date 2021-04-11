import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardActions, CardContent, Button, TextField, Checkbox, FormControlLabel, Link }  from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { NavBar, AccountsCard, CommunicationStatsTable, AccountDetailsDataList } from "../components";

let accountsData = require('../test_data/account.json');

const useStyles = makeStyles({
  root: {
    background: "#597081"
  }
});

export default function Accounts(props) {
  const classes = useStyles();

  return (
  	<div className={classes.root + " h-100"}>
      <NavBar />
      <br />
		  <AccountsCard accountsData={accountsData} /> 
      <br />
      <div className="d-flex justify-content-around align-items-center px-5">
        <CommunicationStatsTable />
        <AccountDetailsDataList />
      </div>
      

    </div>
  );
}

