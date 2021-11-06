import React from "react";
import {
  Grid,
  Typography,
  Divider,
  Link,
  Button,
  Box,
} from "@material-ui/core";

import CourseCard from "./CourseCard";

const renderBullet = (bullets) => {
  return bullets.map((bullet, index) => {
    return <li key={index}>{bullet}</li>;
  });
};

const Course = () => {
  const topics = renderBullet([
    "What is a blockchain and how do they work?",
    "Blockchain Networks",
    "Blockchain Security",
    "Smart Contracts",
    "Decentralized Autonomous Organizations",
    "Governance",
    "Token Economics",
    "Bitcoin, Ethereum, Altcoins, Stablecoins",
    "Decentralized Finance (Defi)",
    "Use Cases",
  ]);

  return (
    <div id="Course">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={10}>
          <Typography variant="h1">
            <Box fontWeight="fontWeightBold">MUBC 101</Box>
          </Typography>
          <Typography style={{ marginBottom: 10 }} variant="h3">
            Introduction to Blockchain Technology, Cryptocurrencies and Web3
            Fall 2021
          </Typography>
          <CourseCard
            title="Logistics"
            buttons={
              <>
                <Button variant="contained" color="primary" size="small">
                  <Link
                    color="inherit"
                    href="https://docs.google.com/document/d/1p1JkcskOG-lpIpPxXNWcISwII0ln84-7X78q0RlIRVw/edit?usp=sharing"
                    rel="noopener"
                    target="_blank"
                  >
                    Learn More
                  </Link>
                </Button>
              </>
            }
          >
            <li>Professors: Miami University Blockchain Club Leaders</li>
            <li>Advisors: Dr. Carvalho, Dr. Merhout, and Dr. Ballou</li>
            <li>
              Email:{" "}
              <Link href="mailto:MUBC@miamioh.edu" rel="noopener">
                MUBC@miamioh.edu
              </Link>
            </li>
            <li>
              Class Times: Wednesdays from 6:00 - 7:00 PM in FSB (In-person)
            </li>
          </CourseCard>
          <CourseCard title="Description">
            This course will focus on the technology behind blockchain and
            real-world use cases. Throughout this course industry professionals
            and experts will give mini-lectures that will help students further
            grasp the material while making valuable connections. Students will
            learn how blockchain technology can be used across different
            industries and sectors and the benefits and challenges of mass
            adoption.
          </CourseCard>
          <CourseCard title="Topics">{topics}</CourseCard>
          <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Course;
