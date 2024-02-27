import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

const ProductList = () => {
  const { data, readProduct, currenPage, sortByPrice } = useProduct();

  useEffect(() => {
    readProduct();
    sortByPrice();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      {data.length > 0 ? (
        currenPage().map((el, index) => <ProductCard el={el} key={index} />)
      ) : (
        <h1>Loading....</h1>
      )}
    </Box>
  );
};

export default ProductList;
