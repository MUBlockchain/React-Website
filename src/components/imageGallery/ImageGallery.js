import AwesomeSlider from "react-awesome-slider";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "react-awesome-slider/dist/styles.css";

import presentationImage from "./images/presentation.jpg";
import groupImage from "./images/group.jpg";
import firstTShirtImage from "./images/tShirt1.jpg";
import secondTShirtImage from "./images/tShirt2.jpg";
import codingImage from "./images/coding.jpg";

const useStyles = makeStyles((theme) => ({
  gallery: {
    height: "80%",
    marginTop: "3%",
  },
}));

const ImageGallery = () => {
  const classes = useStyles();
  return (
    <Grid item container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <AwesomeSlider
          className={classes.gallery}
          media={[
            {
              source: groupImage,
            },
            {
              source: presentationImage,
            },
            {
              source: firstTShirtImage,
            },
            {
              source: codingImage,
            },
            {
              source: secondTShirtImage,
            },
          ]}
        />
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default ImageGallery;
