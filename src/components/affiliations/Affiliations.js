import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";

import AffiliationCard from "./AffiliationCard";
import benLogo from "./images/BEN_logo.png";
import eyLogo from "./images/EY_logo.png";
import fsbLogo from "./images/FSB_logo.png";
import gbbcLogo from "./images/GBBC_logo.png";

const Affiliations = () => {
  return (
    <div id="Affiliations">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container xs={10}>
          <Grid container justifyContent="center">
            <Typography style={{ marginBottom: 10 }} variant="h1">
              Affiliations
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <AffiliationCard image={benLogo} />
            <AffiliationCard image={eyLogo} />
            <AffiliationCard image={fsbLogo} />
            <AffiliationCard image={gbbcLogo} />
            <Divider
              style={{ width: "100%", marginTop: 25, marginBottom: 10 }}
            />
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Affiliations;
