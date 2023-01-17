import { Box, Typography, Button } from "@mui/material";
import React from "react";

const Private = () => {
  return (
    <Box sx={{ px: 12, py: 5 }}>
      <Box
        className="gradient-border2"
        sx={{
          px: 4,
          py: 4,
          borderRadius: "20px",
          mx: 6,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "PatsySans",
            color: "#FFF",
            fontSize: "4rem",
            textAlign: "center",
          }}
        >
          <span style={{ color: "#EF14A9" }}>Panic Mode</span> - Instant Rescue
          to Our &nbsp;
          <span style={{ color: "#EF14A9" }}>Safe Address</span> Sponsered Gas
        </Typography>
        <Typography
          variant="p1"
          sx={{
            textAlign: "center",
            display: "block",
            fontSize: "1.1rem",
            fontFamily: "Montserrat",
            color: "#FFF",
            my: 4,
          }}
        >
          Assets will be sent to rescueweb3.eth account and can be claimed back
          safely
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            className="custom-search"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              className="custom-search-input "
              placeholder="Enter Your Private Key"
            />
            <Button
              className="custom-search-botton"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textTransform: "none",
                fontFamily: "Montserrat",
                fontSize: "1.1rem",
                py: 2,
                px: 8,
                borderRadius: "40px",
                backgroundImage: "linear-gradient(90deg, #BE14EC, #EF14A9)",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Private;
