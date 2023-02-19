import { Box, AppBar, Toolbar, IconButton, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo_Frenchie from "../../component/Logo_Frenchie";

const Navbar = () => {
  const logoSize = 30;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <Logo_Frenchie width={logoSize} height={logoSize} />
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/projects">
              Projects
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
