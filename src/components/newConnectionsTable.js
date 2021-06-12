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
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles({
  tableWrapperDiv: {
    maxWidth: 1200,
    margin: "auto"
  },
  tableWrapper: {
    background: "transparent",
    boxShadow: "unset",
    position: "relative",
    display: "table",
    borderRadius: "7px",
    overflow: "hidden"
  },
  table: {
    minWidth: 650,
    border: "3px solid #193852",
    borderRadius: "7px"
  },
  tableHeaders: {
    background: "#193852"
  },
  dq: {
    color: "#ff3a2c",
    cursor: "pointer",
    textDecoration: "underline"
  },
  pagination: {
    background: "#193852",
    color: "#FFF"
  }
});

function createData(name, qualifications, title, company, location, campaign, connectionDate) {
  return { name, qualifications, title, company, location, campaign, connectionDate };
}


export default function NewConnectionsTable(props) {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
    <div className={classes.tableWrapperDiv}>
      <div className={classes.tableName + " ml-1 h4"}>New Connections</div>
      <TableContainer component={Paper} className={classes.tableWrapper + " tableBoxShadow m-auto"}>
        <Table className={classes.table + " newConnectionsTable"} aria-label="simple table">
          <TableHead className={classes.tableHeaders}>
            <TableRow>
              <TableCell align="center" className={classes.fontWhite}>Name/LinkedIn</TableCell>
              <TableCell align="center">Qualification</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Company</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Campaign</TableCell>
              <TableCell align="center">Connection Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.title} className={row.qualifications ? "disableTableRow" : ""}>
                {/* <TableCell component="th" scope="row">
                  <Link>{row.title}</Link>
                </TableCell> */}
                <TableCell align="center"><Link to="">{row.name}</Link></TableCell>
                <TableCell align="center">{row.qualifications ? "" : <a href="#" className={classes.dq}>DQ</a>}</TableCell>
                <TableCell className="text-nowrap" align="center">{row.title}</TableCell>
                <TableCell align="center">{row.company}</TableCell>
                <TableCell className="text-nowrap" align="center">{row.location}</TableCell>
                <TableCell className="text-nowrap" align="center">{row.campaign}</TableCell>
                <TableCell className="text-nowrap" align="center">{row.connectionDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          className={classes.pagination}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
