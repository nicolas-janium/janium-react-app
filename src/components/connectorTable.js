import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Card, CardActions, CardContent, CardHeader, Button, Typography, Switch, Modal, Backdrop, Fade, TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  tableWrapperDiv: {
    maxWidth: 1100,
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
    minWidth: 600,
    borderRadius: "7px"
  },
  tableHeaders: {
    background: "#FFF"
  },
  newCampaignButton: {
    background: "#74c69d",
    color: "#FFF",
    '&:focus': {
        outline: "unset"
    },
    '&:hover': {
        background: "#63bf91",
        boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxshadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 375
  },
  inputFields: {
    minWidth: 275,
    marginBottom: 15,
    boxshadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    borderRadius: 5
  },
  buttonWrapper: {
    paddingLeft: 30,
    paddingRight: 30
  },
  buttonClasses: {
    background: '#74C69D',
    color: '#FFF',
    minWidth: 125,
    width: '100%',
    transition: '0.1s linear',
    boxshadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '&:hover': {
      backgroundColor: '#74C69D',
      transform: 'scale(1.05)'
    }
  },
  requiredFields: {
    fontSize: 10,
    marginLeft: 20
  },
  checkboxText: {
    lineHeight: '1.1',
    fontSize: 12,
    textAlign: 'center'
  },
  switchText: {
    fontSize: 14
  }
}));

function createData(title, type, status, contacts, connected, replied, campaignId) {
  return { title, type, status, contacts, connected, replied, campaignId };
}

export default function ConnectorTable(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);


  //modal and create campaign logic
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    campaignName: "",
    messageTriggeredCampaign: false,
    campaignIsActive: false
  });

  const handleTextChange = (event) => {
    setState({...state, [event.target.name]: event.target.value})
  }
  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const rows = [];
  let hasNoCampaigns = false;
  
  if (props.campaignsData.length > 0) {
    props.campaignsData.map((campaignInfo, i) => {
      rows.push(createData(campaignInfo.janium_campaign_name, campaignInfo.janium_campaign_type, campaignInfo.janium_campaign_is_active, campaignInfo.janium_campaign_contacts, campaignInfo.janium_campaign_connected, campaignInfo.janium_campaign_replied, campaignInfo.janium_campaign_id));
    })
  } else {
    hasNoCampaigns = true;
  }

  return (
    <div className={classes.tableWrapperDiv}>
      <div className="d-flex justify-content-between pb-1">
        <div className="ml-1 mt-2 h4">Campaigns</div>
        <Button className={classes.newCampaignButton + " px-3"} size="small" onClick={handleOpen}>New Campaign</Button>
      </div>
      <TableContainer component={Paper} className={classes.tableWrapper + " tableBoxShadow m-auto"}>
        <Table className={classes.table + " campaignsTable"} aria-label="simple table">
          <TableHead className={classes.tableHeaders}>
            <TableRow>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Contacts</TableCell>
              <TableCell align="center">Connected</TableCell>
              <TableCell align="center">Replied</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.title}>
                <TableCell align="center" width="35%">
                  <Link title={row.title} to={{pathname: '/campaign?janiumCampaignId='+ row.campaignId}}>{row.title}</Link>
                </TableCell>
                <TableCell align="center" width="20%">{row.type}</TableCell>
                <TableCell align="center" width="15%" className={row.status ? "green" : "red"}>{row.status ? "Active" : "Inactive"}</TableCell>
                <TableCell align="center" width="10%">{row.contacts}</TableCell>
                <TableCell align="center" width="10%">{row.connected}</TableCell>
                <TableCell align="center" width="10%">{row.replied}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Card variant="outlined">
              <CardHeader className="text-center" titleTypographyProps={{variant:'h5'}} title="New Campaign" />
              <CardContent className="d-flex flex-column align-items-center">
                <TextField className={classes.inputFields} onChange={handleTextChange} label="Campaign Name" type="text" variant="outlined" size="small" name="campaignName" value={state.campaignName} />
                <FormControlLabel
                  control={
                  <Checkbox
                    checked={state.messageTriggeredCampaign}
                    onChange={handleChangeCheckbox}
                    name="messageTriggeredCampaign"
                    color="primary"
                  />
                  }
                  label={<Typography className={classes.checkboxText}>This is a message-triggered campaign
                  (the default is connection-triggered)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.campaignIsActive}
                      onChange={handleChangeCheckbox}
                      name="campaignIsActive"
                      color="primary"
                    />
                  }
                  label={<Typography className={classes.switchText}>Active</Typography>}
                />
              </CardContent>
              <CardActions className={classes.buttonWrapper}>
                <Button variant="contained" className={classes.buttonClasses}>Create Campaign</Button>
              </CardActions>

              {/* <span className={classes.requiredFields}>*Required Fields</span> */}
            </Card>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
