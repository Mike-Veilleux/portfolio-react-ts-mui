import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import ProjectCard from "../component/ProjectCard";
import { projectData } from "../userData/ProjectsData";

const Projects = () => {
  const renderCards = projectData.map((data, index) =>
    ProjectCard({ data, index })
  );

  return (
    <Fragment>
      <Grid container justifyContent={"center"} spacing={4} padding={2}>
        {renderCards}
      </Grid>
    </Fragment>
  );
};

export default Projects;
