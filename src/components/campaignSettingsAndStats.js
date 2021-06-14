import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Button, Link, FormControl, InputLabel, Select, MenuItem }  from '@material-ui/core';
import { CommunicationStatsTable } from "../components";
const useStyles = makeStyles((theme) => ({
    root: {
    },
    messagesContainer: {
        background: "linear-gradient(#74C69D, #FFF)",
        marginTop: 20,
        borderRadius: 7,
        padding: "10px 8px",
        display: "flex",
        flexDirection: "column",
        maxWidth: 1250,
        margin: "0 auto"
    },
    buttonClass: {
        width: "fit-content",
        background: "#ff8f80",
        color: "#FFF",
        fontWeight: "400",
        textTransform: "capitalize",
        "&:hover": {
            background: "#ff6a57"
        }
    },
    secondaryButton: {
        background: "#74C69D",
        color: "#FFF",
        "&:hover": {
            background: "#63bf91"
        }
    }
}));



export default function CampaignSettingsAndStats(props) {
    const classes = useStyles();

    const [campaign, setCampaign] = React.useState('');

    const handleChange = (event) => {
        setCampaign(event.target.value);
    };

    return (
        <div>
            <div className="w-50">
                <div className={"d-flex flex-column"}>
                    <Typography variant="h6" gutterBottom>
                        Delete Campaign
                    </Typography>
                    <Typography variant="body2" gutterBottom className="ml-3">
                        All Janium activity for this campaign will behalted if this campaign is deleted.
                    </Typography>
                    <Button variant="contained" color="primary" className={classes.buttonClass + " mt-3 ml-3"}>
                        Delete Campaign
                    </Button>
                </div>
                <div className={"d-flex flex-column mt-3"}>
                    <Typography variant="h6" gutterBottom>
                        Alternate Email
                    </Typography>
                    <Typography variant="body2" gutterBottom className="ml-3">
                        You are currently using ({props.campaignSettingsData.email_config_from_address}) to send emails for this
                        campaign. If you would like to use a different
                        email, select the correct one from the list
                        below.
                    </Typography>
                    <FormControl className={classes.formControl + " ml-3"}>
                        <InputLabel id="demo-simple-select-label">Alternate Email</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={campaign}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" color="primary" className={classes.buttonClass + " " + classes.secondaryButton + " mt-3 ml-3"}>
                        Use this Email
                    </Button>
                    <Typography variant="body2" gutterBottom className="mt-3 ml-3">
                        You may also add another email to your account <Link to="/">here</Link>.
                    </Typography>
                </div>
            </div>
            <div className="w-50">
                <CommunicationStatsTable accountsData={[]}/>
            </div>
        </div>
    );

}