import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardHeader, Button, Typography, Divider, Modal, Backdrop, Fade, TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import { AccountList } from "../components";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: "calc(100vw - 35%)"
  },
  cardHeader: {
    background: "#74C69D",
    boxshadow: "-3px -5px 6px 9px rgb(0 0 0 / 20%)" 
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  actionButton: {
    color: "#0A369D"
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
    fontSize: 14,
    textAlign: 'center'
  }
}));

export default function AccountsCard(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    termsAcceptance: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Card className={classes.root + " m-auto tableBoxShadow"}>
        <CardHeader 
          className={classes.cardHeader} 
          boxshadow={3}
          title="Accounts"
        />
        <CardContent>
          {/*<Typography variant="body2" component="p">
            There are no accounts yet.
          </Typography>*/}

          {/* Put a list here if there is data - pass data to the accountListItem component and build out list items useing .map() */}
          {
            props.accountsData && props.accountsData.length ?
            <AccountList accountsData={props.accountsData} />
            :
            <Typography variant="body2" component="p">
              There are no accounts yet.
            </Typography>

          }
        </CardContent>
        <Divider light />
        <CardActions className="justify-content-center">
          <Button className={classes.actionButton} size="small" onClick={handleOpen}>Add Ulinc Account</Button>
        </CardActions>
      </Card>

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
              <CardHeader className="text-center" titleTypographyProps={{variant:'h5'}} title="Account Setup" />
              <CardContent className="d-flex flex-column align-items-center">
                <TextField className={classes.inputFields} label="LinkedIn Login Email*" type="text" variant="outlined" size="small" />
                <TextField className={classes.inputFields} label="Ulinc Login Email*" type="text" variant="outlined" size="small" /> 
                <TextField
                  className={classes.inputFields}
                  id="outlined-password-input"
                  label="Ulinc Login Password*"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  size="small"
                />
                <FormControlLabel
                  control={
                  <Checkbox
                    checked={state.checked}
                    onChange={handleChange}
                    name="termsAcceptance"
                    color="primary"
                  />
                  }
                  label={<Typography className={classes.checkboxText}>Janium can use my Ulinc credentials to access my account</Typography>}
                />
              </CardContent>
              <CardActions className={classes.buttonWrapper}>
                <Button variant="contained" className={classes.buttonClasses}>Next</Button>
              </CardActions>

              <span className={classes.requiredFields}>*Required Fields</span>
            </Card>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}



