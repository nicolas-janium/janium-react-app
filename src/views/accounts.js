import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardActions, CardContent, Button, TextField, Checkbox, FormControlLabel, Link }  from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { NavBar, AccountsCard } from "../components";

const useStyles = makeStyles({
  root: {
    background: "#597081"
  }
});

export default function Accounts() {
  const classes = useStyles();


  return (
  	<div className={classes.root + " h-100"}>
      <NavBar />
      <br />
		  <AccountsCard />
    </div>
  );
}

