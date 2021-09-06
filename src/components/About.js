import React from "react";
import { Grid, Typography, Divider, Box } from "@material-ui/core";

const About = () => {
  return (
    <div id="About">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={10}>
          <Typography style={{ marginBottom: 10 }} variant="h1">
            <Box fontWeight="fontWeightBold">About</Box>
          </Typography>
          <Grid item container justifyContent="center">
            <Grid item lg={1} xl={2} />
            <Grid item lg={10} xl={8}>
              <Typography variant="body1">
                The purpose of the Miami University Blockchain Club (MUBC) is to
                actively facilitate understanding of Blockchain technology
                through Conferences, Hackathons, Research and Development,
                social events, and professional guest speakers that explain how
                Blockchain will affect different industries. MUBC serves to grow
                the understanding of Blockchain technology and its potential and
                current impact on a global and personal scale. MUBC aims to help
                members develop valuable connections in the Blockchain space
                while encouraging members to pursue Blockchain-based interests,
                internships, and careers. We believe in building future leaders
                by connecting with the Blockchain Ecosystem in order to foster
                valuable innovation. We aim to be the best Blockchain Club in
                the Midwest!
              </Typography>
            </Grid>
            <Grid item lg={1} xl={2} />
          </Grid>
          <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default About;
