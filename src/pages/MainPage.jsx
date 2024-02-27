import React from "react";
import NavbarTop from "../components/Navbar/NavbarTop";
import NavbarTest from "../components/Navbar/NavbarTest";
import ProductSort from "../components/products/ProductSort";
import NavbarSort from "../components/Navbar/NavbarSort";
import ProductList from "../components/products/ProductList";
import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  return (
    <>
      <NavbarTop />
      <NavbarTest />
      <NavbarSort />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <ProductSort />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
          }}
        >
          <ProductList />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MainPage;
