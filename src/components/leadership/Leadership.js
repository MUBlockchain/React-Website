import React from "react";
import { Typography, Grid, Divider, Box } from "@material-ui/core";
import ProfileCard from "./ProfileCard";
import DannyHarrisonPicture from "./images/DannyHarrison.png";
import oliverOlberdingPicture from "./images/Oliver_Olberding.jpg";
import edThomasPicture from "./images/Ed_Thomas.jpg";
import adamSwabPicture from "./images/Adam_Swab.jpg";
import nickDiSistoPicture from "./images/NickDiSistoHeadShot.png";
import mattHaddadPicture from "./images/Matt_Haddad.jpeg";
import jackNelsonPicture from "./images/Jack_Nelson.jpeg";
import zacSwinneyPicture from "./images/Zac_Swinney.png";
import ChaseBoucheinPicture from "./images/Chase_Bouchein.jpg";
import BenKaufmanPicture from "./images/Ben_Kaufman.png";

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
              profilePicture={oliverOlberdingPicture}
              title="Oliver Olberding - President"
              description="Oliver Olberding is a Senior Finance Major from Oxford, England. He grew up in Cincinnati, Ohio. He is the President for MUBC. He got into the blockchain space in 2017 with investments in Ethereum and a few other small projects. Since joining the club, Oliver has interned for a layer-1 blockchain and delved into deep research in regulation and institutional investment  in blockchain. Oliver joined the club and the fund to learn more about the fundamentals and complexities involved in blockchain and its applications to crypto, finance, and beyond."
            />
            <ProfileCard
              profilePicture={edThomasPicture}
              title="Ed Thomas - Executive Vice President"
              description="Ed Thomas is a Sophomore Finance major in the Farmer School of Business. Ed's first interaction with blockchain technology was when he started participating in Ethereum gas wars in the summer of 2021. Since then he has participated in dozens of gas wars and has published educational content on the topic. Ed is most interested in the tokenization of physical assets and how blockchain is revolutionizing charity."
            />
            <ProfileCard
              profilePicture={nickDiSistoPicture}
              title="Nick DiSisto -  VP of Technology"
              link="https://www.linkedin.com/in/nick-disisto-4111291ba/" // Replace with the actual link
              description="Nick DiSisto is a Senior majoring in Robotics Engineering and Computer Science. His past experiences with Cryptocurrency Mining led him to better understand the blockchain space as a whole. He later Co-founded CryptoByte, a cryptocurrency mining company in 2021. Following that, he joined Ripple as a Technical Partner Analyst, where he attended Blockchain conferences in both London and Paris. He hopes his experience and crypto knowledge will help make him a valuable asset and inspire and intrigue others to join the growing blockchain community."
            />
            <ProfileCard
              profilePicture={DannyHarrisonPicture}
              title="Danny Harrison - VP of Finance"
              description="Danny Harrison is a junior finance major and philosophy & law minor at Miami University. She currently serves as the VP of Finance for MUBC. Her original interests spurred from the trends in NFTs and then moved into community management. Danny officially joined RDAF Fall 2022 and now finds interest in blockchain consulting and hopes to gain experience in the field by interning over the summer. Outside of MUBC Danny is also interested in philosophy, musical performance, and watching sports with friends."
            />
            <ProfileCard
              profilePicture={adamSwabPicture}
              title="Adam Swab - Strategic Advisor"
              link="https://www.linkedin.com/in/adam-swab/" // Replace with the actual link
              description="Adam Swab is a Finance Major from Cleveland Ohio. Adam dove head first into the blockchain and cryptocurrency space starting in 2016 with cloud mining, and in 2020 build a large scale mining operation. Adam focuses his research and involvement in DeFi and tokenomics. Adam now servers as a Senior Advisor to the blockchain club after finishing his tenure as President of the club. After graduation Adam will be joining Deloitte Consulting as a Business Technology Solution Analyst. In his free time Adam enjoys biking, exploring the forest, and sea travel."
            />
            <ProfileCard
              profilePicture={mattHaddadPicture}
              title="Matt Haddad - VP of Operations"
              link="https://www.linkedin.com/in/matthew-haddad-profile/" // Replace with the actual link
              description="Matt is a senior Business Economics major at Miami University. He currently serves as the VP of Fund Operations for MUBC. His journey in DeFi began in 2020, trading for a family office in Chicago. Since then he has gained experience at places like JP Morgan’s Investment Bank and the World Economic Forum. Beyond his professional pursuits, Matt enjoys exploring on-chain data, discussing social theories, and traveling."
            />  
            <ProfileCard
              profilePicture={jackNelsonPicture}
              title="Jack Nelson - Strategic Advisor"
              description="Jack Nelson is a Senior Finance major in the Farmer School of Business and former VP of Research. Jack joined the MU Blockchain Club and RDAF in the Fall of 2021, and is currently interning for crypto research firm Defy Trends. His passion for both blockchain and leadership has led him into this position, and Jack plans to continue building the MUBC through speaker events, blockchain education, and helping members produce professional research reports. Jack’s vision for the MUBC and RDAF is to become a gateway for students looking to pursue a career in the crypto space. Other passions include golf, kayaking, and traveling."
            /> 
            <ProfileCard
              profilePicture={zacSwinneyPicture}
              title="Zac Swinney - VP of External Relations"
              description="Zac is a junior economics major with a minor in computer science at Miami University. He began his adventure into blockchain in 2019 and since then has delved into the technological side of blockchain. He has been a part of the club since the fall of his freshman year; Zac has served a variety of executive roles since his time in the club and is very passionate about taking MUBC to the next level. Other than blockchain he is interested in cars, working out, and the stock market."
            />
            <ProfileCard
              profilePicture={BenKaufmanPicture}
              title="Benjamin Kaufman - VP of Recruitment"
              link="https://www.linkedin.com/in/benjamin-kaufman-059609215/" // Replace with the actual link
              description="Ben is a senior double majoring in economics and history at Miami Unvieristy. He currently serves as the VP of recruitment for MUBC which he got involved with through blockchain technologies applications. He believes that there is a place for blockchain in the greater tech ecosystem, we just need to find it and sell it to the old guard. In his free time, Ben likes to ski, wakeboard, play piano, golf, or hang out with his friends."
            />
            <ProfileCard
              profilePicture={ChaseBoucheinPicture}
              title="Chase Bouchein - VP of Research"
              link="http://linkedin.com/in/chase-bouchein-29174a227" // Replace with the actual link
              description="Chase Bouchein is a junior Finance major at Miami University who was born and raised in St. Louis. He currently sits as the VP of Research at MUBC. His introduction to blockchain began with trading various digital assets during the 2021 run-up. Chase is currently most interested in how blockchain technology will revolutionize industries like real estate and construction. Some of his other interests include golf, weight lifting, and construction management."
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
