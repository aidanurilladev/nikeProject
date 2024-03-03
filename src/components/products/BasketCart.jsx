import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useCardContext } from "../../context/CardContext";

const BasketCart = () => {
  const { readProductFromCard, card ,changeProductCount} = useCardContext();
  useEffect(() => {
    readProductFromCard();
  }, []);
  return (
    <Box className="container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            padding: "90px 0",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
            }}
            variant="h5"
          >
            Review your bag.
          </Typography>
          <Typography>Free delivery and free returns.</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {card.products.map((el) => (
              <Box
                sx={{
                  width: "550px",
                  border: "1px solid gray",
                  height: "400px",
                  borderRadius: "10px",
                  margin: "50px 0",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    padding: "30px 0",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5">{el.item.name}</Typography>
                  <Typography variant="h5">
                    {" "}
                    SubPrice : ${el.subPrice}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    left: "30px",
                  }}
                >
                  <Select
                  onChange={(e)=>changeProductCount(e.target.value , el.item.id)}
                  sx={{
                    width:"150px"
                  }}
                  value={el.count}
                    id="outlined-select-currency"
                    helperText="Please select your number "
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                  </Select>
                </Box>
                <Box
                  sx={{
                    width: "780px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <img width={250} src={el.item.image} alt="" />
                  <Button
                    sx={{
                      width: "250px",
                    }}
                    variant="contained"
                  >
                    REMOVE
                  </Button>
                </Box>
              </Box>
            ))}

            <Box
              sx={{
                position: "fixed",
                bottom: "0",
                textAlign: "center",
                width: "95%",
                background: "white",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "2px",
                  background: "gray",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 0",
                }}
              >
                <Typography variant="h6">TotalPrice : {card.totalPrice}</Typography>
                <Button
                  sx={{
                    fontWeight: "bold",
                    "&:hover": { background: "#000" },
                  }}
                  variant="contained"
                >
                  BUY NOW
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BasketCart;
