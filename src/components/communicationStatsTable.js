import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  tableWrapper: {
    maxWidth: 650
  },
  table: {
    minWidth: 650
  },
});

function createData(actionType, twentyFourHr, seventyTwoHr, week, month, total) {
  return { actionType, twentyFourHr, seventyTwoHr, week, month, total };
}


export default function CommunicationStatsTable(props) {
  const classes = useStyles();

//   Take in the data from the props and dynamically run these createData functions
  const rows = [
    createData('Arcant', 5, 60, 24, 40, 100),
    createData('Arcant2', 3, 60, 24, 40, 100),
    createData('Arcant3', 11, 60, 24, 40, 100),
    createData('Arcant4', 8, 60, 24, 40, 100)
  ];
  

  return (
    <TableContainer component={Paper} className={classes.tableWrapper}>
      <div className="ml-2 mt-2 h4">Data for </div>
      <hr className="mb-0"/>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Action Type</TableCell>
            <TableCell align="right">24h</TableCell>
            <TableCell align="right">72hr</TableCell>
            <TableCell align="right">week</TableCell>
            <TableCell align="right">month</TableCell>
            <TableCell align="right">total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.actionType}>
              <TableCell component="th" scope="row">
                {row.actionType}
              </TableCell>
              <TableCell align="right">{row.twentyFourHr}</TableCell>
              <TableCell align="right">{row.seventyTwoHr}</TableCell>
              <TableCell align="right">{row.week}</TableCell>
              <TableCell align="right">{row.month}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
