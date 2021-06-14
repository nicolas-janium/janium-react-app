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
        margin: "0 auto",
        background: "#74c69d",
        color: "#FFF",
        '&:focus': {
            outline: "unset"
        },
        '&:hover': {
            background: "#63bf91",
            boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
        }
    }
}));

export default function CampaignMessaging(props) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.messagesContainer + " tableBoxShadow"}>
                <Typography variant="h6" gutterBottom>
                    Step 1: LinkedIn Connection (Initiated by Ulinc) - Day 0
                </Typography>
                <Typography variant="caption" gutterBottom className="w-75 mb-4">
                    Janium is engineered to trigger off of actions that are inititated in Ulinc. Create a 1-step connector
                    campaign in Ulinc and then associate this Janium campaign to that Ulinc campaign on the contacts
                    tab (to the left). Once associated, Janium will take care of the rest of the steps after connection.
                </Typography>

                <LinkedInMessageDiv stepTitle="Step 2: Linkedin Welcome Message" placeholderText="Enter LinkedIn Welcome Message text here..." />
                <br />
                <EmailMessageDiv stepTitle="Step 3: Email Follow-up #1" emailSubject="Email #1 Subject" placeholderText="Enter Email Follow-up #1 message text here..." />
                <br />
                <LinkedInMessageDiv stepTitle="Step 4: Linkedin Follow-up #1" placeholderText="Enter LinkedIn Follow-up #1 message text here..." />
                <br />
                <EmailMessageDiv stepTitle="Step 5: Email Follow-up #2" emailSubject="Email #2 Subject" placeholderText="Enter Email Follow-up #2 message text here..." />
                <br />
                <LinkedInMessageDiv stepTitle="Step 6: Linkedin Follow-up #2" placeholderText="Enter LinkedIn Follow-up #2 message text here..."/>
                <br />
                <EmailMessageDiv stepTitle="Step 7: Email Follow-up #3" emailSubject="Email #3 Subject" placeholderText="Enter Email Follow-up #3 message text here..." />
                <br />
                <Button variant="contained" color="primary" className={classes.buttonClass + " mt-3"}>
                    Save Campaign
                </Button>
            </div>
        </div>
    );
}