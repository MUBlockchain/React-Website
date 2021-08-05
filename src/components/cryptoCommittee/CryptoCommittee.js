import React from "react";
import { Grid, Typography, Divider, Box } from "@material-ui/core";

import blockchainImage from "./blockchain.jpeg";

const CryptoCommittee = () => {
  return (
    <div id="Crypto Committee">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={10}>
          <Typography style={{ marginBottom: 10 }} variant="h1">
            <Box fontWeight="fontWeightBold">
              Cryptocurrency Investment Committee
            </Box>
          </Typography>
          <Typography variant="h3" style={{ marginBottom: 10 }}>
            First Student Run Cryptocurrency Investment Fund Launching Fall 2021
          </Typography>
          <img
            src={blockchainImage}
            style={{ width: "80%", height: "auto" }}
            alt="Blockchain"
          ></img>
          <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default CryptoCommittee;
