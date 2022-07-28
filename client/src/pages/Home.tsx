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
            <Image src="/photos/team.jpeg" />
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
              <Typography variant="h2" align="center" fontFamily="Anton">
                European Master Team Project 2022
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center" variant="h5">
                Gaining hands-on experience, working on international teams and
                adhering to agile development practice, finished executable
                project, technical knowledge.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Wave
          style={{
            position: "relative",
            left: "0",
            height: "200px",
            bottom: "-10px",
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
            mb={4}
          >
            <Grid item md={6} xs={12}>
              <Typography
                align="center"
                variant="h3"
                color="#13293d"
                fontFamily="Anton"
              >
                Cluj Trip!
              </Typography>
              <Typography
                variant="body1"
                fontFamily="Anton"
                align="center"
                color="#13293d"
              >
                10-May-2022 - 17-May-2022
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Image src="/photos/Cluj.jpeg" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="#13293d"
              maxWidth="800px"
              variant="body1"
              fontSize={20}
            >
              For one week in May, we worked together in Cluj-Napoca. It was an
              intensive week of getting to know each other personally, working
              hard, sightseeing and also experiencing a new culture. We had the
              chance to work at the offices of MHP in downtown Cluj, where we
              enjoyed great amenities and a phenomenal view over the city.
              <br />
              <br />
              The week started with a 24h hackathon and continued with a
              traditional Romanian dinner, an explorative walk through sunny
              Cluj over the weekend, a hike in the Cheile Turzii, 9am coffee at
              MHP headquarters followed by intense hours of work, a visit of a
              football match that ended in the victory and championship of
              Cluj's local team, and evenings with music and stories in the
              heart of Cluj - these were just some of our activities together.
              <br />
              <br />
              In the end, the days seemed to go by faster than we would have
              liked, and the week concluded with a presentation of our projects
              and the results of the week at NTT DATA headquarters in front of
              sixty second-year Informatics students from Babeș-Bolyai. All in
              all, we were on our feet 24/7 but it was an amazing experience!
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
            <Grid item md={6} xs={12} mb={4}>
              <Image src="/photos/GroupPhoto.jpeg" />
            </Grid>
            <Grid padding={2} item md={6} xs={12}>
              <Typography align="center" variant="h3" fontFamily="Anton">
                Mannheim Trip!
              </Typography>
              <Typography variant="body1" fontFamily="Anton" align="center">
                10-July-2022 - 17-July-2022
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              maxWidth="800px"
              variant="body1"
              marginBottom={10}
              fontSize={20}
            >
              In July it was time for the students from Cluj to visit the
              Mannheim students. Apart from continuing to work on our projects,
              we went hiking along the Weinstrasse, visited some of Mannheim’s
              bars in the famous Jungbusch, tasted German beer and food (Mensa
              too… ), and took an evening trip to beautiful Heidelberg.
              <br />
              <br />
              Working in one of the university’s rooms in the Mannheim Castle,
              with a view to the Schloss’ greenery, made the exhausting hours of
              work pass faster. Over the course of the week, we made strong
              headway in both the theoretical foundation of our models and their
              implementation, thanks to intense mentoring by our supervisors,
              Christian Bartelt, Jannik Brinkmann, and Andrej Tschalzev. This
              would then prove to be the deciding cornerstone of the last weeks
              of sprints before the finish line in August. As we worked the days
              away, it felt increasingly incredible. Although we had just met in 
              February and had mostly interacted online, the presence of the Romanian
              team members in Mannheim seemed only natural and right. While
              everyone breathed a sigh of relief as the final version of our
              projects was uploaded to GitHub, we will certainly miss our
              colleagues, and hope to visit each other in Romania and Germany
              soon.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
