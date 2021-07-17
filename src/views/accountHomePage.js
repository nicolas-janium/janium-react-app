import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography  }  from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ConnectorTable, NewConnectionsTable, NewResponsesTable, PhoneTaskTable } from "../components";

const useStyles = makeStyles({
  root: {
    background: "#597081"
  },
  accordionOne: {
    maxWidth: 900,
    margin: "auto"
  },
  accordionOther: {
    maxWidth: 1225,
    margin: "auto"
  },
  heading: {
    color: "#6d9eeb"
  }
});

export default function AccountHomePage(props) {
  const classes = useStyles();

  // const [state, setState] = React.useState({
  //   fetchedData: null
  // })
  

  console.log('homepage: ', props.accountInfo);

  return (
    
  	<div className="h-100 mb-5">
      <br />
      <ConnectorTable campaignsData={props.accountInfo.janium_campaigns}/>
      <br />
      <Accordion className={classes.accordionOther + " accordionStyles"}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className={classes.heading}>New Connections</Typography>
        </AccordionSummary>
        <AccordionDetails className="d-flex flex-column">
          <Typography className="mb-2 pl-3">
            Click the name of each new connection to visit their LinkedIn profile. Then, while you are there, please follow through with a custom welcome message for those who are qualified.
          </Typography>
          <Typography className="mb-2 pl-3">
            Take a minute to look at each prospect for some things to work into your custom welcome message—peruse through their profile, work history, posts, LinkedIn company page, and their website to gather intel.
          </Typography>
          <Typography className="d-flex pl-3">
            For those who aren’t qualified, click the “DQ” link next to their name to remove them from the campaign and any further follow-up messaging. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <NewConnectionsTable connectionData={props.accountInfo.new_connections} />
      <br />
      <Accordion className={classes.accordionOther + " accordionStyles"}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className={classes.heading}>New Messages</Typography>
        </AccordionSummary>
        <AccordionDetails className="d-flex flex-column">
          <Typography className="mb-2 pl-3">
          Below are your new LinkedIn + Email responses. The “preferred” way to reply to these inbound LinkedIn messages is to visit your Ulinc LinkedIn inbox where their status may be tracked (Talking, Replied, No Interest, Later, etc.). Email responses for the campaign live in your email inbox.
          </Typography>
          <Typography className="d-flex pl-3">
          The campaign is currently halted for each of these responders—it is your job to take things from here. Review each inbound message, and click the “Continue” button in the table below if you want the prospect to return to the campaign. This is generally applicable for those who responded with a “thanks”, “sure”, “thumbs up”, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <NewResponsesTable responseData={props.accountInfo.new_messages} />
      <br />
      <Accordion className={classes.accordionOther + " accordionStyles"}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className={classes.heading}>Phone Tasks</Typography>
        </AccordionSummary>
        <AccordionDetails className="d-flex flex-column">
          <Typography className="mb-2 pl-3">
          The prospects below have reached the end of the campaign without responding and are primed to receive a call from you. 
          </Typography>
          <Typography className="d-flex pl-3">
          Click on their name, browse their profile, review the messaging that you may have sent in the welcome message, and give them a call. If they don’t answer your call, leave a voicemail (90% get listened to) mentioning that you're following up on the email or LinkedIn message that you sent a couple of days ago.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <PhoneTaskTable phoneTaskData={props.accountInfo.vm_tasks} />
    </div>
  );
}

