import React from "react";
import { Card, CardMedia, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 325,
    minHeight: 325,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  media: {
    height: 325,
    width: 325,
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
