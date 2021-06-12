import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { FormControlLabel, Switch, Typography, Button, Select, FormControl, MenuItem, InputLabel, TablePagination }  from '@material-ui/core';
import { CampaignContactsTable } from "../components";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },
    formControl: {
        minWidth: 150,
        width: "80%"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    buttonClass: {
        width: "fit-content"
    },
    buttonClassTwo: {
        background: "#74C69D",
        "&:hover": {
            background: "#63bf91"
        }
    }
}));

function createData(ulincCampaign, isActive, campaignId) {
    return { ulincCampaign, isActive, campaignId };
}

export default function CampaignContacts(props) {
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

    const [campaign, setCampaign] = React.useState('');

    const handleChange = (event) => {
        setCampaign(event.target.value);
    };

    const [state, setState] = React.useState({
        backDateSteps: true,
        campaignActive: true
    });

    const handleChangeCheckbox = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const rows = [
        createData('Campaign 1', true, 159),
        createData('Campaign 2', true, 151),
        createData('Campaign 3', false, 152),
        createData('Campaign 4', true, 153),
        createData('Campaign 5', true, 154),
    ];


    return (
        <div className={classes.root}>
            {/* switch campaign on or off */}
            <FormControlLabel
                className="mt-3 justify-content-end"
                control={
                <Switch
                    checked={state.campaignActive}
                    onChange={handleChangeCheckbox}
                    name="campaignActive"
                    color="primary"
                />
                }
                label={<Typography className={classes.switchText}>Campaign Name</Typography>}
            />
            
            <div className="d-flex">
                <div className="w-50 d-flex flex-column px-3">
                    {/* <Typography variant="h6" gutterBottom>
                        Associate Ulinc Campaign and Contacts to this Janium Campaign
                    </Typography> */}
                    <Button variant="contained" color="primary" className={classes.buttonClass + " mt-3"}>
                        Retrieve/Refresh Ulinc Campaigns
                    </Button>
                    <br />
                    <FormControl className={classes.formControl + " mt-3"}>
                        <InputLabel id="demo-simple-select-label">Ulinc Campaign</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={campaign}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControlLabel
                        className="mt-3"
                        control={
                        <Switch
                            checked={state.backDateSteps}
                            onChange={handleChangeCheckbox}
                            name="backDateSteps"
                            color="primary"
                        />
                        }
                        label={<Typography className={classes.switchText}>Backdate Steps?</Typography>}
                    />
                    <br />
                    <Button variant="contained" color="#000" className={classes.buttonClass + " mt-3 " + classes.buttonClassTwo}>
                        Add Ulinc Campaign(s)
                    </Button>
                </div>
                <div className="w-50 px-3">
                    {/* <Typography variant="h6" gutterBottom>
                        Associate Ulinc Campaign and Contacts to this Janium Campaign
                    </Typography> */}
                    <TableContainer component={Paper} className={classes.tableWrapper + " tableBoxShadow m-auto"}>
                        <Table className={classes.table + " campaignsTable"} aria-label="simple table">
                            <TableHead className={classes.tableHeaders}>
                                <TableRow>
                                    <TableCell align="center">Ulinc Campaign Name</TableCell>
                                    <TableCell align="center">Ulinc Is Active</TableCell>
                                    <TableCell align="center">Ulinc Campaign ID</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow key={row.title}>
                                    {/* <TableCell align="center">
                                        <Link title={row.title} to={{pathname: '/campaign/:'+ row.campaignId}}>{row.title}</Link>
                                    </TableCell> */}
                                    <TableCell align="center">{row.ulincCampaign}</TableCell>
                                    <TableCell align="center">{row.isActive ? <CheckIcon className="greenCheck"/> : <CloseIcon className="redX" />}</TableCell>
                                    <TableCell align="center">{row.campaignId}</TableCell>
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
            </div>
            <CampaignContactsTable />
        </div>
      );
}