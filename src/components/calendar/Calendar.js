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
                title: "event 1",
                start: "2021-07-01T14:30:00",
                end: "2021-07-01T15:30:00",
                url: "http://google.com",
              },
              { title: "event 2", date: "2021-07-07" },
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
