import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import avatar from "../assets/Mike_Veilleux_500px.jpg";
import { IAboutData } from "./interfaces";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type AboutDashboardProps = {
  aboutData: IAboutData;
};

const AboutDashboard = ({ aboutData }: AboutDashboardProps) => {
  const iconSize = "30px";
  return (
    <Grid
      item
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={3}
    >
      <Stack direction={"row"}>
        <Typography variant="h4" display={"flex"} alignItems={"center"} mr={2}>
          {aboutData.fullName}
        </Typography>
        <IconButton href={aboutData.gitHubUrl}>
          <GitHubIcon sx={{ fontSize: iconSize, color: "#6e5494" }} />
        </IconButton>
        <IconButton href={aboutData.urlLinkedIn}>
          <LinkedInIcon sx={{ fontSize: iconSize, color: "#0072b1" }} />
        </IconButton>
      </Stack>
      <Grid container gap={3}>
        <Grid item>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <img
              src={avatar}
              width="150px"
              alt="Mike Veilleux"
              style={{ borderRadius: "50%", boxShadow: "3px 3px 20px #505050" }}
            />
          </Box>
        </Grid>
        <Stack direction={"row"} gap={3}>
          <Stack direction={"column"} gap={1} justifyContent={"center"}>
            <Typography
              color="secondary"
              height={1}
              display={"flex"}
              alignItems={"center"}
            >
              SECTOR:
            </Typography>
            <Typography
              color="secondary"
              height={1}
              display={"flex"}
              alignItems={"center"}
            >
              LOCATION:
            </Typography>
            <Typography
              color="secondary"
              height={1}
              display={"flex"}
              alignItems={"center"}
            >
              GITHUB:
            </Typography>
            <Typography
              color="secondary"
              height={1}
              display={"flex"}
              alignItems={"center"}
            >
              CONTACT:
            </Typography>
          </Stack>
          <Stack direction={"column"} gap={1} justifyContent={"center"}>
            <Typography
              variant="body2"
              color="text.secondary"
              height={1}
              display={"flex"}
              alignItems={"center"}
            >
              {aboutData.sector}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              height={1}
              display={"flex"}
              alignItems={"center"}
            >
              {aboutData.location}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              height={1}
              display={"flex"}
              alignItems={"center"}
            >
              {aboutData.gitHubName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              height={1}
              display={"flex"}
              alignItems={"center"}
            >
              {aboutData.contact}
            </Typography>
          </Stack>
        </Stack>

        {/* </Box> */}
      </Grid>
    </Grid>
  );
};

export default AboutDashboard;
