import { Button, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Wave from "react-wavify";
import { Image } from "../components/Image";

export const Home = () => {
  return (
    <div>
      <section style={{ backgroundColor: "#13293d", margin: "0 auto" }}>
        {/* <Toolbar /> */}
        <Grid
          sx={{ margin: "0 auto", maxWidth: "lg", mx: "auto", padding: 4 }}
          container
          justifyContent="center"
          alignItems="center"
          maxWidth="1400px"
        >
          <Grid padding={2} item md={6} xs={12}>
            <Image src="/photos/IN-DI-BININGIN.PNG" />
          </Grid>
          <Grid
            padding={2}
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            item
            md={6}
            xs={12}
          >
            <Grid item>
              <Typography
                variant="h2"
                align="center"
                fontWeight="bold"
                fontFamily="Bebas Neue"
              >
                Some Title
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center" variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, tempore. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eos id reiciendis voluptas suscipit molestias
                ut ipsam sit sint perspiciatis perferendis. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Aut numquam ipsam
                molestiae tempore perferendis, facilis corporis officiis
                aliquam, veritatis eveniet omnis voluptatum voluptatibus ex
                inventore optio, voluptate repellendus alias. Ipsum rem ad
                perferendis maxime fugiat suscipit sunt distinctio iure
                obcaecati?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Wave
          style={{
            position: "relative",
            left: "0",
            height: "200px",
            bottom: '-10px'
          }}
          fill="white"
          paused={false}
          options={{
            height: 100,
            amplitude: 30,
            speed: 0.3,
            points: 5,
          }}
        />
      </section>
      <Box>
        <Grid
          boxSizing={"border-box"}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding={2}
          maxWidth="1400px"
          margin="0 auto"
        >
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            padding={2}
          >
            <Grid item md={6} xs={12}>
              <Typography
                align="center"
                variant="h3"
                color="#13293d"
                fontWeight="bold"
                fontFamily="Bebas Neue"
              >
                Cluj Trip!
              </Typography>
              <Typography
                variant="body1"
                fontFamily="Bebas Neue"
                align="center"
                color="#13293d"
              >
                10-May-2022 - 17-May-2022
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Image src="/photos/HERR-WINTER.png" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="#13293d"
              maxWidth="800px"
              variant="body1"
              align="center"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea labore
              et blanditiis tenetur totam vitae dolorum, at saepe corrupti
              facere eveniet consequatur quas eius, quae iure aut atque
              laboriosam quia! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Esse modi dignissimos enim saepe dolores nihil
              dolorum id, blanditiis reiciendis nulla.
            </Typography>
          </Grid>
        </Grid>
        <Wave
          style={{
            marginTop: "100px",
            position: "relative",
            left: "0",
            bottom: "-40px",
          }}
          fill="#13293d"
          paused={false}
          options={{
            height: 0,
            amplitude: 35,
            speed: 0.1,
            points: 5,
          }}
        />
      </Box>
      <Box sx={{ backgroundColor: "#13293d" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding={2}
          boxSizing="border-box"
          maxWidth="1400px"
          margin="0 auto"
        >
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            padding={4}
          >
            <Grid item md={6} xs={12}>
              <Image src="/photos/DEUTSCH.png" />
            </Grid>
            <Grid padding={2} item md={6} xs={12}>
              <Typography
                align="center"
                variant="h3"
                fontWeight="bold"
                fontFamily="Bebas Neue"
              >
                Mannheim Trip!
              </Typography>
              <Typography
                variant="body1"
                fontFamily="Bebas Neue"
                align="center"
              >
                10-July-2022 - 17-July-2022
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography maxWidth="800px" variant="body1" align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea labore
              et blanditiis tenetur totam vitae dolorum, at saepe corrupti
              facere eveniet consequatur quas eius, quae iure aut atque
              laboriosam quia! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Esse modi dignissimos enim saepe dolores nihil
              dolorum id, blanditiis reiciendis nulla.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
