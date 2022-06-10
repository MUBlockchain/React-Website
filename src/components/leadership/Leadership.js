import React from "react";
import { Typography, Grid, Divider, Box } from "@material-ui/core";
import ProfileCard from "./ProfileCard";
import calebAndersonPicture from "./images/Caleb_Anderson.jpeg";
import elliotNguyenPicture from "./images/Elliot_Nguyen.JPG";
import oliverOlberdingPicture from "./images/Oliver_Olberding.jpg";
import edThomasPicture from "./images/Ed_Thomas.jpg";
import jackManganPicture from "./images/Jack_Mangan.jpeg";
import adamSwabPicture from "./images/Adam_Swab.jpg";
import nickDiSistoPicture from "./images/Nick_DiSisto.jpg";
import saakethPakanatiPicture from "./images/Saaketh_Pakanati.png";
import stewartApplePicture from "./images/Stewart_Apple.jpg";
import frederickLevinsPicture from "./images/Frederick_Levins.jpg";
import jackNelsonPicture from "./images/Jack_Nelson.jpeg";
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
              profilePicture={adamSwabPicture}
              title="Adam Swab - President"
              description="Adam Swab is a Finance Major from Cleveland Ohio and currently the President of MUBC. Dove head first into the blockchain and cryptocurrency space starting in 2016 with cloud mining, and in 2020 build a large scale mining operation and company, CryptoByte, that he still operates today. Adam focuses his research and involvement in DeFi and tokenomics. Adam loves to analyze and develop projects by means of innovative Tokenomics and protocol mechanics. He joined MUBC and the RDAF in 2021 and look forward to growing the clubs outreach, philanthropy, and education of our members. In his free time Adam enjoys biking, exploring the forest, and sitting around the fire with good company."
            />
            <ProfileCard
              profilePicture={nickDiSistoPicture}
              title="Nick DiSisto - Executive Vice President"
              description="Nick DiSisto is a junior majoring in Robotics Engineering and Computer Science. He currently serves as the Executive VP for MUBC and the RDAF. His past experiences with Cryptocurrency Mining led him to better understand the blockchain space as a whole. He later Co-founded CryptoByte a cryptocurrency mining company in 2021. He hopes his experience and crypto knowledge will help make him a valuable asset and inspire and intrigue others to join the growing blockchain community."
            />
            <ProfileCard
              profilePicture={oliverOlberdingPicture}
              title="Oliver Olberding - VP of External Relations"
              description="Oliver Olberding is a rising Junior Finance Major from Oxford, England. He grew up in Cincinnati, Ohio. He is the VP of External Relations and Strategic Advisor for MUBC. He got into the blockchain space in 2017 with investments in Ethereum and a few other small projects. Within the past 6 months and joining the club, He has delved into various interests including technology behind blockchain, DeFi, regulation in crypto, NFT's, and continue to learn about all aspects that blockchain entails. Oliver joined the club and the fund to learn more about the fundamentals and complexities involved in blockchain and its applications to crypto and beyond. Oliver looks forward to innovating the club and the fund to new heights to gain exposure, credibility, and ultimately connect our brilliant minds with leaders in the crypto space!"
            />
            <ProfileCard
              profilePicture={saakethPakanatiPicture}
              title="Saaketh Pakanati - VP of Information Systems"
              description="Saaketh Pakanati is a rising senior at Miami University studying computer science and finance. His journey with crypto started in 2016 through video games. He is currently working as a data science intern focusing on monetization at Riot. Currently, he is working on a crypto algorithm that generates alpha based on lead lag. His other passions include basketball, reading, and hiking."
            />
            <ProfileCard
              profilePicture={calebAndersonPicture}
              title="Caleb Anderson - VP Software Dev"
              description="Caleb Anderson is a senior, studying Computer Science at Miami University. He has a strong passion for Web3 and the technologies behind it. In his own words, “Web3 is giving power back to consumers in a way we have never seen before.” He enjoys creating algorithmic strategies within the cryptocurrency and DeFi space, with this passion leading him to build out an automated token audit. He also has an interest in becoming a full stack Web3 developer. While Caleb isn’t working he likes fishing, cooking, and riding his bike."
            />
            <ProfileCard
              profilePicture={frederickLevinsPicture}
              title="Frederick Levins - VP of Marketing"
              description="Frederick Levins, robotics engineer with a focus in intelligent systems from the suburbs of Chicago. By trade and passion a Java developer, interested in cryptocurrency tokenomics, smart contract optimization, systems development, and community management. Always interested in and looking for the best and most useful technology to innovate and push forward humanity. Other interests include financial engineering, cyber security development, and outdoor adventures."
            />  
            <ProfileCard
              profilePicture={jackNelsonPicture}
              title="Jack Nelson - VP of Research"
              description="Jack Nelson is a Junior Finance major in the Farmer School of Business and the current VP of Research. Jack joined the MU Blockchain Club and RDAF in the Fall of 2021, and is currently interning for crypto research firm Defy Trends. His passion for both blockchain and leadership has led him into this position, and Jack plans to continue building the MUBC through speaker events, blockchain education, and helping members produce professional research reports. Jack’s vision for the MUBC and RDAF is to become a gateway for students looking to pursue a career in the crypto space. Other passions include golf, kayaking, and traveling."
            /> 
            <ProfileCard
              profilePicture={zacSwinneyPicture}
              title="Zac Swinney - VP of Membership"
              description="Zac Swinney is a sophomore at Miami University majoring in history. He got into cryptocurrency in late 2019 but refined my knowledge starting in the middle of 2021. Zac is currently an intern for UpNow Crypto doing research on a variety of topics related to cryptocurrency. He has a passion for cryptocurrency, history, and music.  "
            />
            <ProfileCard
              profilePicture={elliotNguyenPicture}
              title="Elliot Nguyen - VP of Education"
              description="Elliot Nguyen is a Junior Finance major in the Farmer School of Business from Hanoi, Vietnam. He knew about Bitcoin since its inception in '09 but his exposure to crypto only started recently by joining MUBC and RDAF. Investing is Elliot's main interest with crypto. Besides that, his personal interests include Formula 1, technology, audiophile, and art."
            />
            <ProfileCard
              profilePicture={jackManganPicture}
              title="Jack Mangan - VP of Investments"
              description="Jack Mangan is a Junior Finance Major from Chicago, Illinois. He knew about crypto for a few years, but only after joining the RDAF in the spring of 2022 has he begun to dive deep into the crypto space. His main interests within the space are Layer 2 protocols and some smaller DeFi projects. In his free time Jack enjoys hanging out with friends, playing intramural sports, and traveling."
            />
            <ProfileCard
              profilePicture={edThomasPicture}
              title="Ed Thomas – VP of Finance"
              description="Ed Thomas is a Sophomore Finance major in the Farmer School of Business. Ed's first interaction with blockchain technology was when he started participating in Ethereum gas wars in the summer of 2021. Since then he has participated in dozens of gas wars and has published educational content on the topic. Ed is most interested in the tokenization of physical assets and how blockchain is revolutionizing charity."
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
