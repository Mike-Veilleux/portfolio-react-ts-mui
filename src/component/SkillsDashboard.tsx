import { Box, LinearProgress, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ISkillData } from "../interfaces/interfaces";

type SkillsDashboardProps = {
  data: ISkillData[];
};

const SkillsDashboard = ({ data }: SkillsDashboardProps) => {
  const renderSkills = data.map((skill) => {
    return (
      <Stack direction={"column"}>
        <Typography color="text.primary">{skill.name}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", width: "500px" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              color={"secondary"}
            />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography color="text.primary">{`${skill.level}%`}</Typography>
          </Box>
        </Box>
      </Stack>
    );
  });

  return <>{renderSkills}</>;
};

export default SkillsDashboard;
