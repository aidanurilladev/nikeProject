// import React, { useEffect } from "react";
// import { useProduct } from "../../context/ProductContext";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export default function BasketList() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "60vh",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "center",
//           gap: "30px",
//         }}
//       >
//         {/* {basket.map((el) => (
//           <Card sx={{ width: "300px" }}>
//             <CardMedia
//               sx={{ height: 145 }}
//               image={el.image}
//               title="green iguana"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {el.name}
//               </Typography>
//               <Typography gutterBottom variant="body2" component="div">
//                 {el.price}
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Share</Button>
//               <Button  onClick={()=>{
                
//                 navigate(`/cart/${el.id}`);
//               }} size="small">Learn More</Button>
//             </CardActions>
//           </Card>
//         ))} */}
//       </Box>
//     </Box>
//   );
// }
