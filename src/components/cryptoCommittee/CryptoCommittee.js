import React from "react";
import {
  Grid,
  Typography,
  Divider,
  Box,
  Button,
  Link,
} from "@material-ui/core";

import cifLogo from "./CIF_Logo.png";

const CryptoCommittee = () => {
  return (
    <div id="Crypto Committee">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={10}>
          <Typography style={{ marginBottom: 10 }} variant="h1">
            <Box fontWeight="fontWeightBold">
              Cryptocurrency Investment Fund
            </Box>
          </Typography>
          <Typography variant="h3" style={{ marginBottom: 10 }}>
            First Student Run Cryptocurrency Investment Fund Launching Fall 2021
          </Typography>
          <img
            src={cifLogo}
            style={{ width: "80%", height: "auto" }}
            alt="CIC Logo"
          ></img>
          <Grid item container justifyContent="center">
            <Button
              style={{ marginTop: 20 }}
              variant="contained"
              color="primary"
              size="large"
            >
              <Link
                color="inherit"
                href="https://forms.gle/RrfwnPHTK654NB2m9"
                rel="noopener"
                target="_blank"
              >
                Apply
              </Link>
            </Button>
          </Grid>
          <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default CryptoCommittee;
