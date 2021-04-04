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

export default function Login() {
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    rememberMe: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const history = useHistory();
  const routeChange = () => { 
    let path = `/accounts`; 
    history.push(path);
  }

  return (
  	<div className={classes.pageWrapper + " d-flex justify-content-center align-items-center h-100"}>
  		<Card className={classes.root} variant="outlined">
  			<CardHeader className="text-center" titleTypographyProps={{variant:'h5'}} title="Log in to Janium" />
  			<CardContent className="d-flex flex-column align-items-center">
  				<TextField className={classes.inputFields} label="Username" type="text" variant="outlined" />
  				<TextField
  					className={classes.inputFields}
  					id="outlined-password-input"
  					label="Password"
  					type="password"
  					autoComplete="current-password"
  					variant="outlined"
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
  				<Button onClick={routeChange} variant="contained" className={classes.buttonClasses}>Login</Button>
  			</CardActions>
{/*
  			<hr className="w-75"/>

  			<p className="w-100 text-center">Don't have an account? <Link variant="body2">Sign up</Link></p>*/}
  		</Card>
    </div>
  );
}