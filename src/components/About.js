import React from "react";

import { Grid, Typography } from "@material-ui/core";

const About = () => {
  return (
    <div id="About">
      <Grid item container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={10}>
          <Typography variant="h1">About</Typography>
          <Typography variant="body1">
            The purpose of the Miami University Blockchain Club (MUBC) is to
            actively facilitate understanding of Blockchain technology through
            Conferences, Hackathons, Research and Development, social events,
            and professional guest speakers that explain how Blockchain will
            affect different industries. MUBC serves to grow the understanding
            of Blockchain technology and its potential and current impact on a
            global and personal scale. MUBC aims to help members develop
            valuable connections in the Blockchain space while encouraging
            members to pursue Blockchain-based interests, internships, and
            careers. We believe in building future leaders by connecting with
            the Blockchain Ecosystem in order to foster valuable innovation. We
            aim to be the best Blockchain Club in the Midwest!
          </Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default About;
