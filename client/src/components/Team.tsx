import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { ITeamMember } from "../types/team";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";

interface ITeamProps {
  team: ITeamMember[];
}

const TeamMember = ({ teamMember }: { teamMember: ITeamMember }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
      width="300px"
      gap={1}
    >
      <Avatar
        alt={teamMember.name}
        src={teamMember.photo}
        sx={{ width: 150, height: 150, margin: "auto" }}
      />
      <Typography variant="h6" align="center">
        {teamMember.name}
      </Typography>
      <Typography variant="body1" align="center">
        {teamMember.description}
      </Typography>
      <Box
        gap={2}
        display="flex"
        flexDirection="row"
        alignContent="center"
        justifyContent="center"
      >
        {teamMember.social.map((social, index) => {
          return (
            <Avatar
              key={teamMember.name + index}
              alt={teamMember.name}
              src={social.icon}
              sx={{ width: 50, height: 50, cursor: "pointer" }}
              onClick={() => {
                window.open(social.url, "_blank");
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export const Team = ({ team }: ITeamProps) => {
  return (
    <Box padding={4} marginTop={10}>
      <Typography variant="h3" align="center" fontFamily="Anton">
        Our Team
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        padding={4}
      >
        {team.map((teamMember, index) => (
          <TeamMember teamMember={teamMember} />
        ))}
      </Box>
    </Box>
  );
};
