import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, TextField } from '@material-ui/core';
// import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import PropTypes from 'prop-types';
import { Translate } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    divWrapperRight: {
        minWidth: 650,
        marginLeft: "auto"
    },
    divWrapperLeft: {
        minWidth: 650,
        marginRight: "auto"
    },
    textFieldStyles: {
        background: "#FFF",
        borderRadius: 4,
        maxWidth: 90,
        "& .MuiOutlinedInput-root": {
            "& fieldset": { 
                border: "2px solid #74c69d"
            },
            '&:hover fieldset': {
                borderColor: '#60be8f !important',
            },
            "&.Mui-focused fieldset": {
                borderColor: "#74c69d",
                outline: "unset"
            }
        }
    },
    textAreaStyles: {
        minWidth: 400,
        marginTop: "20px !important",
        borderRadius: 7,
        padding: "5px 8px",
        "&:focus": {
            outline: "unset",
            border: "unset"
        }
    },
    emailSubjectStyles: {
        minWidth: 275
    },
    richTextEditor: {
        background: "#FFF"
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: `yellow !important`,
        }
    }
}));

export default function EmailMessageDiv(props) {
    const classes = useStyles();

    return (
        <div className={props.leftSide ? classes.divWrapperLeft : classes.divWrapperRight}>
            <Typography variant="h6" gutterBottom>
                {props.stepTitle}
            </Typography>
            <div className="d-flex justify-content-between">
                <TextField 
                    className={classes.textFieldStyles + " " + classes.emailSubjectStyles} 
                    id="outlined-basic" disableUnderline={true} 
                    label={props.emailSubject} variant="outlined" 
                    size="small" 
                />
                <TextField className={classes.textFieldStyles} id="outlined-basic" label="EM Delay" variant="outlined" size="small" />
            </div>

            <CKEditor
                editor={ BalloonEditor }
                config={{placeholder: props.placeholderText}}
                // onReady={ editor => {
                //     // You can store the "editor" and use when it is needed.
                //     console.log( 'Editor is ready to use!', editor );
                // } }
                // onChange={ ( event, editor ) => {
                //     const data = editor.getData();
                //     console.log( { event, editor, data } );
                // } }
                // onBlur={ ( event, editor ) => {
                //     console.log( 'Blur.', editor );
                // } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
                onClick={ (event, editor) => {
                    const data = editor.getData();
                }}
            />
        </div>
    );
}