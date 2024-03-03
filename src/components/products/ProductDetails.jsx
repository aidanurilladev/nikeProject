import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import NavbarTop from "../Navbar/NavbarTop";
import NavbarTest from "../Navbar/NavbarTest";
import { useCardContext } from "../../context/CardContext";

const ProductDetails = () => {
  const { oneProduct, getOneProduct, addBasket, basket, checkBasketProduct } =
    useProduct();

  const { addProductToCard, checkProductInCard } = useCardContext();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  const navigate = useNavigate();

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
            style={{ width: "450px", height: "400px" }}
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
              
              {checkProductInCard(oneProduct.id) ? (
                <>
                  <Button onClick={()=>navigate("/")}>Continue shopping</Button>
                  <Button disabled>add to basket</Button>
                </>
              ) : (
                <Button onClick={() => addProductToCard(oneProduct)}>
                  add to basket
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetails;
