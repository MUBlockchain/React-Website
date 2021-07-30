import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Grid, Typography, Divider } from "@material-ui/core";

const Calendar = () => {
  return (
    <div id="Calendar">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container xs={10} justifyContent="center">
          <Typography style={{ marginBottom: 10 }} variant="h1">
            Calendar
          </Typography>
          <FullCalendar
            height="auto"
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              {
                title: "MegaFair",
                start: "2021-08-29",
              },
              {
                title: "Meet the B-Orgs",
                start: "2021-08-31T18:00:00",
              },
              {
                title: "Are NFTs the Next Tulip Mania?",
                start: "2021-09-08T19:00:00",
              },
              {
                title: "Course Week 1: Blockchain basics",
                start: "2021-09-15T18:00:00",
              },
              {
                title: "Bitcoin vs Ethereum: An origin story",
                start: "2021-09-15T19:00:00",
              },
              {
                title: "Week 2: Blockchain Networks",
                start: "2021-09-22T18:00:00",
              },
              {
                title: "The Institutional Risks of Managing Digital Assets",
                start: "2021-09-22T19:00:00",
              },
              {
                title: "Week 3: Blockchain Security",
                start: "2021-09-29T18:00:00",
              },
              {
                title: "Week 4: Smart Contracts",
                start: "2021-10-06T18:00:00",
              },
              {
                title:
                  "Week 5: Decentralized Autonomous Organizations and Governance",
                start: "2021-10-13T18:00:00",
              },
              {
                title: "Week 6: Tokens and NFTs",
                start: "2021-10-20T18:00:00",
              },
              {
                title: "Week 7: Token Economics",
                start: "2021-10-27T18:00:00",
              },
              {
                title: "Week 8: Bitcoin, Ethereum, Altcoins, and Stablecoins",
                start: "2021-11-03T18:00:00",
              },
              {
                title: "Week 9: Decentralized Finance (Defi)",
                start: "2021-11-10T18:00:00",
              },
              {
                title: "Week 10: Blockchain Use Cases",
                start: "2021-11-17T18:00:00",
              },
            ]}
            eventClick={function (info) {
              info.jsEvent.preventDefault(); // don't let the browser navigate

              if (info.event.url) {
                window.open(info.event.url);
              }
            }}
            eventColor="#c62828"
            eventDisplay="block"
            displayEventEnd={true}
          />
          <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Calendar;
