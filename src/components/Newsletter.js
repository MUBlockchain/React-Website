import React from "react";
import { Grid, Typography, Button, Link } from "@material-ui/core";

const Newsletter = () => {
  return (
    <div id="Newsletter">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container xs={10}>
          <Grid item sm={1} xl={2} />
          <Grid item container justifyContent="center" sm={10} xl={8}>
            <Typography style={{ marginBottom: 10 }} variant="h1">
              Newsletter
            </Typography>
            <Typography variant="body1">
              Want to get the latest news on all things crypto and blockchain?
              If so, make sure to sign-up for our weekly newsletter that goes
              out every Sunday and summarizes the weeks major news as well as
              some stories you may have never heard otherwise.
            </Typography>
            <Button
              style={{ marginTop: 10 }}
              variant="contained"
              color="primary"
            >
              <Link
                color="inherit"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdQ7MVKG2Gz52gkW3MK4pVHbHaF55D7qze_5fYjkR0gznvu9Q/viewform?usp=sf_link"
                rel="noopener"
                target="_blank"
              >
                Sign Up for Newsletter
              </Link>
            </Button>
          </Grid>
          <Grid item sm={1} xl={2} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Newsletter;
