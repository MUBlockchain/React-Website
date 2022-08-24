import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import { Grid, Typography, Divider, Hidden, Box } from "@material-ui/core";

import "./style.css";

const Calendar = (props) => {
  const { darkMode } = props;
  const events = [
    {
      title: "MUBC 101 Blockchain basics",
      start: "2022-02-16T18:00:00",
    },
    {
      title: "Polygon How to Build a dApp Workshop",
      start: "2022-02-22T19:00:00",
    },
    {
      title: "MUBC 101 Blockchain Networks",
      start: "2022-02-23T18:00:00",
    },
    {
      title:
        "Institutional Crypto Sales & Trading with Hanson Birringer - Associate @GenesisTrading: Institutional Sales",
      start: "2022-02-23T19:00:00",
    },
    {
      title: "MUBC 101 Blockchain Security",
      start: "2022-03-02T18:00:00",
    },
    {
      title: "MUBC 101 Smart Contracts",
      start: "2022-03-09T18:00:00",
    },
    {
      title: "An Introduction to Crypto Lending and Borrowing with Celsius",
      start: "2022-03-09T19:00:00",
    },
    {
      title: "MUBC 101 Decentralized Autonomous Organizations and Governance",
      start: "2022-03-16T18:00:00",
    },
    {
      title:
        "Fireside Chat w/ Mark Cialone - Chief of Staff to the CEO at Coinbase",
      start: "2022-03-16T19:00:00",
    },
    {
      title: "MUBC 101 Token Economics",
      start: "2022-03-30T18:00:00",
    },
    {
      title: "Ripple Intro to Governance",
      start: "2022-03-30T19:00:00",
    },
    {
      title: "Virtual Roundtable with Congresman Anthony Gonzalez",
      start: "2022-04-01T15:00:00",
    },
    {
      title: "MUBC 101 NFTs/Metaverse",
      start: "2022-04-06T18:00:00",
    },
    {
      title: "MUBC 101 Bitcoin, Ethemeum, Altcoins, and Stablecoins",
      start: "2022-04-13T18:00:00",
    },
    {
      title: "MUBC 101 Decentralized Finance (Defi)",
      start: "2022-04-20T18:00:00",
    },
    {
      title: "MUBC 101 L2s and Use Cases",
      start: "2022-04-27T18:00:00",
    },
    {
      title: "MUBC 101 Blockchain 101",
      start:"2022-09-07T18:00:00"
    },
    {
      title: "MUBC 101 Blockchain Network",
      start:"2022-09-14T18:00:00"
    },
    {
      title: "MUBC 101 Decentralized Finance: DeFi Dad",
      start:"2022-09-21T18:00:00"
    },
    {
      title: "MUBC 101 Smart Contracts",
      start:"2022-09-28T18:00:00"
    },
    {
      title: "MUBC 101 DAO and Governance",
      start:"2022-10-05T18:00:00"
    },
    {
      title: "MUBC 101 Security/Infrastructure: Blockdaemon",
      start:"2022-10-12T18:00:00"
    },
    {
      title: "MUBC 101 Web3 Development: Ryan Strawser",
      start:"2022-11-02T18:00:00"
    },
    {
      title: "MUBC 101 Tokenomics: Zac McKenna",
      start:"2022-10-19T18:00:00"
    },
    {
      title: "MUBC 101 Current Events in Crypto: Jason Yanowitz",
      start:"2022-10-26T18:00:00"
    },
    {
      title: "MUBC 101 On-Chain Data Analysis",
      start:"2022-11-09T18:00:00"
    },
    {
      title: "Megafair",
      start:"2022-08-28T11:00:00"
    },
    {
      title: "Info Night",
      start: "2022-08-31T18:00:00"
    },
    {
      title:"Meet the B Orgs",
      start:"2022-08-30T18:00:00"
    },
  ];

  const eventClick = function (info) {
    info.jsEvent.preventDefault();

    if (info.event.url) {
      window.open(info.event.url);
    }
  };

  return (
    <div id="Calendar">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={10}>
          <Typography style={{ marginBottom: 10 }} variant="h1">
            <Box fontWeight="fontWeightBold">Calendar</Box>
          </Typography>
          <Hidden xsDown={true}>
            <FullCalendar
              dayHeaderClassNames={darkMode ? "fc-widget-header" : ""}
              height="auto"
              plugins={[dayGridPlugin]}
              initialView={"dayGridMonth"}
              events={events}
              eventClick={eventClick}
              eventColor="#c62828"
              eventDisplay="block"
              displayEventEnd={true}
            />
          </Hidden>
          <Hidden smUp={true}>
            <FullCalendar
              height="auto"
              plugins={[listPlugin]}
              initialView={"listMonth"}
              events={events}
              eventClick={eventClick}
              eventColor="#c62828"
              eventDisplay="block"
              displayEventEnd={true}
            />
          </Hidden>
          <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Calendar;
