import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Stack
        direction={"column"}
        alignItems={"center"}
        spacing={2}
        padding={2}
        sx={{ marginX: "auto" }}
      >
        <Outlet />
      </Stack>
    </Fragment>
  );
};

export default Layout;
