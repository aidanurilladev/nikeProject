import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import NavbarTest from "../Navbar/NavbarTest";
import NavbarTop from "../Navbar/NavbarTop";
import { useProduct } from "../../context/ProductContext";

const Admin = () => {
  const { addProduct } = useProduct();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    type: "",
    image: "",
  });

  function handleInput(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleCreateProduct() {
    addProduct(product);
  }
  return (
    <>
      <Box className="back">
        <NavbarTop />
        <NavbarTest />
        <Box
          sx={{
            marginTop: "150px",
            marginLeft: "700px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "500px",
            height: "400px",
            background: "#fff",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              width: "200px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <TextField
              sx={{ width: "380px" }}
              onChange={handleInput}
              name="name"
              id="outlined-basic"
              label="name"
              variant="outlined"
            />
            <TextField
              sx={{ width: "380px" }}
              onChange={handleInput}
              name="price"
              id="outlined-basic"
              label="price"
              variant="outlined"
            />
            <TextField
              sx={{ width: "380px" }}
              onChange={handleInput}
              name="type"
              id="outlined-basic"
              label="type"
              variant="outlined"
            />
            <TextField
              sx={{ width: "380px" }}
              onChange={handleInput}
              name="image"
              id="outlined-basic"
              label="image"
              variant="outlined"
            />
            <Box>
              <Button
                sx={{
                  fontWeight: "bold",
                  background: "blueviolet",
                  "&:hover": { background: "#000" },
                }}
                onClick={handleCreateProduct}
                variant="contained"
              >
                Add New Shoes
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
