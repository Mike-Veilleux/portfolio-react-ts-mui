import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import { IProjectCard } from "../interfaces/interfaces";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paragraph from "./Paragraph";

type ProjectCardProps = {
  data: IProjectCard;
  index: number;
};

const ProjectCard = ({ data, index }: ProjectCardProps) => {
  return (
    <Grid item key={index}>
      <Card
        variant="outlined"
        sx={{ maxWidth: 400, boxShadow: "10px 10px 20px #454545" }}
      >
        <CardMedia
          sx={{ height: 225, objectFit: "contain", aspectRatio: "auto" }}
          image={data.urlScreenshot}
          title={data.title}
        />
        <CardContent>
          <Accordion>
            <AccordionSummary
              sx={{ diplay: "flex", flexDirection: "row-reverse", gap: "10px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paragraph text={data.body} />
            </AccordionDetails>
          </Accordion>
        </CardContent>
        <CardActions>
          {data.urlLive != "" && (
            <Button
              variant="outlined"
              //color="inherit"
              fullWidth={true}
              href={data.urlLive}
              target="_blank"
              rel="noopener"
            >
              <Typography>Live</Typography>
            </Button>
          )}
          {data.urlGit != "" && (
            <Button
              variant="outlined"
              //color="inherit"
              fullWidth={true}
              href={data.urlGit}
              target="_blank"
              rel="noopener"
            >
              <Typography>GitHub</Typography>
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
