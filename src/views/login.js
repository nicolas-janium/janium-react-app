import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardActions, CardContent, Button, TextField, Checkbox, FormControlLabel }  from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch, Redirect, useHistory, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 325,
    maxWidth: 375,
    paddingBottom: 20,
    boxshadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  },
  pageWrapper: {
  	background: '#597081'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
    // signup values
    signUpFirstname: "",
    signUpLastName: "",
    title: "",
    company: "",
    accountAdminEmail: "",
    signUpEmail: "",
    signUpPassword: "",
    signUpPasswordConfirm: ""
  });

  //TODO: create method to hanle signup once axios calls are setup 
  const handleSignUpState = (event) => {
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

  const history = useHistory();
  const handleSignIn = () => { 
    let path = `/accounts`; 
    // do an api call to /auth/api/login??
    // get back an account id
    let params = {
      username: state.username,
      password: state.password
    }
    // api.signIn(params).then((response) => {
      props.setAccountInfo({
        accountId: 'account1234',
        isSignedIn: true,
      });
    // }).catch(() => {
      // do something else
    // });
    history.push(path);
  }

  const handleSignUp = () => {
    let path = `/accounts`; 
    // do an api call to /auth/api/login??
    // get back an account id
    let params = {
      username: state.signUpEmail,
      password: state.signUpPassword
    }
    // api.signUp(params).then((response) => {

      //set this so the Apps.js can handle the state and props info getting passes
      props.setAccountInfo({
        accountId: 'account1234',
        isSignedIn: true,
      });

    // }).catch(() => {
      // do something else
    // });
    history.push(path);
  }

  return (
  	<div className={classes.pageWrapper + " d-flex justify-content-center align-items-center h-100"}>
      {
        state.signUp ?
        <Card className={classes.root} variant="outlined">
          <CardHeader className="text-center" titleTypographyProps={{variant:'h5'}} title="Sign Up for Janium" />
          <CardContent className="d-flex flex-column align-items-center">
            <TextField className={classes.inputFields} onChange={handleTextChange} label="signUpFirstname" type="text" variant="outlined" name="username" value={state.signUpFirstname} />
            <TextField className={classes.inputFields} onChange={handleTextChange} label="signUpLastName" type="text" variant="outlined" name="username" value={state.signUpLastName} />
            <TextField className={classes.inputFields} onChange={handleTextChange} label="title" type="text" variant="outlined" name="username" value={state.title} />
            <TextField className={classes.inputFields} onChange={handleTextChange} label="company" type="text" variant="outlined" name="username" value={state.company} />
            <TextField className={classes.inputFields} onChange={handleTextChange} label="accountAdminEmail" type="text" variant="outlined" name="username" value={state.accountAdminEmail} />
            <TextField className={classes.inputFields} onChange={handleTextChange} label="signUpEmail" type="text" variant="outlined" name="username" value={state.signUpEmail} />
            <TextField
              className={classes.inputFields}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              name="signUpPassword"
              onChange={handleTextChange}
              value={state.signUpPassword}
            />
            <TextField
              className={classes.inputFields}
              id="outlined-password-input"
              label="Re-confirm Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              name="signUpPasswordConfirm"
              onChange={handleTextChange}
              value={state.signUpPasswordConfirm}
            />

          </CardContent>
          <CardActions className={classes.buttonWrapper}>
            <Button onClick={handleSignUpState} variant="contained" className={classes.buttonClasses}>SIGN UP</Button>
          </CardActions>
        </Card>
        :
        <Card className={classes.root} variant="outlined">
          <CardHeader className="text-center" titleTypographyProps={{variant:'h5'}} title="Log in to Janium" />
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
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </CardContent>
          <CardActions className={classes.buttonWrapper}>
            <Button onClick={handleSignIn} variant="contained" className={classes.buttonClasses}>Login</Button>
          </CardActions>
          <hr className="w-75"/>
          <p className="w-100 text-center">Don't have an account? <Link variant="body2" onClick={handleSignUpState}>Sign up</Link></p>
        </Card>
      }
  		
    </div>
  );
}