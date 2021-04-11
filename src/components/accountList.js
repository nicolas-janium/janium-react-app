import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Divider, Button } from '@material-ui/core';
import {BrowserRouter as useHistory, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  listItemText: {
    color: '#0A369D',
  },
  buttonActive: {
    background: '#74C69D',
    color: '#FFF',
    width: 85,
    transition: '0.1s linear',
    '&:hover': {
      backgroundColor: '#74C69D',
      transform: 'scale(1.05)'
    }
  },
  buttonInactive: {
    background: '#cc5542',
    color: '#FFF',
    width: 85,
    transition: '0.1s linear',
    '&:hover': {
      backgroundColor: '#cc5542',
      transform: 'scale(1.05)'
    }
  },
  settingsButtonStyles: {
    color:'#0A369D',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 10,
    fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em'
  },
  emailStyles: {
    color:'#0A369D',
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  }
}));

export default function AccountList(props) {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root + " accountListWrapper"} aria-label="mailbox folders">
      {
        props.accountsData.map((accountInfo, i) => {
          return (
            <div className="accountLink" key={accountInfo.account_id}>
              <ListItem button>
                <Link className={classes.emailStyles} to={{pathname: '/accountHomePage', state:{account: accountInfo}}}>
                  {accountInfo.primary_email}
                </Link>
                <Button variant="contained" className={accountInfo.isActive ? classes.buttonActive : classes.buttonInactive}>{accountInfo.isActive ? "Active" : "Inactive"}</Button>
                <Link variant="contained" className={classes.settingsButtonStyles} to={{pathname: '/settingsPage', state:{account: accountInfo}}}>Settings</Link>
              </ListItem>
              <Divider className="accountLinkDivider" />
            </div>
          )
        })
      }
    </List>
  );
}