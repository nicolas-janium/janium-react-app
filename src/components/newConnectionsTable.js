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
    border: "2px solid #193852",
    borderRadius: "7px",
    overflow: "hidden"
  },
  tableHeaders: {
    background: "#193852"
  }
});

function createData(name, qualifications, title, company, location, campaign, connectionDate) {
  return { name, qualifications, title, company, location, campaign, connectionDate };
}


export default function NewConnectionsTable(props) {
  const classes = useStyles();

  const rows = [];
  let hasNoNewConnections = false;

  if (props.connectionData.length > 0) {
    props.connectionData.map((connectionInfo, i) => {
      rows.push(createData(connectionInfo.full_name, connectionInfo.is_dqd, connectionInfo.title, connectionInfo.company, connectionInfo.location, connectionInfo.janium_campaign_name, connectionInfo.connection_date));
    })
  } else {
    hasNoNewConnections = true;
  }

  return (
    <TableContainer component={Paper} className={classes.tableWrapper + " m-auto"}>
      <div className={classes.tableName + " ml-1 mt-2 h4"}>New Connections</div>
      <Table className={classes.table + " newConnectionsTable"} aria-label="simple table">
        <TableHead className={classes.tableHeaders}>
          <TableRow>
            <TableCell align="center" className={classes.fontWhite}>Name/LinkedIn</TableCell>
            <TableCell align="right">Qualifications</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Campaign</TableCell>
            <TableCell align="center">Connection Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              {/* <TableCell component="th" scope="row">
                <Link>{row.title}</Link>
              </TableCell> */}
              <TableCell align="center"><Link>{row.name}</Link></TableCell>
              <TableCell align="center">{row.qualifications ? "Already DQ" : <a href="#">DQ</a>}</TableCell>
              <TableCell className="text-nowrap" align="center">{row.title}</TableCell>
              <TableCell align="center">{row.company}</TableCell>
              <TableCell className="text-nowrap" align="center">{row.location}</TableCell>
              <TableCell className="text-nowrap" align="center">{row.campaign}</TableCell>
              <TableCell className="text-nowrap" align="center">{row.connectionDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
