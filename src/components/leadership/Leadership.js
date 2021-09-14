import React from "react";
import { Typography, Grid, Divider, Box } from "@material-ui/core";

import ProfileCard from "./ProfileCard";
import alexStanPicture from "./images/Alex_Stan.jpg";
import josiahPutrichPicture from "./images/Josiah_Putrich.jpg";
import ryanSchuerkampPicture from "./images/Ryan_Schuerkamp.jpg";
import bhuvanShahPicture from "./images/Bhuvan_Shah.jpg";
import lanceHeltonPicture from "./images/Lance_Helton.jpg";
import madisynErbesPicture from "./images/Madisyn_Erbes.jpg";
import jackLyonsPicture from "./images/Jack_Lyons.jpg";
import derekDanielsPicture from "./images/Derek_Daniels.jpg";
import sahilSapraPicture from "./images/Sahil_Sapra.jpg";
import stephenBopstPicture from "./images/Stephen_Bopst.jpg";

const Leadership = () => {
  return (
    <div id="Leadership">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={10}>
          <Typography style={{ marginBottom: 10 }} variant="h1">
            <Box fontWeight="fontWeightBold">Leadership</Box>
          </Typography>
          <Grid container justifyContent="center">
            <ProfileCard
              profilePicture={alexStanPicture}
              title="Alex Stan - President"
              description="Alex Stan is a Senior Accountancy major in the Farmer School of Business and the current President of MUBC. Stepping up from his role as VP of Professional Development in 2020, Alex aims to expand the professional operations of the club. As President, he will be responsible for facilitating successful club events as well as connecting the club with various industry professionals and companies to further blockchain education. Alex is looking to create more buzz around MUBC events in hopes of attracting more Miami University students as well as company sponsorships."
            />
            <ProfileCard
              profilePicture={josiahPutrichPicture}
              title="Josiah Putrich - Executive VP"
              description="I am currently a Junior, Finance and Data Analytics student with 4+ years of hands-on experience in portfolio management, research, and business analytics. On-campus, I am the CFO for Miami Business Consulting and a Research Analyst for the Social Impact Fund. I enjoy playing piano, lifting, and trading (stocks and crypto). More recently, I have become very interested in blockchain technology because I believe it will be one of the largest catalysts for both social and economic development going forward. I am especially interested in DeFi and how we can enable people to take control of their personal finances."
            />
            <ProfileCard
              profilePicture={ryanSchuerkampPicture}
              title="Ryan Scheurkamp - VP of Projects"
              description="Ryan Schuerkamp is a Sophomore Computer Science, Data Science and Statistics, and Mathematics student. As VP of Projects, Ryan hopes to help students and the club create exciting projects. He is interested in learning more about blockchain technology and machine learning. On campus, Ryan is also involved in computer science research and Redhawk Ventures."
            />
            <ProfileCard
              profilePicture={bhuvanShahPicture}
              title="Bhuvan Shah - VP of Technical Development"
              description="Bhuvan Shah is a Junior Software Engineering major and Business Analytics minor. As a VP of Technical Development, he is responsible for mentoring others at hackathons and similar events on the basics of coding and building blockchain networks. He enjoys playing soccer and chess. Bhuvan aims to learn more about blockchain technology and hopes to spread awareness about this disruptive technology."
            />
            <ProfileCard
              profilePicture={lanceHeltonPicture}
              title="Lance Helton - VP of Professional Development"
              description="Lance Helton is a Senior Finance major and the VP of Professional Development at MUBC. He is passionate about discovering and understanding new technologies as well as their potential implications for the financial industry. When it comes to blockchain technology Lance is specifically interested in how the technology will affect auditing as well as business-to-business transactions. As VP of Professional Development, Lance looks forward to engaging with fellow members as well as industry professionals in order to foster internships and future career opportunities."
            />
            <ProfileCard
              profilePicture={madisynErbesPicture}
              title="Madisyn Erbes - VP of Marketing"
              description="Madisyn Erbes is a Senior Supply Chain Management major in the Farmer School of Business. This is her second year as VP of Marketing for MUBC and she’s excited to use her past experience as a marketing intern to help MUBC succeed. She hopes  promoting events and speaker series will gain more students interest in cryptocurrency and blockchain throughout the school year."
            />
            <ProfileCard
              profilePicture={jackLyonsPicture}
              title="Jack Lyons - VP of Recruitment"
              description="Jack Lyons is a Junior Economics major. As the VP of Recruitment, Jack hopes to  continue the growth of the club at Miami University. In his second semester with MUBC he is excited to learn more about Blockchain Technology, Along with meeting new people through the events and other activities held by the club this semester."
            />
            <ProfileCard
              profilePicture={derekDanielsPicture}
              title="Derek Daniels - VP of Investments"
              description="Derek Daniels is currently a Senior Finance major and the VP of Investments in the MUBC. He enjoys lifting, fishing, video games, guitar, and investing in crypto, stocks, and real estate. He is passionate about learning and teaching others how to be smart with their money in order to live a happy, healthy life. Derek is a founder and current leader of the cryptocurrency investment fund. He truly believes that blockchain, and more specifically cryptocurrency, will lead the way to major positive change across the world. Through learning how to properly invest and have our money work for us, he aims to create generational wealth that will change our families lives, and the world at large for the better."
            />
            <ProfileCard
              profilePicture={sahilSapraPicture}
              title="Sahil Sapra - VP of Educational Development"
              description="Sahil Sapra is a Junior Quantitative Economics major with a minor in Finance and Computer Science. As the VP of Educational Development, he is involved with educating students at Miami University about blockchain and its various use cases. He is very passionate about blockchain technology and shares a very positive outlook for the future of the technology. He is also one of the founding members of MUBC’s student-led cryptocurrency fund."
            />
            <ProfileCard
              profilePicture={stephenBopstPicture}
              title="Stephen Bopst - VP of Finance"
              description="Stephen Bopst is a Senior Finance major in the Farmer School of Business. Over the past year he has become increasingly interested in blockchain technology and it’s future business applications. He is entering his second semester as the VP of Finance for the Blockchain club dealing with club finances and other projects such as weekly newsletters on blockchain information."
            />
            <Divider
              style={{ width: "100%", marginTop: 25, marginBottom: 10 }}
            />
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Leadership;
