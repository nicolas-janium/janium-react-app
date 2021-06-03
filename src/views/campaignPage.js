import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Box, Paper, Tabs, Tab, Card, CardHeader, CardActions, CardContent, Button, TextField, Checkbox, FormControlLabel, Link, Select, FormControl, MenuItem }  from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { NavBar, AccountsCard, CommunicationStatsTable, AccountDetailsDataList, CampaignContacts, CampaignMessaging } from "../components";

// let accountsData = require('../test_data/account.json');

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }, 
  appBarStyles: {
      width: "max-content",
      boxShadow: "unset !important"
  },
  tabButtons: {
      color: "#000",
      '&:focus': {
          outline: "unset"
      }
  }
});

export default function CampaignPage(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  	<div className={classes.root + " h-100 py-5"}>
      <AppBar className={classes.appBarStyles} position="static" color="transparent">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" aria-label="simple tabs example">
          <Tab className={classes.tabButtons} label="Contacts" {...a11yProps(0)} />
          <Tab className={classes.tabButtons} label="Messaging" {...a11yProps(1)} />
          <Tab className={classes.tabButtons} label="Messaging - Data Enrichment" {...a11yProps(2)} />
          <Tab className={classes.tabButtons} label="Settings &#38; Stats" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CampaignContacts />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CampaignMessaging />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}

