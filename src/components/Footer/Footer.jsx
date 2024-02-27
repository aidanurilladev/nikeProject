import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddLinkIcon from "@mui/icons-material/AddLink";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          cursor: "pointer",
          marginTop: "100px",
          background: "#000",
          padding: "40px 0 20px 100px",
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            color: "#fff",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            gap: "13px",
          }}
        >
          <Typography variant="h6">RESOURCES</Typography>
          <Typography variant="h6">GIFT CARDS</Typography>
          <Typography variant="h6">FIND A STORE</Typography>
          <Typography variant="h6">BECOME A MEMBER</Typography>
          <Typography variant="h6">NIKE X NBA</Typography>
          <Typography variant="h6">NIKE U JOURNAL</Typography>
          <Typography variant="h6">Site Feedback</Typography>
        </Box>
        <Box
          sx={{
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h6">HELP</Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Get Help
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Order Status
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Shipping end Delivery
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Returns
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Order Cancellation
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Payment Options
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Gift Card Balance
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Contact Us
          </Typography>
        </Box>
        <Box
          sx={{
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h6">COMPANY</Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            About Nike
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            News
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Careers
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Investors
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Purpose
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Sustainability
          </Typography>
        </Box>
        <Box
          sx={{
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h6">PROMOTIONS & DISCOUNTS</Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Student
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Military
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Teacher
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Firs Responders & Medical Professionals
          </Typography>
          <Typography sx={{ color: "grey", "&:hover": { color: "#fff" } }}>
            Birthday
          </Typography>
        </Box>
        <Box>
          <IconButton
            sx={{
              background: "grey",
              "&:hover": { background: "#fff" },
              marginRight: "15px",
            }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            sx={{
              background: "grey",
              "&:hover": { background: "#fff" },
              marginRight: "15px",
            }}
          >
            <FacebookOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              background: "grey",
              "&:hover": { background: "#fff" },
              marginRight: "15px",
            }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            sx={{
              background: "grey",
              "&:hover": { background: "#fff" },
              marginRight: "15px",
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          sx={{
            color: "grey",
            "&:hover": { color: "#fff" },
            marginRight: "30px",
          }}
        >
          Guides
        </Typography>
        <Typography
          sx={{
            color: "grey",
            "&:hover": { color: "#fff" },
            marginRight: "30px",
          }}
        >
          Terms of Sale
        </Typography>
        <Typography
          sx={{
            color: "grey",
            "&:hover": { color: "#fff" },
            marginRight: "30px",
          }}
        >
          Terms of Use
        </Typography>
        <Typography
          sx={{
            color: "grey",
            "&:hover": { color: "#fff" },
            marginRight: "30px",
          }}
        >
          Nike Privacy Policy
        </Typography>
        <Typography
          sx={{
            color: "grey",
            "&:hover": { color: "#fff" },
            marginRight: "150px",
            display: "flex",
            gap: "6px",
          }}
        >
          <AddLinkIcon /> Your Privacy Choices
        </Typography>
      </Box>

      <Box
        sx={{
          padding: "10px 0 10px 0",
          background: "#000",
          width: "1904.8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{ marginLeft: "230px", display: "flex", alignItems: "center" }}
        >
          <Typography
            sx={{
              color: "#fff",
              display: "flex",
              gap: "10px",
            }}
          >
            <FmdGoodIcon /> United States
          </Typography>
          <Typography
            sx={{
              color: "grey",
              marginLeft: "35px",
            }}
          >
            @2023 Nike, Inc. All Rights Reserved
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              marginRight: "150px",
              color: "grey",
              "&:hover": { color: "#fff" },
            }}
          >
            CA Supply Chains Act
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
