import React from "react";
import {
  Grid,
  Typography,
  Divider,
  Box,
  Button,
  Link,
} from "@material-ui/core";

const CryptoCommittee = () => {
  return (
    <div id="Crypto Committee">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={10}>
          <Typography style={{ marginBottom: 10 }} variant="h1">
            <Box fontWeight="fontWeightBold">Redhawk Digital Asset Fund</Box>
          </Typography>
          <Typography variant="h3" style={{ marginBottom: 10 }}>
            First Student-Run Cryptocurrency Investment Fund 
          </Typography>
          <Typography style={{ marginBottom: 10 }} variant="h3">
            <Box fontWeight="fontWeightBold">About</Box>
          </Typography>
          <Typography variant="body1">
            The Redhawk Digital Assets Fund (RDAF) seeks to provide
            crypto-curious students with the opportunity to research, invest,
            and network in the digital assets space via hands-on training and
            project exploration. Our conviction is that the adoption of
            distributed ledgers and non-custodial exchange will rapidly shift
            the global distribution of wealth and information by creating more
            efficient and ethical transactional environments.
          </Typography>
          <Grid item container justifyContent="center">
            <Button
              style={{ marginTop: 20 }}
              variant="contained"
              color="primary"
              size="large"
            >
              <Link
                color="inherit"
                href="https://forms.gle/11vEm41fqQve4QtC9"
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
