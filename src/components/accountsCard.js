import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardHeader, Button, Typography, Divider } from '@material-ui/core';
import { shadows } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "calc(100vw - 35%)"
  },
  cardHeader: {
    background: "#74C69D",
    boxShadow: "-3px -5px 6px 9px rgb(0 0 0 / 20%)"
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  actionButton: {
    color: "#0A369D"
  }
});

export default function AccountsCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root + " m-auto"}>
      <CardHeader 
        className={classes.cardHeader} 
        boxShadow={3}
        title="Accounts"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          There are no accounts yet.
        </Typography>
      </CardContent>
      <Divider light />
      <CardActions className="justify-content-center">
        <Button className={classes.actionButton} size="small">Add Janium Account</Button>
      </CardActions>
    </Card>
  );
}
