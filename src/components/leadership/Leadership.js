import React from "react";
import { Typography, Grid, Divider, Box } from "@material-ui/core";

import ProfileCard from "./ProfileCard";
import alexStanPicture from "./images/Alex_Stan.jpg";
import josiahPutrichPicture from "./images/Josiah_Putrich.jpg";
import ryanSchuerkampPicture from "./images/Ryan_Schuerkamp.jpg";
import madisynErbesPicture from "./images/Madisyn_Erbes.jpg";
import derekDanielsPicture from "./images/Derek_Daniels.jpg";
import sahilSapraPicture from "./images/Sahil_Sapra.jpg";
import adamSwabPicture from "./images/Adam_Swab.jpg";
import nickDiSistoPicture from "./images/Nick_DiSisto.jpg";
import michaelWisneskiPicture from "./images/Michael_Wisneski.jpg";
import stewartApplePicture from "./images/Stewart_Apple.jpg";
import davisSellPicture from "./images/Davis_Sell.jpg";
import brettHussleinPicture from "./images/Brett_Husslein.jpg";
import zacSwinneyPicture from "./images/Zac_Swinney.jpg";
import konradLesheimPicture from "./images/Konrad_Lesheim.jpg";

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
              description="Ryan Schuerkamp is a sophomore pursuing a B.S. and M.S. in Computer Science and a B.S. in Data Science and Statistics. He is involved in computer science research focusing on modeling complex social systems. Also, he is implementing a blockchain-based forecast system as a part of a blockchain research project. He is also involved in Redhawk Ventures, a student-run venture capital fund. Ryan is interested in learning more about machine learning, blockchain, and quantitative finance."
            />
            <ProfileCard
              profilePicture={madisynErbesPicture}
              title="Madisyn Erbes - VP of Communication"
              description="Madisyn Erbes is a Senior Supply Chain Management major in the Farmer School of Business. This is her second year as VP of Marketing for MUBC and she’s excited to use her past experience as a marketing intern to help MUBC succeed. She hopes  promoting events and speaker series will gain more students interest in cryptocurrency and blockchain throughout the school year."
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
              profilePicture={adamSwabPicture}
              title="Adam Swab - VP of Operations"
              description="Adam Swab is a sophomore Finance major and the current VP of Operations of MUBC. Adam is an emerging blockchain leader and entrepreneur specializing in proof of work, Decentralized Finance, and tokenomics. Adam believes that blockchain technology and digital assets will lead the way to breakthrough technological and financial advancements throughout the 21 century. Adam is also a partner and cofounder at Cryptobyte, a startup cryptocurrency mining operation. Adam looks forward to growing the club and further teaching the fundamentals of blockchain and digital assets. Adam also servers on the Business Student Advisory Council and Dean of Students Advisory Board."
            />
            <ProfileCard
              profilePicture={nickDiSistoPicture}
              title="Nick DiSisto - VP of Marketing"
              description="Nick DiSisto is a Robotics Engineering major with a minor in Computer Science. His past experiences with Cryptocurrency Mining led him to better understand the blockchain space as a whole. He hopes his expertise in crypto knowledge will help make him a valuable asset and inspire and intrigue others to join the growing blockchain community. "
            />
            <ProfileCard
              profilePicture={michaelWisneskiPicture}
              title="Michael Wisneski – VP of Outreach"
              description="Michael Wisneski is a sophomore, Finance focused, business student with a newly accepted role as the VP of outreach for the MUCIF. He has multiple years of both personal portfolio management experience, and market research and analytics. Michael spends his free time lifting, trading, and playing intramural sports. He hopes to make an impact by helping expand and improve the MUCIF, while developing his skills alongside it."
            />
            <ProfileCard
              profilePicture={stewartApplePicture}
              title="Stewart Apple – Head of Innovation"
              description="Stewart Apple is an Honors College student dual-majoring in Philosophy & Economics, Head of Innovation at MUBC, Chairman of the Redhawk Digital Asset Fund, and the Founder of AI & blockchain company William Tell. Stewart has passions for emerging technology, cross-functional team leadership, pragmatic innovation, and open distributed ledger & permissionless computation."
            />
            <ProfileCard
              profilePicture={davisSellPicture}
              title="Davis Sell – "
              description="Davis Sell is a senior Information Systems & Analytics major. His background in engineering and economics drive a data-driven and technologically focused business mindset. Mr. Sell loves both technology and investing, driving his passion for cryptocurrency and the blockchain. On campus Mr. Sell is the Women's head lacrosse coach as well as holding a position in the Makerspace, where he aids students in 3D printing, laser cutting, VR, and software. In his free time, Mr. Sell enjoys skiing, traveling, and gambling. After he graduates, Mr. Sell is set to work on artificial intelligence at McDonald's."
            />
            <ProfileCard
              profilePicture={brettHussleinPicture}
              title="Brett Husslein – VP of Research"
              description="Brett Husslein is a Senior Finance major in the Farmer School of Business and the current VP of Research. Additionally, he co-founded the Miami University Cryptocurrency Investment Fund (MUCIF) and maintains a seat on its Board of Directors to-date. With these roles, Brett aims to further solidify the capability and reputation of the MUCIF as well as enhance the education and events facilitated in the MUBC."
            />
            <ProfileCard
              profilePicture={zacSwinneyPicture}
              title="Zac Swinney – "
              description="I am currently a Freshman History major and will be switching to Information Systems and Analytics with a minor in Computer Software Engineering at the beginning of my Sophomore year. I enjoy lifting, video games, guitart, and cryptocurrency. I have a strong passion for this club's success and cryptocurrencies as a whole. My goals include bringing awareness to the MUBC and continuing the development of the MUBC101 course."
            />
            <ProfileCard
              profilePicture={konradLesheimPicture}
              title="Konrad Lesheim – VP of Investments"
              description="Konrad Lesheim is a Sophomore Finance Major and the VP of Investments at MUBC. In this role, he oversees digital asset research and portfolio management. He is passionate about blockchain technology and the impact it will have on the future."
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
