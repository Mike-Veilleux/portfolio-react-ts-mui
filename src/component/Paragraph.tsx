import { Typography } from "@mui/material";
type ParagraphProps = {
  text: string[];
};

const Paragraph = ({ text }: ParagraphProps) => {
  const renderCardBody = text.map((textChunk, index) => {
    return (
      <Typography
        key={index}
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
