import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";

const CryptoCommittee = () => {
  return (
    <div id="Crypto Committee">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={10}>
          <Typography variant="h1">
            Cryptocurrency Investment Committee
          </Typography>
          <Typography variant="h3">
            First Student Run Cryptocurrency Investment Fund Launching Fall 2021
          </Typography>
          <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default CryptoCommittee;
