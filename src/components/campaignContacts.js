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
import { FormControlLabel, Switch, Typography, Button, Select, Checkbox, TableSortLabel, InputLabel, TablePagination }  from '@material-ui/core';
import { CampaignContactsTable } from "../components";
import * as Api from "../api.js";
import { FlashOnOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: 1400
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
        color: "#FFF",
        "&:hover": {
            background: "#63bf91"
        }
    },
    tableWrapper: {
        maxWidth: 900
    },
    switchWrapper: {
        maxWidth: 1000
    }
}));

function createData(ulincCampaign, isActive, campaignId, parentCampaignId, ulincCampaignId) {
    return { ulincCampaign, isActive, campaignId, parentCampaignId, ulincCampaignId };
}

const headCells = [
    { id: 'checks', numeric: false, disablePadding: false, label: 'Select' },
    { id: 'ulincCampaign', numeric: false, disablePadding: false, label: 'Ulinc Campaign Name' },
    { id: 'isActive', numeric: false, disablePadding: false, label: 'Ulinc Is Active' },
    { id: 'campaignId', numeric: false, disablePadding: false, label: 'Ulinc Campaign ID' },
    { id: 'parentCampaignId', numeric: true, disablePadding: false, label: 'Parent Janium Campaign' }
];

export default function CampaignContacts(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    // const [triggerRefresh, setRefresh] = React.useState({
    //     refresh: false
    // })

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const [state, setState] = React.useState({
        // backDateSteps: true,
        campaignActive: true
    });

    const handleChangeCheckbox = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });

        updateJaniumCampaignStatus();
    };

    //update janium campaign status
    function updateJaniumCampaignStatus() {
        let body = {
          "janium_campaign_id": props.campaignContactsData.janium_campaign_id,
          "janium_campaign_name": props.campaignContactsData.janium_campaign_name,
          "janium_campaign_description": "",
          "is_active": !state.campaignActive,
          "email_config_id": props.campaignContactsData.email_config_id
        }

        Api.updateJaniumCampaignStatus(body, updateJaniumCampaignStatusSuccess, updateJaniumCampaignStatusFailure);
    }

    function updateJaniumCampaignStatusSuccess() {

    }

    function updateJaniumCampaignStatusFailure() {

    }

    let rows = [];
    let hasNoUlincCampaigns = false;
    console.log('these be me prahps: ', props);

    if (props.campaignContactsData.total_ulinc_campaigns.length > 0) {
        props.campaignContactsData.total_ulinc_campaigns.map((ulincCampaigns, index) => {
            // if (ulincCampaigns.parent_janium_camapaign_name) {
            //     setSelected(ulincCampaigns.ulinc_campaign_id);
            // }
            rows.push(createData(ulincCampaigns.ulinc_campaign_name, ulincCampaigns.ulinc_is_active, ulincCampaigns.ulinc_ulinc_campaign_id, ulincCampaigns.parent_janium_camapaign_name, ulincCampaigns.ulinc_campaign_id));
        })
    } else {
        hasNoUlincCampaigns = true;
    }

    //checkbox code

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
    
        setSelected(newSelected);
      };

      const isSelected = (campaignId) => selected.indexOf(campaignId) !== -1;

      function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
          const order = comparator(a[0], b[0]);
          if (order !== 0) return order;
          return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
      }

      function getComparator(order, orderBy) {
        return order === 'desc'
          ? (a, b) => descendingComparator(a, b, orderBy)
          : (a, b) => -descendingComparator(a, b, orderBy);
      }

      function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
          return -1;
        }
        if (b[orderBy] > a[orderBy]) {
          return 1;
        }
        return 0;
      }

      // for api call
      let ulincCampaignsToLink = {
        "ulinc_campaign_ids":[],
        "janium_campaign_id": null
      }
      ulincCampaignsToLink.janium_campaign_id = props.campaignContactsData.janium_campaign_id;
      function addUlincCampaignsClickHandler() {
        ulincCampaignsToLink.ulinc_campaign_ids = selected;
        Api.updateAssignUlincCampaigns(ulincCampaignsToLink, addUlincCampaignsSuccess, addUlincCampaignsFailure);
      }

      function addUlincCampaignsSuccess(response) {
        window.location.reload();
        // rows = [];
        // response.data.map((ulincCampaigns, index) => {
        //     rows.push(createData(ulincCampaigns.ulinc_campaign_name, ulincCampaigns.ulinc_is_active, ulincCampaigns.ulinc_ulinc_campaign_id, ulincCampaigns.parent_janium_camapaign_name, ulincCampaigns.ulinc_campaign_id));
        // })
      }

      function addUlincCampaignsFailure() {
          
      }

      function refreshData() {

      }

      
    
      


    return (
        <div className={classes.root}>
            {/* switch campaign on or off */}
            <FormControlLabel
                className={classes.switchWrapper + " mt-3 ml-auto"}
                control={
                <Switch
                    checked={state.campaignActive}
                    onChange={handleChangeCheckbox}
                    name="campaignActive"
                    color="primary"
                />
                }
                label={<Typography className={classes.switchText + " ml-auto"}>{props.campaignContactsData.janium_campaign_name}</Typography>}
            />
            
            <div className="d-flex">
                <div className="w-100 d-flex flex-column px-3">
                    {/* <Typography variant="h6" gutterBottom>
                        Associate Ulinc Campaign and Contacts to this Janium Campaign
                    </Typography> */}
                    <Button onClick={refreshData} variant="contained" color="primary" className={classes.buttonClass + " mt-3"}>
                        Retrieve/Refresh Ulinc Campaigns
                    </Button>
                    <br />
                    <TableContainer component={Paper} className={classes.tableWrapper + " tableBoxShadow"}>
                        <Table className={classes.table + " campaignsTable"} aria-label="simple table">
                            <TableHead className={classes.tableHeaders}>
                                <TableRow>
                                    {/* <TableCell align="center">Ulinc Campaign Name</TableCell>
                                    <TableCell align="center">Ulinc Is Active</TableCell>
                                    <TableCell align="center">Ulinc Campaign ID</TableCell> */}

                                    {headCells.map((headCell) => (
                                        <TableCell
                                            key={headCell.id}
                                            align={headCell.numeric ? 'right' : 'left'}
                                            padding={headCell.disablePadding ? 'none' : 'default'}
                                            align="center"
                                        >
                                            <TableSortLabel>
                                                {headCell.label}
                                            </TableSortLabel>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                        const isItemSelected = isSelected(row.ulincCampaignId);
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                    
                                    return (
                                        
                                    <TableRow 
                                        key={row.ulincCampaignId}
                                        hover
                                        onClick={(event) => handleClick(event, row.ulincCampaignId)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        selected={isItemSelected}
                                    >
                                        {/* <TableCell align="center">
                                            <Link title={row.title} to={{pathname: '/campaign/:'+ row.campaignId}}>{row.title}</Link>
                                        </TableCell> */}
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isItemSelected}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </TableCell>
                                        <TableCell align="center">{row.ulincCampaign}</TableCell>
                                        <TableCell align="center">{row.isActive ? <CheckIcon className="greenCheck"/> : <CloseIcon className="redX" />}</TableCell>
                                        <TableCell align="center">{row.campaignId}</TableCell>
                                        <TableCell align="center">{row.parentCampaignId ? row.parentCampaignId : ""}</TableCell>
                                    </TableRow>
                                    )})
                                }
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
                    {/* <br />
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
                        label={<Typography className={classes.switchText}>Backdate Steps</Typography>}
                    /> */}
                    <br />
                    <Button onClick={addUlincCampaignsClickHandler} variant="contained" color="#000" className={classes.buttonClass + " mt-3 " + classes.buttonClassTwo}>
                        Add Ulinc Campaign(s) to {props.campaignContactsData.janium_campaign_name}
                    </Button>
                </div>
            </div>
            <CampaignContactsTable contactsData={props.campaignContactsData.contact_list} />
        </div>
      );
}