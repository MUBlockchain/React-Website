import React from "react";
import { Grid, Link } from "@material-ui/core";
import { LinkedIn, Twitter, Instagram, YouTube } from "@material-ui/icons";

const renderIcons = (icons) => {
  return icons.map((icon, index) => {
    return (
      <Link
        key={index}
        style={{ marignLeft: 10, marginRight: 10 }}
        href={icon.url}
        rel="noopener"
        target="_blank"
      >
        {icon.icon}
      </Link>
    );
  });
};

const icons = renderIcons([
  { url: "https://www.linkedin.com/company/mubc/", icon: <LinkedIn /> },
  { url: "https://twitter.com/mubcblockchain", icon: <Twitter /> },
  { url: "https://www.instagram.com/mublockchainclub/", icon: <Instagram /> },
  {
    url: "https://www.youtube.com/channel/UC78tQagLk8hqRSsn1zkdySw",
    icon: <YouTube />,
  },
]);

const Footer = () => {
  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid item xs={1} />
      <Grid item container justifyContent="center" xs={10}>
        {icons}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default Footer;
