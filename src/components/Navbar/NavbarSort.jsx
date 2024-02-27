import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {
  Box,
  FormControl,
  FormControlLabel,
  Menu,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import PaginationProduct from "../products/PaginationProduct";
import { useProduct } from "../../context/ProductContext";

const NavbarSort = () => {
  const { fetchByParams, readProduct, sortByPrice } = useProduct();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElPrice, setAnchorElPrice] = useState(null);

  useEffect(() => {
    readProduct();
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuPrice = (event) => {
    setAnchorElPrice(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElPrice(null);
  };

  return (
    <Box id="navbar_sort">
      <Box className="container">
        <Box className="navbar_sort">
          <Typography variant="h6">All Shoes(999)</Typography>
          <Box className="navbar_sort_box">
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PaginationProduct />
            </Box>
            <Typography onClick={handleMenuPrice} sx={{ width: "190px" }}>
              Sort by Price
            </Typography>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElPrice}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElPrice)}
              onClose={handleClose}
            >
              <FormControl sx={{ p: "12px" }}>
                <RadioGroup
                  onChange={(e) => sortByPrice(e.target.value)}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all"
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="All"
                    onClick={handleClose}
                  />
                  <FormControlLabel
                    value="high_low"
                    control={<Radio />}
                    label="High-Low"
                    onClick={handleClose}
                  />
                  <FormControlLabel
                    value="low_high"
                    control={<Radio />}
                    label="Low-High"
                    onClick={handleClose}
                  />
                </RadioGroup>
              </FormControl>
            </Menu>
            <Typography sx={{ width: "200px" }} onClick={handleMenu}>
              Sort by Type
            </Typography>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <FormControl sx={{ p: "12px" }}>
                <RadioGroup
                  onChange={(e) => fetchByParams("type", e.target.value)}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all"
                  name="sort"
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="All"
                    onClick={handleClose}
                  />
                  <FormControlLabel
                    value="men"
                    control={<Radio />}
                    label="Men"
                    onClick={handleClose}
                  />
                  <FormControlLabel
                    value="women"
                    control={<Radio />}
                    label="Women"
                    onClick={handleClose}
                  />
                  <FormControlLabel
                    value="kids"
                    control={<Radio />}
                    label="Kids"
                    onClick={handleClose}
                  />
                </RadioGroup>
              </FormControl>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarSort;
