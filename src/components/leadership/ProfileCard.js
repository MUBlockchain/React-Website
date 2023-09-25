import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    minWidth: 300,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 30,
    textDecoration: "none", // Remove text decoration for the anchor tag
    color: "inherit", // Inherit the color from the parent
  },
  profilePicture: {
    [theme.breakpoints.up("md")]: {
      width: 200,
      height: 200,
    },
    minHeight: 100,
    minWidth: 100,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const ProfileCard = (props) => {
  const { profilePicture, title, description, link } = props; 
  const classes = useStyles();

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={classes.root}>
      {/* Make the entire card clickable */}
      <Card raised>
        <CardActionArea>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar
              alt={title}
              variant="circular"
              className={classes.profilePicture}
              src={profilePicture}
            />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
};

export default ProfileCard;
