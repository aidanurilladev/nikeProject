import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import NavbarTop from "../Navbar/NavbarTop";
import NavbarTest from "../Navbar/NavbarTest";

const ProductDetails = () => {
  const { oneProduct, getOneProduct, addBasket, basket } = useProduct();
  const [click, setClick] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  const navigate = useNavigate();

  function handleBasketChange() {
    basket.forEach((el) => {
      if (el.id === oneProduct.id) {
        setClick(false);
      }
    });
    addBasket(oneProduct);
  }

  return (
    <>
      <NavbarTop />
      <NavbarTest />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Box>
          <img
            style={{ width: "480px", height: "400px" }}
            src={oneProduct.image}
            alt=""
          />
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              {oneProduct.name}
            </Typography>
            <Typography sx={{ color: "gray" }}>
              {oneProduct.type}'s Shoes
            </Typography>
            <Typography>${oneProduct.price}</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Button onClick={() => navigate("/")}>
                Continue to shopping
              </Button>
              {click ? (
                <>
                  <Button
                    onClick={() => {
                      handleBasketChange();
                    }}
                  >
                    add to basket
                  </Button>
                </>
              ) : (
                <Button disabled>add to basket</Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetails;
