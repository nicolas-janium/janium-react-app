import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    textFieldStyles: {
        background: "#FFF",
        borderRadius: 4,
        maxWidth: 90,
        "& .MuiOutlinedInput-root": {
            "& fieldset": { 
                border: "2px solid #6199a5"
            },
            '&:hover fieldset': {
                borderColor: '#548692 !important',
            },
            "&.Mui-focused fieldset": {
                borderColor: "#6199a5",
                outline: "unset"
            }
        }
    },
    textAreaStyles: {
        minWidth: 650,
        marginTop: "20px !important",
        borderRadius: 7,
        padding: "5px 8px",
        border: "2px solid #6199a5",
        "&:focus": {
            outline: "unset",
            border: "2px solid #6199a5 !important",
            boxShadow: "rgba(0, 0, 0, 0.1) 2px 2px 3px 0px inset, rgb(4, 20, 51) 0px 0px 0px 0px"
        }
    }
}));

export default function LinkedInMessageDiv(props) {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                {props.stepTitle}
            </Typography>
            <TextField className={classes.textFieldStyles} id="outlined-basic" label="LI Delay" variant="outlined" size="small" />
            <br />
            <TextareaAutosize className={classes.textAreaStyles} aria-label="LinkedIn Welcome Message" rowsMin={5} placeholder={props.placeholderText} />
        </div>
    );
}