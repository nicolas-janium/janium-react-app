import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 400,
    maxHeight: 320,
    minHeight: 220,
    padding: 5
  },
  title: {
    fontSize: 18,
    textDecoration: "underline"
  },
  checkedIconColor: {
    color: "green",
    fontSize: 18
  },
  dataPoints: {
    fontSize: 14,
    width: 250,
    display: "flex",
    justifyContent: "space-between"
  },
  dataPointValStyles: {

  }
  
}));

export default function AccountDetailsDataList(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <Typography className={classes.title} gutterBottom>
          Jason Hawkes
        </Typography>
        <div className="ml-3">
            <Typography className={classes.dataPoints} gutterBottom>
                Is Active: <CheckIcon className={classes.checkedIconColor} />
            </Typography>
            <Typography className={classes.dataPoints} gutterBottom>
                Ulinc Tasks in Queue: <span>2,465</span>
            </Typography>
            <Typography className={classes.dataPoints} gutterBottom>
                Active Janium Campaigns: <span>0</span>
            </Typography>
            <Typography className={classes.dataPoints} gutterBottom>
                Assoc. Ulinc Campaigns: <span>6</span>
            </Typography>
            <Typography className={classes.dataPoints} gutterBottom>
                Date of First Data: <span>Nov 24, 2020</span>
            </Typography>
            <Typography className={classes.dataPoints} gutterBottom>
                Janium Connector Campaigns: <span>1</span>
            </Typography>
            <Typography className={classes.dataPoints} gutterBottom>
                Janium Messenger Campaings: <span>2</span>
            </Typography>
            <Typography className={classes.dataPoints} gutterBottom>
                Ulinc Connector Campaigns: <span>7</span>
            </Typography>
            <Typography className={classes.dataPoints} gutterBottom>
                Ulinc Messenger Campaigns: <span>3</span>
            </Typography>
        </div>
    </Card>
  );
}