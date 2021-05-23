import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  tableWrapper: {
    maxWidth: 1200,
    background: "transparent",
    boxShadow: "unset"
  },
  table: {
    minWidth: 650,
    border: "2px solid #535a49",
    borderRadius: "7px",
    overflow: "hidden"
  },
  tableHeaders: {
    background: "#535a49"
  }
});

function createData(name, title, company, location, campaign, connectionDate) {
  return { name, title, company, location, campaign, connectionDate };
}


export default function NewResponsesTable(props) {
  const classes = useStyles();

  const rows = [];
  let hasNoNewConnections = false;

  if (props.responseData.length > 0) {
    props.responseData.map((messagesInfo, i) => {
      rows.push(createData(messagesInfo.full_name, messagesInfo.title, messagesInfo.company, messagesInfo.location, messagesInfo.janium_campaign_name, messagesInfo.msg_timestamp));
  })
  } else {
    hasNoNewConnections = true;
  }

  return (
    <TableContainer component={Paper} className={classes.tableWrapper + " m-auto"}>
      <div className={classes.tableName + " ml-1 mt-2 h4"}>New Responses</div>
      <Table className={classes.table + " newResponsesTable"} aria-label="simple table">
        <TableHead className={classes.tableHeaders}>
          <TableRow>
            <TableCell align="center">Name/LinkedIn</TableCell>
            {/* <TableCell align="right">Continue</TableCell> */}
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Campaign</TableCell>
            {/* <TableCell align="center">Source</TableCell> */}
            <TableCell align="center">Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              <TableCell align="center"><Link>{row.name}</Link></TableCell>
              {/* <TableCell align="center">{row.continue}</TableCell> */}
              <TableCell className="text-nowrap" align="center">{row.title}</TableCell>
              <TableCell align="center">{row.company}</TableCell>
              <TableCell className="text-nowrap" align="center">{row.location}</TableCell>
              <TableCell className="text-nowrap" align="center">{row.campaign}</TableCell>
              {/* <TableCell align="center">{row.continue}</TableCell> */}
              <TableCell className="text-nowrap" align="center">{row.connectionDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
