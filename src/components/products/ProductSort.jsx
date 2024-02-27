import React, { useState } from "react";
import "./Product.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  ListItem,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ProductSort = () => {
  const mainArr = [
    "Lifestyle",
    "Jordan",
    "Running",
    "Basketball",
    "Training & Gym",
    "Soccer",
    "Skateboarding",
    "Football",
    "Baseball",
    "Golf",
    "Nike By You",
    "Boots",
    "Tennis",
    "Track & Field",
    "Sandals & Slides",
  ];

  const sale = ["Members Save an    Extra 25% Off", "Sale"];

  const priceArr = [
    "$0 - $25",
    "$25 - $50",
    "$50 - $100",
    "$100 - $150",
    "Over $150",
  ];
  const gender = ["Men", "Women", "Unisex"];
  const kids = ["Boys", "Girls"];

  const sizeArr = [
    1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,
    10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17,
  ];

  const productArr = ["40% Off and Up", "30% Off and Up", "20% Off and Up"];

  const colorArr = [
    {
      colors: "black",
      text: "Black",
    },
    {
      colors: "blue",
      text: "Blue",
    },
    {
      colors: "brown",
      text: "Brown",
    },
    {
      colors: "green",
      text: "Green",
    },
    {
      colors: "grey",
      text: "Grey",
    },
    {
      colors: "black",
      text: "Multi-Color",
    },
    {
      colors: "orange",
      text: "Orange",
    },
    {
      colors: "pink",
      text: "Pink",
    },
    {
      colors: "purple",
      text: "Purple",
    },
    {
      colors: "red",
      text: "Red",
    },
    {
      colors: "white",
      text: "White",
      border: "0.5px solid gray",
    },
    {
      colors: "yellow",
      text: "Yellow",
    },
  ];

  const athletesArr = [
    "Nike Spotswear",
    "Jordan",
    "Nike By You",
    "ACG",
    "Nike Lab",
    "Converse",
  ];

  const shoesArr = ["Platforms", "Boots"];

  const sports = [
    "Lifestyle",
    "Running",
    "Training & Gym",
    "Basketball",
    "+More",
  ];

  const collection = [
    "Nike Dunk",
    "Air Force 1",
    "Air Max",
    "Alpha Huareche",
    "Blazer",
    "Bruin",
    "Cortez",
    "Elite",
    "Huarache",
    "Mercurial",
    "Metcon",
    "Monarch",
    "Nike Free RN",
    "Pegasus",
    "Phantom",
    "Presto",
    "Roshe",
    "Tiempo",
    "Vomero",
    "Zoom Rival",
    "Alphafly",
  ];

  const air_maxArr = [
    "Air Max 1",
    "Air Max 90",
    "Air Max 95",
    "Air Max 97",
    "Air Max 270",
    "Air Max 2017",
    "Air Max Plus",
    "Air Max Thea",
    "Vapor Max",
  ];

  const athletesAr = [
    "LeBron James",
    "Kevin Durant",
    "Ja Morant",
    "Cristiano Ronaldo ",
    "Stefan Janoski",
    "Serena Filliams",
    "Rafail Nadar",
    "Naomi Osaka",
    "Kylian Mbappe",
    "Russell Westbrook",
    "Giannis",
    "Nyjah Huston",
    "Ken Griffey Jr.",
    "Jayson Tatum",
    "A'ja Wilson",
    "Bo Jaskson",
  ];

  const technologyArr = [
    "Nike FlyEase",
    "All Conditions",
    "Control",
    "Nike Anti-Clog",
    "Nike Flyknit",
    "Nike Flymesh",
    "Nike Flyweave",
    "Nike Flywire",
    "GORE-TEX",
    "Nike Lunarlon",
    "Nike Max Air",
    "Nike Air",
    "Nike Free",
    "Nike React",
    "NikeSkin",
    "Tuned Air",
    "Nike Zoom Air",
    "Nike ZoomX",
  ];

  const heigthArr = ["Low Top", "Mid Top", "High Top"];
  const close = ["Slip On", "Zipper On", "Strap", "Toggle"];
  const widthArr = ["Regular", "Wide", "Extra Wide"];

  const surfaceArr = [
    "Artificial Grass",
    "Dirt",
    "Firm Ground",
    "Grass",
    "Hard Court",
    "Indoor Court",
    "Road",
    "Track",
    "Trail",
    "Turf",
  ];

  const best = ["Wet Weather Conditions", "Dry Weather Conditions"];

  const materialArr = ["Canvas", "Fleece", "Leather", "Synthetics", "Velvet"];

  const featuresArr = [
    "Ghost Lace System",
    "Reflective",
    "Spikeless",
    "Water Resistant",
    "Waterproof",
    "Wind Resistant",
  ];

  const benefitsArr = [
    "Easy On & Off",
    "Natural Motion",
    "Reflectivity",
    "Ultra Comfort",
  ];

  const collabo = ["Nike x MMW", "Off-White", "Stussy", "AMBUSH"];

  //! State
  const [shop, setShop] = useState(false);
  //! State

  return (
    <Box id="side_bar">
      <Box className="side_bar">
        {mainArr.map((el, index) => (
          <ListItem
            key={index}
            sx={{
              fontSize: "16px",
              p: 0,
              m: "17px 0",
              fontWeight: "bold",
            }}
          >
            {el}
          </ListItem>
        ))}
        <Box sx={{ padding: "40px 0" }}>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Sale & Offers
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {sale.map((el, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontSize: "16px",
                    p: 0,
                    m: 0,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                  {el}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Shop by Price
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {shop
                ? priceArr.map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))
                : priceArr.slice(0, 4).map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))}
              <span onClick={() => setShop(!shop)}>
                {shop ? "- Less" : "+ More"}
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Gender
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {gender.map((el, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontSize: "16px",
                    p: 0,
                    m: 0,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                  {el}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Kids
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {kids.map((el, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontSize: "16px",
                    p: 0,
                    m: 0,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                  {el}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Size
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {sizeArr.map((el, index) => (
                <Button
                  key={index}
                  sx={{
                    border: "1px solid gray",
                    color: "#0b1f3f",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {el}
                </Button>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Product discounts
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {productArr.map((el, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontSize: "16px",
                    p: 0,
                    m: 0,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                  {el}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Color
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {colorArr.map((el, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: "10px 0",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      background: `${el.colors}`,
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      m: "0 15px",
                      border: `${el.border}`,
                    }}
                  ></Box>

                  <Typography
                    sx={{
                      fontSize: "13px",
                      width: "35px",
                      textAlign: "center",
                    }}
                  >
                    {el.text}
                  </Typography>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Brand
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {shop
                ? athletesArr.map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))
                : athletesArr.slice(0, 4).map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))}
              <span onClick={() => setShop(!shop)}>
                {shop ? "- Less" : "+ More"}
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Shoes
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {shoesArr.map((el, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontSize: "16px",
                    p: 0,
                    m: 0,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                  {el}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Sports & Activities
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {sports.map((el, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontSize: "16px",
                    p: 0,
                    m: 0,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                  {el}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Collections
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {shop
                ? collection.map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))
                : collection.slice(0, 4).map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))}
              <span onClick={() => setShop(!shop)}>
                {shop ? "- Less" : "+ More"}
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Tehnology
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {shop
                ? technologyArr.map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))
                : technologyArr.slice(0, 4).map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))}
              <span onClick={() => setShop(!shop)}>
                {shop ? "- Less" : "+ More"}
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Closure Type
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {close.map((el, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontSize: "16px",
                    p: 0,
                    m: 0,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                  {el}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Athletes
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {shop
                ? athletesAr.map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))
                : athletesAr.slice(0, 4).map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))}
              <span onClick={() => setShop(!shop)}>
                {shop ? "- Less" : "+ More"}
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Air Max
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {shop
                ? air_maxArr.map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))
                : air_maxArr.slice(0, 4).map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))}
              <span onClick={() => setShop(!shop)}>
                {shop ? "- Less" : "+ More"}
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Shose Heigth
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {heigthArr.map((el, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontSize: "16px",
                    p: 0,
                    m: 0,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                  {el}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Width
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {widthArr.map((el, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontSize: "16px",
                    p: 0,
                    m: 0,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                  {el}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Surface
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {shop
                ? surfaceArr.map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))
                : surfaceArr.slice(0, 4).map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))}
              <span onClick={() => setShop(!shop)}>
                {shop ? "- Less" : "+ More"}
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Best For
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {best.map((el, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontSize: "16px",
                    p: 0,
                    m: 0,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                  {el}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Material
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {shop
                ? materialArr.map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))
                : materialArr.slice(0, 4).map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))}
              <span onClick={() => setShop(!shop)}>
                {shop ? "- Less" : "+ More"}
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Features
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {shop
                ? featuresArr.map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))
                : featuresArr.slice(0, 4).map((el, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontSize: "16px",
                        p: 0,
                        m: 0,
                        width: "200px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                      {el}
                    </ListItem>
                  ))}
              <span onClick={() => setShop(!shop)}>
                {shop ? "- Less" : "+ More"}
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Benefits
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {benefitsArr.map((el, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontSize: "16px",
                    p: 0,
                    m: 0,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                  {el}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              p: 0,
              boxShadow: "none",
              borderTop: "1px solid gray",
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "50%",
                  flexShrink: 0,
                  color: "#0b1f3f",
                  fontWeight: "bold",
                  padding: "3px 0",
                  width: "200px",
                }}
              >
                Collaborator
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
              }}
            >
              {collabo.map((el, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontSize: "16px",
                    p: 0,
                    m: 0,
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                  {el}
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSort;
