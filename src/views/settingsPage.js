import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow }  from '@material-ui/core';
import { NavBar, ConnectorTable } from "../components";

const useStyles = makeStyles({
  root: {
    background: "#597081"
  }
});

export default function SettingsPage(props) {
  const classes = useStyles();

//   console.log('setting page: ' + props.location.state.account.account_id);

  return (
  	<div className={classes.root + " h-100"}>
      <NavBar />
      <br />
    </div>
  );
}