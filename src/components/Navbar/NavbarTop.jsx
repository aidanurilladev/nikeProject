import { Box, Link, Typography } from "@mui/material";
import React from "react";
import "./Navbar.css";
const NavbarTop = () => {
  return (
    <Box id="navbar_top">
      <Box className="container">
        <Box className="navbar_top">
          <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
            Find a Store
          </Link>
          <Typography>|</Typography>
          <Link sx={{ textDecoration: "none", cursor: "pointer" }}>Help</Link>
          <Typography>|</Typography>
          <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
            Join Us
          </Link>
          <Typography>|</Typography>
          <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
            Sign In
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarTop;
