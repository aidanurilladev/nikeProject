import React, { useEffect } from "react";
import "./Navbar.css";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import logo from "../../image/Link - Nike Homepage → Img.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link, useNavigate } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import { useAuthContext } from "../../context/AuthContext";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
const NavbarTest = () => {
  const { user, logOut } = useAuthContext();
  const { searchValue, basket, readBasket } = useProduct();

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  useEffect(() => {
    readBasket();
  });

  return (
    <Box id="navbar_test">
      <Box className="container">
        <Box className="navbar_test">
          <Avatar
            sx={{ objectFit: "cover", maxWidth: "80px", width: "100%" }}
            src={logo}
            alt="logo"
          />
          <Box className="navbar_test_icons">
            <Box className="navbar_test_nav">
              <IconButton
                onClick={() => navigate("/admin")}
                sx={{ p: 0, m: 0 }}
              >
                <AdminPanelSettingsIcon />
              </IconButton>
              <Typography>New & Featured</Typography>
              <Typography onClick={() => navigate("/")}>Men</Typography>
              <Typography>Women</Typography>
              <Typography>Kids</Typography>
              <Typography>Accessories</Typography>
            </Box>
            <Box className="navbar_test_search">
              <input
                className="input"
                onChange={(e) => searchValue(e.target.value)}
                type="text"
                placeholder="Search"
                // value={search}
              />
              <IconButton>
                <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              </IconButton>
              <IconButton onClick={() => navigate("/basket")}>
                <StyledBadge badgeContent={basket.length} color="secondary">
                  <WorkOutlineIcon sx={{ fontSize: "25px" }} />
                </StyledBadge>
              </IconButton>
              <Box>
                {user ? (
                  <>
                    <Tooltip title={user.displayName}>
                      <Avatar
                        onClick={handleMenu}
                        src={user.photoURL}
                        alt={user.displayName}
                      />
                    </Tooltip>
                    {/* <Menu
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
                      <MenuItem
                        onClick={() => {
                          logOut();
                          handleClose();
                        }}
                      >
                        Log out
                      </MenuItem>
                    </Menu> */}
                  </>
                ) : (
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                )}
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
                  <Link to="/regis">
                    <MenuItem onClick={handleClose}>Sign up</MenuItem>
                  </Link>
                  <Link to="/login">
                    <MenuItem onClick={handleClose}>Sign in</MenuItem>
                  </Link>
                  <MenuItem
                    onClick={() => {
                      logOut();
                      handleClose();
                    }}
                  >
                    Log out
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarTest;
