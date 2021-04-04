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

const useStyles = makeStyles({
  tableWrapper: {
    maxWidth: 1100,

  },
  table: {
    minWidth: 650
  },
});

function createData(title, status, contacts, connected, repliedConnectionMessages, repliedOtherMessages) {
  return { title, status, contacts, connected, repliedConnectionMessages, repliedOtherMessages };
}

const rows = [
  createData('Arcant', 'Active', 60, 24, 40, 100),
  createData('Arcant2', 'Active', 60, 24, 40, 100),
  createData('Arcant3', 'Active', 60, 24, 40, 100),
  createData('Arcant4', 'Active', 60, 24, 40, 100)
];

export default function ConnectorTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableWrapper + " m-auto"}>
      <div className="ml-2 mt-2 h4">Connector campaigns</div>
      <hr className="mb-0"/>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Contacts</TableCell>
            <TableCell align="right">Connected</TableCell>
            <TableCell align="right">Replied to connection message</TableCell>
            <TableCell align="right">Replied to other message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.contacts}</TableCell>
              <TableCell align="right">{row.connected}</TableCell>
              <TableCell align="right">{row.repliedConnectionMessages}</TableCell>
              <TableCell align="right">{row.repliedOtherMessages}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
