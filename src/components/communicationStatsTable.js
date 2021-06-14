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
  tableWrapperDiv: {
    maxWidth: 750
  },
  tableWrapper: {
    background: "transparent",
    boxShadow: "unset",
    position: "relative",
    display: "table",
    borderRadius: "7px",
    overflow: "hidden",
    width: "100%"
  },
  table: {
    width: "100%",
    border: "3px solid #74c69d",
    borderRadius: "7px"
  },
  tableHeaders: {
    background: "#74c69d",
    color: "#FFF"
  },
  taskInQueue: {
    fontSize: 12,
  }
});

function createData(actionType, twentyFourHr, seventyTwoHr, week, month, total) {
  return { actionType, twentyFourHr, seventyTwoHr, week, month, total };
}

function removeUnderscores(str) {
  let string = str;
  return string.replace(/_/g, ' ');
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
    <div>
    {
      isEmptyAccount ?
      // do nothing
      <div></div>
      :
      <div className={classes.tableWrapperDiv}>
        <div className={classes.tableName + " d-flex justify-content-between ml-1 h4"}>Data for { props.accountsData[0].ulinc_li_email } <span className={classes.taskInQueue + " h6"}>Ulinc tasks in queue: {props.accountsData[0].ulinc_tasks_in_queue}</span></div>
          <TableContainer component={Paper} className={classes.tableWrapper + " tableBoxShadow"}>
            <Table className={classes.table + " commStatsTable"} aria-label="simple table">
              <TableHead className={classes.tableHeaders}>
                <TableRow>
                  <TableCell className={classes.tableHeaders}>Action Type</TableCell>
                  <TableCell className={classes.tableHeaders} align="center">24h</TableCell>
                  <TableCell className={classes.tableHeaders} align="center">72hr</TableCell>
                  <TableCell className={classes.tableHeaders} align="center">week</TableCell>
                  <TableCell className={classes.tableHeaders} align="center">month</TableCell>
                  <TableCell className={classes.tableHeaders} align="center">total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.actionType}>
                    <TableCell component="th" scope="row" className="text-capitalize">
                      {removeUnderscores(row.actionType)}
                    </TableCell>
                    <TableCell align="center">{row.twentyFourHr}</TableCell>
                    <TableCell align="center">{row.seventyTwoHr}</TableCell>
                    <TableCell align="center">{row.week}</TableCell>
                    <TableCell align="center">{row.month}</TableCell>
                    <TableCell align="center">{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    }
    </div>
  );
}
