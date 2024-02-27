import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasketList() {
  const { readBasket, basket } = useProduct();
  useEffect(() => {
    readBasket();
  }, []);
  return (
    <div>
      {basket.map((el) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={el.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {el.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
