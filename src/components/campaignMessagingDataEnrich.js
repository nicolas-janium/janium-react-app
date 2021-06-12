import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Button }  from '@material-ui/core';
import { EmailMessageDiv, LinkedInMessageDiv } from "../components";
const useStyles = makeStyles((theme) => ({
    root: {
    },
    messagesContainer: {
        background: "linear-gradient(#f3f3f6, #FFF)",
        marginTop: 20,
        borderRadius: 7,
        padding: "10px 8px",
        display: "flex",
        flexDirection: "column",
        maxWidth: 1250,
        margin: "0 auto"
    },
    buttonClass: {
        width: "60%",
        margin: "0 auto"
    }
}));

export default function CampaignMessagingDataEnrich(props) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.messagesContainer + " tableBoxShadow"}>
                <Typography variant="h6" gutterBottom>
                    Step 1: LinkedIn Connection Request (Initiated by Ulinc) - Day 0
                </Typography>
                <Typography variant="caption" gutterBottom>
                    Janium is engineered to trigger off of actions that are inititated in Ulinc. Create a 1-step connector
                    campaign in Ulinc and then associate this Janium campaign to that Ulinc campaign on the contacts tab
                    (to the left). Once associated, Janium will take care of the rest of the steps after the connection request
                    and will produce verified contact data for a portion of those contacts.
                </Typography>

                <EmailMessageDiv leftSide={true} stepTitle="Step 2: Email Follow-up #1" emailSubject="Email Follow-up #1 Subject" placeholderText="Enter Email Follow-up #1 message text here..." />
                <br />
                <EmailMessageDiv stepTitle="Step 3: Email Follow-up #2" emailSubject="Email Follow-up #2 Subject" placeholderText="Enter Email Follow-up #2 message text here..." />
                <br />
                <EmailMessageDiv leftSide={true} stepTitle="Step 4: Email Follow-up #3" emailSubject="Email Follow-up #3 Subject" placeholderText="Enter Email Follow-up #3 message text here..." />
                <br />
                <EmailMessageDiv stepTitle="Step 5: Email Follow-up #4" emailSubject="Email Follow-up #4 Subject" placeholderText="Enter Email Follow-up #4 message text here..." />
                <br />
                <Button variant="contained" color="primary" className={classes.buttonClass + " mt-3"}>
                    Save Campaign
                </Button>
            </div>
        </div>
    );
}