import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProduct } from "../../context/ProductContext";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { ADMIN } from "../../helpers/const";

const ProductCard = ({ el }) => {
  const { user } = useAuthContext();
  const { deleteProduct, getOneProduct } = useProduct();
  const nav = useNavigate();
  return (
    <Box>
      <img style={{ width: "280px", height: "280px" }} src={el.image} alt="" />
      <Box>
        <Typography sx={{ fontWeight: "bold" }}>{el.name}</Typography>
        <Typography sx={{ color: "gray" }}>{el.type}'s Shoes</Typography>
        <Typography>${el.price}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {ADMIN.map((el) =>
            user && el.email === user.email ? (
              <>
                <IconButton onClick={() => deleteProduct(el.id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    getOneProduct(el.id);
                    nav(`/edit/${el.id}`);
                  }}
                >
                  <EditNoteIcon />
                </IconButton>
              </>
            ) : (
              ""
            )
          )}
          <Button 
          variant="contained"
          sx={{
            borderRadius:"20px"
          }}
            onClick={() => {
              getOneProduct(el.id);
              nav(`/details/${el.id}`);
            }}
          >
            buy
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
