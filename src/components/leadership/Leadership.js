import React from "react";
import { Typography, Divider, Grid } from "@material-ui/core";

import ProfileCard from "./ProfileCard";
import alexStanPicture from "./images/Alex_Stan.jpg";
import josiahPutrichPicture from "./images/Josiah_Putrich.jpg";
import ryanSchuerkampPicture from "./images/Ryan_Schuerkamp.jpg";
import bhuvanShahPicture from "./images/Bhuvan_Shah.jpg";

const Leadership = () => {
  return (
    <div id="Leadership">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container alignContent="center" direction="column" xs={10}>
          <Grid container justifyContent="center">
            <Typography style={{ marginBottom: 10 }} variant="h1">
              Leadership
            </Typography>
          </Grid>
          <Divider style={{ marginBottom: 10 }} />
          <Grid container justifyContent="center">
            <ProfileCard
              profilePicture={alexStanPicture}
              title="Alex Stan - President"
              description="Alex Stan is a Senior Accountancy major in the Farmer School of Business and the current President of MUBC. Stepping up from his role as VP of Professional Development in 2020, Alex aims to expand the professional operations of the club. As President, he will be responsible for facilitating successful club events as well as connecting the club with various industry professionals and companies to further blockchain education. Alex is looking to create more buzz around MUBC events in hopes of attracting more Miami University students as well as company sponsorships."
            />
            <ProfileCard
              profilePicture={josiahPutrichPicture}
              title="Josiah Putrich - Executive VP"
              description="I am currently a Senior, Finance and Data Analytics student with 4+ years of hands-on experience in portfolio management, research, and business analytics. On-campus, I am the CFO for Miami Business Consulting and a Research Analyst for the Social Impact Fund. I enjoy playing piano, lifting, and trading (stocks and crypto). More recently, I have become very interested in blockchain technology because I believe it will be one of the largest catalysts for both social and economic development going forward. I am especially interested in DeFi and how we can enable people to take control of their personal finances."
            />
            <ProfileCard
              profilePicture={ryanSchuerkampPicture}
              title="Ryan Scheurkamp - VP of Projects"
              description="Ryan Schuerkamp is a Sophomore Computer Science, Data Science and Statistics, and Mathematics student. He is interested in learning more about blockchain technology and machine learning. As VP of Projects, Ryan hopes to help students and the club create exciting projects."
            />
            <ProfileCard
              profilePicture={bhuvanShahPicture}
              title="Bhuvan Shah - VP of Technical Development"
              description="Bhuvan Shah is a Junior Software Engineering major and Business Analytics minor. As a VP of Technical Development, he is responsible for mentoring others at hackathons and similar events on the basics of coding and building blockchain networks. He enjoys playing soccer and chess. Bhuvan aims to learn more about blockchain technology and hopes to spread awareness about this disruptive technology."
            />
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Leadership;
