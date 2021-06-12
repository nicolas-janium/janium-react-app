import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Logo from '../assets/logo2.svg';
import {BrowserRouter as Router, Route, Redirect, useHistory, Link } from "react-router-dom";
import * as Api from "../api.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: "999"
  },
  appBar: {
    background: "#0A369D"
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
        <Toolbar className={classes.menuWrapper + " w-100 pl-0"}>
          <img className={classes.logo} src={Logo} alt="Logo" />

          <MenuItem onClick={routeChange}>Account</MenuItem>
          {/* <MenuItem onClick={handleClose}>Support</MenuItem> */}
          <MenuItem onClick={logOutClickHandler}>Logout</MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}
