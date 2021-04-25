import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles({
  tableWrapper: {
    maxWidth: 650
  },
  table: {
    minWidth: 650
  },
  taskInQueue: {
    fontSize: 12,

  }
});

function createData(actionType, twentyFourHr, seventyTwoHr, week, month, total) {
  return { actionType, twentyFourHr, seventyTwoHr, week, month, total };
}


export default function CommunicationStatsTable(props) {
  const classes = useStyles();

  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(2);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  const rows = [];
  let isEmptyAccount = false;

  if (props.accountsData.length > 0) {
    props.accountsData.map((accountInfo, i) => {
        for (var key of Object.keys(accountInfo.summary_data)) {
          let tableData = accountInfo.summary_data[key];
          rows.push(createData(key, tableData["24h"], tableData["72h"], tableData["24h"], tableData["month"], tableData["total"]));
        }
    })
  } else {
    isEmptyAccount = true;
  }

  return (
    <Paper>
    {
      isEmptyAccount ?
      // do nothing
      <div></div>
      :
        <TableContainer component={Paper} className={classes.tableWrapper}>
          <div className="d-flex justify-content-between mx-2 mt-2 h4">Data for { props.accountsData[0].ulinc_li_email } <span className={classes.taskInQueue}>Ulinc tasks in queue: {props.accountsData[0].ulinc_tasks_in_queue}</span></div>
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
    }
    </Paper>
  );
}
