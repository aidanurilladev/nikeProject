import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import NavbarTest from "../Navbar/NavbarTest";
import NavbarTop from "../Navbar/NavbarTop";
import { useProduct } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { getOneProduct, oneProduct, editProduct } = useProduct();
  const { id } = useParams();
  const nav = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    type: "",
    image: "",
  });

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  function handleInput(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleSaveProduct() {
    editProduct(id, product);
  }

  return (
    <>
      <NavbarTop />
      <NavbarTest />
      <Box
        sx={{
          margin: "100px auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
            value={product.name}
          />
          <TextField
            sx={{ width: "380px" }}
            onChange={handleInput}
            name="price"
            id="outlined-basic"
            label="price"
            variant="outlined"
            value={product.price}
          />
          <TextField
            sx={{ width: "380px" }}
            onChange={handleInput}
            name="type"
            id="outlined-basic"
            label="type"
            variant="outlined"
            value={product.type}
          />
          <TextField
            sx={{ width: "380px" }}
            onChange={handleInput}
            name="image"
            id="outlined-basic"
            label="image"
            variant="outlined"
            value={product.image}
          />
          <Box>
            <Button
              sx={{
                fontWeight: "bold",
                background: "blueviolet",
                "&:hover": { background: "#000" },
              }}
              onClick={() => {
                nav("/");
                handleSaveProduct();
              }}
              variant="contained"
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EditProduct;
