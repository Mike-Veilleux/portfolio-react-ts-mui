import { Typography } from "@mui/material";
type ParagraphProps = {
  text: string[];
};

const Paragraph = ({ text }: ParagraphProps) => {
  const renderCardBody = text.map((textChunk) => {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="justify"
        lineHeight={2}
        sx={{ marginBottom: 2 }}
      >
        {textChunk}
      </Typography>
    );
  });

  return <>{renderCardBody}</>;
};

export default Paragraph;
