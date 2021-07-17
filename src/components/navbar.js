import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Logo from '../assets/logo.png';
import {BrowserRouter as Router, Route, Redirect, useHistory, Link } from "react-router-dom";
import * as Api from "../api.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: "999",
    background: "#74c69d"
  },
  appBar: {
    // background: "#0A369D"
    background: "#74c69d",
    
  },
  menuWrapper: {
    justifyContent: "flex-end"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxHeight: 80
  }
}));

export default function Navbar(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();
  const routeChange = () => { 
    let path = `/accounts`; 
    history.push(path);
  }

  const logOutClickHandler = () => {
    Api.logOut(logOutSuccess, logOutFailed);
  }

  const logOutSuccess = () => {
    let path = `/`; 

    props.setAccountInfo({
      isSignedIn: false
    });
    
    history.push(path);

    setAnchorEl(null);
  }

  const logOutFailed = (error) => {
    console.log('logout failed', error)
  }



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.menuWrapper + " w-100 pl-0 py-2"}>
          <img className={classes.logo + " mr-auto ml-3"} src={Logo} alt="Logo" />

          <MenuItem onClick={routeChange}>Account</MenuItem>
          {/* <MenuItem onClick={handleClose}>Support</MenuItem> */}
          <MenuItem onClick={logOutClickHandler}>Logout</MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}
