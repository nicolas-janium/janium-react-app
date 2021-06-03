import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField } from '@material-ui/core';
// import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    divWrapper: {
        minWidth: 550,
        marginLeft: "auto"
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
    },
    emailSubjectStyles: {
        minWidth: 200
    },
    richTextEditor: {
        background: "#FFF"
    }
}));

export default function EmailMessageDiv(props) {
    const classes = useStyles();

    return (
        <div className={classes.divWrapper}>
            <Typography variant="subtitle1" gutterBottom>
                {props.stepTitle}
            </Typography>
            <div className="d-flex justify-content-between">
                <TextField className={classes.textFieldStyles + " " + classes.emailSubjectStyles} id="outlined-basic" label={props.emailSubject} variant="outlined" size="small" />
                <TextField className={classes.textFieldStyles} id="outlined-basic" label="LI Delay" variant="outlined" size="small" />
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