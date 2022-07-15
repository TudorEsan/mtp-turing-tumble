import { Box, Grid, Typography } from "@mui/material";
import { color } from "@mui/system";
import React from "react";
import { colors } from "../colors";
import { Articles } from "../components/Articles";
import { Image } from "../components/Image";

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
            <Image src="/photos/babyloser.jpeg" />
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
                Hichhike
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                align="center"
                maxWidth="600px"
                margin="auto"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                tempora impedit incidunt eligendi quam! Harum.
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
            Some Heading Title, VIDEO?
          </Typography>
          <Typography variant="body1" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            alias debitis quas tempore non, culpa ullam deserunt dolore
            accusantium in, ea ratione optio perspiciatis ab! Quo aspernatur
            unde vero modi deserunt maxime aliquam, placeat molestias laboriosam
            maiores incidunt quia a, asperiores quibusdam dolorum. Illum,
            blanditiis fuga! Animi recusandae cupiditate ad? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Commodi aliquid magni
            dolores, soluta, aspernatur animi accusamus autem inventore maiores
            architecto optio sed incidunt tempore laudantium asperiores ex
            voluptatum? Quae sed commodi aliquid laudantium rerum accusantium
            sit quod veniam fuga recusandae voluptas perspiciatis, ea obcaecati
            illum, placeat saepe amet nulla. Debitis mollitia ab aperiam
            veritatis quae corporis praesentium, ratione soluta quis nam atque
            rem, nobis hic facilis inventore incidunt. Optio, quod!
          </Typography>
        </Box>
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
