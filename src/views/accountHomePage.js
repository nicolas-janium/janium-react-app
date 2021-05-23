import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow }  from '@material-ui/core';
import { NavBar, ConnectorTable, NewConnectionsTable, NewResponsesTable } from "../components";

const useStyles = makeStyles({
  root: {
    background: "#597081"
  }
});

export default function AccountHomePage(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    fetchedData: null
  })
  

  console.log('homepage: ', props.accountInfo);

  return (
    
  	<div className={classes.root + " h-100"}>
      <br />
      <NewConnectionsTable connectionData={props.accountInfo.new_connections} />
      <br />
      <NewResponsesTable responseData={props.accountInfo.new_messages} />
      <br />
      <ConnectorTable campaignsData={props.accountInfo.janium_campaigns}/>
    </div>
  );
}

