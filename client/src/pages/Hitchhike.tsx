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
    name: "Lukas Kirchdorfer",
    description: "Data Science Master Student at the University of Mannheim",
    photo: "/photos/Lukas.jpeg",
    social: [
      {
        url: "https://www.linkedin.com/in/lukas-kirchdorfer/",
        icon: "/linkedin.svg",
      },
      {
        url: "https://github.com/qm2021-lkirchdo",
        icon: "/github.svg",
      },
    ],
  } as ITeamMember,
  {
    name: "Denisa Dragota",
    description: "Computer Science Student at UBB Cluj-Napoca",
    photo: "/photos/Denisa.jpeg",
    social: [
      {
        url: "https://www.linkedin.com/in/denisa-cristina-dragota",
        icon: "/linkedin.svg",
      },
    ],
  } as ITeamMember,
  {
    name: "Maren Ehrgott",
    description: "Business Informatics Student at the University of Mannheim",
    photo: "/photos/Maren.jpg",
    social: [
      {
        url: "https://www.linkedin.com/in/maren-ehrgott/",
        icon: "/linkedin.svg",
      },
    ],
  } as ITeamMember,
  {
    name: "Agnieszka Lenart",
    description: "Data Science Master Student at the University of Mannheim",
    photo: "/photos/Aga.jpeg",
    social: [
      {
        url: "https://www.linkedin.com/in/agnieszka-lenart-07997618a/",
        icon: "/linkedin.svg",
      },
      {
        url: "https://github.com/agnieszkalenart",
        icon: "/github.svg",
      },
    ],
  } as ITeamMember,
  {
    name: "Noah Mautner",
    description: "Data Science Master Student at the University of Mannheim",
    photo: "/photos/Noah.jpeg",
    social: [
      {
        url: "https://github.com/noahmtnr",
        icon: "/linkedin.svg",
      },
      {
        url: "https://www.linkedin.com/in/noahmautner/",
        icon: "/github.svg",
      },
    ],
  } as ITeamMember,
  {
    name: "Cosmina Ionut",
    description:
      "Advanced Information Systems Master Student at UBB Cluj-Napoca",
    photo: "/photos/Cosmina.jpeg",
    social: [
      {
        url: "https://www.linkedin.com/in/cosmina-ionut-33aa69246",
        icon: "/linkedin.svg",
      },
      {
        url: "https://github.com/CosminaIonut",
        icon: "/github.svg",
      },
    ],
  } as ITeamMember,
];

export const Hitchhike = () => {
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
            <Image src="/photos/team2.jpeg" />
          </Grid>
          <Grid
            container
            item
            md={6}
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography variant="h2" fontFamily="Anton" align="center">
                Hitchhike
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                align="center"
                maxWidth="600px"
                margin="auto"
              >
                Teaching a parcel to catch rides
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
            Our aim was to implement a more cost-effective and environmentally
            friendly solution to deliver parcels from companies to customers by
            letting the parcel ‘hitchhike’ with taxis that are already in
            traffic. This reduces transport costs, reduces pollution and reduces
            traffic congestion. To train this ‘intelligent parcel’, we used
            Reinforcement Learning on historical Manhattan traffic data. For
            more information, see our{" "}
            <Link
              color="#D04E4E"
              fontWeight="bold"
              href="https://github.com/noahmtnr/ines-autonomous-dispatching.git"
            >
              github repository
            </Link>{" "}
            and{" "}
            <Link
              color="#D04E4E"
              fontWeight="bold"
              href="https://www.institute-for-enterprise-systems.de/index.php?id=68&tx_news_pi1%5Bnews%5D=98&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=f9e994c2bb085635e334e09015a8d3b3"
            >
              current research at InEs
            </Link>
            .
          </Typography>
        </Box>
        <Team team={teamMembers} />
        <Typography
          gutterBottom
          marginTop={10}
          fontFamily="Anton"
          variant="h3"
          align="center"
        >
          Articles
        </Typography>
        <Articles forArticle="hitchhike" />
      </Box>
    </>
  );
};
