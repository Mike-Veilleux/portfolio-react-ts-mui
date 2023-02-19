import { Box, Typography, Button, LinearProgress } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={500}
      m={5}
      gap={5}
      alignItems={"center"}
    >
      <Typography variant="h3">Hello World...</Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        lineHeight={2}
        align="justify"
      >
        August 2022, I enrolled in M.I.T. MERN fullstack program and started to
        learn about the latest web development technology including React,
        NodeJS, MongoDB and many others. This site is about my trasition from
        desktop to web developement. I chosed this minimalistic style as a
        memory of first my encounter with computers in the 80's.
      </Typography>
      <Typography sx={{ fontSize: "12px" }}> MVX 2023</Typography>
    </Box>
  );
};

export default Home;
