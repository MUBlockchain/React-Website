import AwesomeSlider from "react-awesome-slider";
import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "react-awesome-slider/dist/styles.css";

import presentationImage from "./images/presentation.jpg";
import blockathonTableImage from "./images/blockathonTable.jpg";

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
              source: presentationImage,
            },
            {
              source: blockathonTableImage,
            },
          ]}
        />
      </Grid>
      <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
      <Grid item xs={1} />
    </Grid>
  );
};

export default ImageGallery;
