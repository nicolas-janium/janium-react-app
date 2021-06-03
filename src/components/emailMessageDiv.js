import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    textFieldStyles: {
        background: "#FFF",
        borderRadius: 4,
        maxWidth: 90
    },
    textAreaStyles: {
        minWidth: 400,
        marginTop: "20px !important",
        borderRadius: 7,
        padding: "5px 8px",
        "&:focus": {
            outline: "unset"
        }
    }
}));

export default function EmailMessageDiv(props) {
    const classes = useStyles();
    
    return (
        <div>
            <Typography variant="subtitle1" gutterBottom>
                {props.stepTitle}
            </Typography>
            <br />
            <div>
                <TextField className={classes.textFieldStyles} id="outlined-basic" label="LI Delay" variant="outlined" size="small" />
                <TextField className={classes.textFieldStyles} id="outlined-basic" label="LI Delay" variant="outlined" size="small" />
            </div>
        </div>
    );
}