import React from "react";
import { Card, CardMedia, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      width: 325,
      height: 325,
    },
    minWidth: 100,
    minHeight: 100,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  media: {
    [theme.breakpoints.up("sm")]: {
      width: 325,
      height: 325,
    },
    height: 100,
    width: 100,
    objectFit: "cover",
  },
}));

const AffiliationCard = (props) => {
  const classes = useStyles();
  const { image } = props;

  return (
    <Card raised className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" className={classes.media} image={image} />
      </CardActionArea>
    </Card>
  );
};

export default AffiliationCard;
