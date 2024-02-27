import React from "react";
import Pagination from "@mui/material/Pagination";
import { useProduct } from "../../context/ProductContext";

export default function PaginationProduct() {
  const { setPage, currenPage, count } = useProduct();

  function handleChange(p, n) {
    setPage(n);
  }

  return (
    <Pagination
      onChange={handleChange}
      count={count}
      variant="outlined"
      color="primary"
    />
  );
}
