import AwesomeSlider from "react-awesome-slider";
import { makeStyles } from "@material-ui/core/styles";
import "react-awesome-slider/dist/styles.css";

import image1 from "../leadership/images/Ryan_Schuerkamp.jpg";
import image2 from "../leadership/images/Alex_Stan.jpg";

const useStyles = makeStyles((theme) => ({
  gallery: {
    height: "80%",
    marginTop: 20,
  },
}));

const ImageGallery = () => {
  const classes = useStyles();
  return (
    <AwesomeSlider
      className={classes.gallery}
      media={[
        {
          source: image1,
        },
        {
          source: image2,
        },
      ]}
    />
  );
};

export default ImageGallery;
