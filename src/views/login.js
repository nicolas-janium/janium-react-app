import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardActions, CardContent, Button, TextField, Checkbox, FormControlLabel }  from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import * as Api from "../api.js";

const useStyles = makeStyles({
  root: {
    minWidth: 325,
    maxWidth: 375,
    paddingBottom: 20,
    boxshadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  },
  wrapper: {
    minHeight: "100vh"
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  anchor: {
    color: '#007bff!important',
    cursor: 'pointer'
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
  }
});

export default function Login(props) {
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    signUp: false,
    rememberMe: false,
    username: "",
    password: "",
  });

  const [signUpData, setSignUpData] = React.useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    title: "",
    company: "",
    time_zone_code: "US/Mountain"
  });



  const showSignUp = (event) => {
    setState({
      ...state,
      signUp: !state.signUp
    });
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleTextChange = (event) => {
    setState({...state, [event.target.name]: event.target.value});
  }

  const handleSignUpTextChange = (event) => {
    setSignUpData({...signUpData, [event.target.name]: event.target.value});
  }

  const history = useHistory();
  const handleSignIn = () => { 

    let params = {
      username: state.username,
      password: state.password
    }

    Api.login(params, signInSuccess, signInFailed);
  }

  const signInSuccess = (response) => {
    let path = `/accounts`; 
    props.setAccountInfo({
      isSignedIn: true
    });
    
    history.push(path);
  }

  const signInFailed = () => {
    props.setAccountInfo({
      isSignedIn: false
    });
  }

  const handleSignUp = () => {
    let params = {
      username: signUpData.username,
      password: signUpData.password,
      first_name: signUpData.first_name,
      last_name: signUpData.last_name,
      title: signUpData.title,
      company: signUpData.company,
      time_zone_code: "US/Mountain"
    }

    Api.signUp(params, signUpSuccess, signUpFailed);
  }

  const signUpSuccess = (response) => {
    let path = `/`; 
    props.setAccountInfo({
      isSignedIn: false
    });

    alert('Sign up successful');
    showSignUp();
    
    history.push(path);
  }

  const signUpFailed = () => {
    props.setAccountInfo({
      isSignedIn: false
    });
  }

  const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) { 
      if (state.signUp) {
        handleSignUp();
      } else {
        handleSignIn();
      }
    } 
  }

  const backToLogin = () => {
    showSignUp();
  }

  return (
  	<div className={classes.wrapper + " d-flex justify-content-center align-items-center h-100"}>
      {
        state.signUp ?
        <Card className={classes.root + " tableBoxShadow"} variant="outlined">
          <CardHeader className="text-center" titleTypographyProps={{variant:'h5'}} title="Sign Up for Janium" />
          <CardContent className="d-flex flex-column align-items-center">
            <TextField className={classes.inputFields} onChange={handleSignUpTextChange} label="First Name" type="text" variant="outlined" name="first_name" value={signUpData.first_name} />
            <TextField className={classes.inputFields} onChange={handleSignUpTextChange} label="Last Name" type="text" variant="outlined" name="last_name" value={signUpData.last_name} />
            <TextField className={classes.inputFields} onChange={handleSignUpTextChange} label="Title" type="text" variant="outlined" name="title" value={signUpData.title} />
            <TextField className={classes.inputFields} onChange={handleSignUpTextChange} label="Company" type="text" variant="outlined" name="company" value={signUpData.company} />
            {/* <TextField className={classes.inputFields} onChange={handleTextChange} label="accountAdminEmail" type="text" variant="outlined" name="accountAdminEmail" value={signUpData.accountAdminEmail} /> */}
            <TextField className={classes.inputFields} onChange={handleSignUpTextChange} label="Username (E-mail)" type="text" variant="outlined" name="username" value={signUpData.username} />
            <TextField
              className={classes.inputFields}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              name="password"
              onChange={handleSignUpTextChange}
              onKeyUp={enterPressed}
              value={signUpData.password}
            />
            {/* <TextField
              className={classes.inputFields}
              id="outlined-password-input"
              label="Re-confirm Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              name="signUpPasswordConfirm"
              onChange={handleSignUpTextChange}
              value={state.signUpPasswordConfirm}
            /> */}

          </CardContent>
          <CardActions className={classes.buttonWrapper + " d-flex flex-column"}>
            <Button onClick={handleSignUp} variant="contained" className={classes.buttonClasses + " mb-3"}>SIGN UP</Button>
            <a className={classes.anchor} onClick={backToLogin}>Back to login</a>
          </CardActions>
        </Card>
        :
        <Card className={classes.root + " tableBoxShadow"} variant="outlined">
          <CardHeader className="text-center" titleTypographyProps={{variant:'h5'}} title="Login to Janium" />
          <CardContent className="d-flex flex-column align-items-center">
            <TextField className={classes.inputFields} onChange={handleTextChange} label="Username" type="text" variant="outlined" name="username" value={state.username} />
            <TextField
              className={classes.inputFields}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              name="password"
              onChange={handleTextChange}
              onKeyUp={enterPressed}
              value={state.password}
                />
            <FormControlLabel
              control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="rememberMe"
                color="primary"
              />
              }
              label="Remember Me"
            />
            {/* <Link href="#" variant="body2">
              Forgot password?
            </Link> */}
          </CardContent>
          <CardActions className={classes.buttonWrapper}>
            <Button onClick={handleSignIn} variant="contained" className={classes.buttonClasses}>Login</Button>
          </CardActions>
          <hr className="w-75"/>
          <p className="w-100 text-center">Don't have an account? <a className={classes.anchor} variant="body2" onClick={showSignUp}>Sign up</a></p>
        </Card>
      }
  		
    </div>
  );
}