import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Box, Paper, Tabs, Tab, Card, CardHeader, CardActions, CardContent, Button, TextField, Checkbox, FormControlLabel, Link, Select, FormControl, MenuItem }  from '@material-ui/core';
import { EmailMessageDiv, LinkedInMessageDiv } from "../components";
const useStyles = makeStyles((theme) => ({
    root: {
    },
    messagesContainer: {
        background: "linear-gradient(#74C69D, #FFF)",
        marginTop: 20,
        borderRadius: 7,
        padding: "10px 8px",
        display: "flex",
        flexDirection: "column"
    }
}));

export default function CampaignMessaging(props) {
    const classes = useStyles();

    return (
        <div>
            <div className="w-50">
                <Typography variant="h6" gutterBottom>
                    Step 1: LinkedIn Connection (Initiated by Ulinc) - Day 0
                </Typography>
                <Typography variant="caption" gutterBottom>
                    Janium is engineered to trigger off of actions that are inititated in Ulinc. Create a 1-step connector
                    campaign in Ulinc and then associate this Janium campaign to that Ulinc campaign on the contacts
                    tab (to the left). Once associated, Janium will take care of the rest of the steps after connection.
                </Typography>
            </div>
            <div className={classes.messagesContainer}>
                <LinkedInMessageDiv stepTitle="Step 2: Linkedin Welcome Message" placeholderText="Enter LinkedIn Welcome Message text here..." />
                <br />
                <EmailMessageDiv stepTitle="Step 3: Email Follow-up #1" placeholderText="Enter Email Follow-up #1 message text here..." />
                <br />
                <LinkedInMessageDiv stepTitle="Step 4: Linkedin Follow-up #1" placeholderText="Enter LinkedIn Follow-up #1 message text here..." />
                <br />
                <EmailMessageDiv stepTitle="Step 5: Email Follow-up #2" placeholderText="Enter Email Follow-up #2 message text here..." />
                <br />
                <LinkedInMessageDiv stepTitle="Step 6: Linkedin Follow-up #2" placeholderText="Enter LinkedIn Follow-up #2 message text here..."/>
                <br />
                <EmailMessageDiv stepTitle="Step 7: Email Follow-up #3" placeholderText="Enter Email Follow-up #3 message text here..." />
                <br />
            </div>
        </div>
    );
}