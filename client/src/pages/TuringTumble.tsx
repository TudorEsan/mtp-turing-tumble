import { Box, Grid, Link, Typography } from "@mui/material";
import { color } from "@mui/system";
import React from "react";
import { colors } from "../colors";
import { Articles } from "../components/Articles";
import { Image } from "../components/Image";
import { Team } from "../components/Team";
import { ITeamMember } from "../types/team";

const teamMembers = [
  {
    name: "Timur Carsten",
    description: "Data Science Master Student at the University of Mannheim",
    photo: "/photos/Timur.png",
    social: [
      {
        url: "https://www.linkedin.com/in/tmcarstensen/",
        icon: "/linkedin.svg",
      },
      {
        url: "https://github.com/timurcarstensen",
        icon: "/github.svg",
      },
    ],
  } as ITeamMember,
  {
    name: "Tudor Esan",
    description:
      "Software Engineering student that is very good at googling stuff.",
    photo: "/photos/Tudor.jpg",
    social: [
      {
        url: "https://www.linkedin.com/in/tudoresan",
        icon: "/linkedin.svg",
      },
      {
        url: "https://github.com/tudoresan",
        icon: "/github.svg",
      },
    ],
  } as ITeamMember,
  {
    name: "Raluca Chis",
    description:
      "Applied Computational Intelligence Student at UBB Cluj-Napoca",
    photo: "/photos/Raluca.jpeg",
    social: [
      {
        url: "https://www.linkedin.com/in/raluca-diana-chis-638769171/",
        icon: "/linkedin.svg",
      },
      {
        url: "https://github.com/RalucaChis",
        icon: "/github.svg",
      },
    ],
  } as ITeamMember,
  {
    name: "Julie Naegelen",
    description: "Mannheim Master Data Science Background in Economics (BSc)",
    photo: "/photos/julie.jpeg",
    social: [
      {
        url: "https://github.com/jnaeg",
        icon: "/github.svg",
      },
    ],
  } as ITeamMember,
  {
    name: "Roman Hess",
    description: "Roman Hess M.Sc. Data Science Background in Psychology",
    photo: "/photos/Roman.jpg",
    social: [
      {
        url: "https://github.com/romanhess98",
        icon: "/github.svg",
      },
      {
        url: "https://www.linkedin.com/in/roman-he%C3%9F-b3a2101a3/",
        icon: "/linkedin.svg",
      },
    ],
  } as ITeamMember,
];

export const TuringTumble = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          background: colors.blue,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
          height: "100vh",
          width: "100vw",
        }}
      />
      <Box
        sx={{
          position: "fixed",
          height: "100%",
          width: "100%",
          background: colors.blue,
          zIndex: -1,
        }}
      />
      <Box maxWidth="1200px" margin="0 auto" padding={3}>
        <Grid container justifyContent="center" spacing={4} alignItems="center">
          <Grid item md={6} xs={12}>
            <Image src="/photos/team1.jfif" />
          </Grid>
          <Grid container item md={6} xs={12}>
            <Grid item xs={12}>
              <Typography variant="h2" fontFamily="Anton" align="center">
                Turing Tumble
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center" maxWidth="600px">
                Teaching a reinforcement learning agent to play turing tumble
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Box marginTop={10}>
          <Typography
            fontFamily="Anton"
            gutterBottom
            variant="h3"
            align="center"
          >
            About
          </Typography>
          <Typography variant="body1" align="center">
            In the game Turing Tumble, players construct mechanical computers
            that use the flow of marbles along a board to solve logic problems.
            As the board and its parts are Turing complete, which means that
            they can be used to express any mathematical function, an
            intelligent agent taught to solve a Turing Tumble challenge
            essentially learns how to write code according to a given
            specification.
            <br />
            <br />
            Following this logic, we taught an agent how to write a simple
            program according to a minimal specification, using an abstracted
            version of the Turing Tumble board as reinforcement learning
            training environment. This is related to the emerging field of
            program synthesis, as is for example applied in GitHub’s{" "}
            <Link
              color="#D04E4E"
              fontWeight="bold"
              href="https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot"
            >
              CoPilot
            </Link>{" "}
            For more details, please see our{" "}
            <Link
              color="#D04E4E"
              fontWeight="bold"
              href="https://github.com/timurcarstensen/mtp-ai-turing-tumble"
            >
              GitHub repository
            </Link>
          </Typography>
        </Box>
        <Team team={teamMembers} />
        <Typography
          gutterBottom
          fontFamily="Anton"
          variant="h3"
          align="center"
          fontWeight=""
        >
          Articles
        </Typography>
        <Articles forArticle="turing-tumble" />
      </Box>
    </>
  );
};
