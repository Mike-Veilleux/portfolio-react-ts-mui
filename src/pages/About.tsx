import { Box, Grid, LinearProgress, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { Fragment } from "react";

import Paragraph from "../component/Paragraph";
import { aboutData } from "../userData/aboutData";
import SkillsDashboard from "../component/SkillsDashboard";
import AboutDashboard from "../component/AboutDashboard";

const About = () => {
  return (
    <Fragment>
      <Stack
        display={"flex"}
        direction={"column"}
        alignItems={"center"}
        gap={5}
      >
        <AboutDashboard aboutData={aboutData} />
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={500}
          gap={1}
          alignItems={"center"}
        >
          <Typography variant="h5">Biography</Typography>
          <Paragraph text={aboutData.bio} />
        </Box>
        <Typography variant="h5">Skills</Typography>
      </Stack>
      <SkillsDashboard data={aboutData.skills} />
      {/* <div className="ratio ratio-16x9 my-3">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ct3cyovKZMM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}
    </Fragment>
  );
};

export default About;
