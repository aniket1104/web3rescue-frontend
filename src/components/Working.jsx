import React from "react";
import { Box, Typography } from "@mui/material";
import Frame1 from "../assets/images/Frame1.png";
import Frame2 from "../assets/images/Frame2.png";
import Frame3 from "../assets/images/Frame3.png";

// const headings = ["Enter Details", "Sign Transactions", "Pay & Rescue"];
// const subHeadings = ["Enter your compromised address details and asset to rescue", "FAQs"];

const Working = () => {
  return (
    <Box sx={{ px: 12, py: 5 }}>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "PatsySans",
            color: "#FFF",
            fontSize: "4rem",
            textAlign: "center",
          }}
        >
          How it works?
        </Typography>
        <Typography
          variant="p1"
          sx={{
            textAlign: "center",
            display: "block",
            fontSize: "1.1rem",
            fontFamily: "Montserrat",
            color: "#FFF",
            mt: 2,
          }}
        >
          Making use of Flashbots MEV to rescue ERC20 Tokens ans NFT's to your
          address instantly!
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ mt: 6, px: 2 }}>
          <Box
            sx={{
              px: 3,
              py: 3,
              maxWidth: "400px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage:
                    "linear-gradient(180deg, rgba(236,20,173,0.1), rgba(21,6,51,0.66))",
                  borderLeft: "3px solid #C114E8",
                  borderBottom: "3px solid #C114E8",
                  borderTop: "3px solid #C114E8",
                }}
              >
                <img src={Frame1} alt="Frame1" style={{ height: "70px" }} />
              </Box>
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "PatsySans",
                color: "#FFF",
                fontSize: "1.6rem",
                textAlign: "center",
                mt: 4,
                mb: 2,
              }}
            >
              Enter Details
            </Typography>
            <Typography
              variant="p1"
              sx={{
                textAlign: "center",
                display: "block",
                fontSize: "1.1rem",
                fontFamily: "Montserrat",
                color: "#FFF",
              }}
            >
              Enter your compromised address details and asset to rescue
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: "250px",
                  height: "15px",
                  borderRadius: "50%",
                  background: "#C414E4",
                  mt: 6,
                  filter: "blur(20px)",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: 8, mt: 6 }}>
          <Box
            sx={{
              px: 3,
              py: 3,
              maxWidth: "400px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage:
                    "linear-gradient(180deg, rgba(236,20,173,0.1), rgba(21,6,51,0.66))",
                  borderLeft: "3px solid #C114E8",
                  borderBottom: "3px solid #C114E8",
                  borderTop: "3px solid #C114E8",
                }}
              >
                <img src={Frame2} alt="Frame2" style={{ height: "70px" }} />
              </Box>
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "PatsySans",
                color: "#FFF",
                fontSize: "1.6rem",
                textAlign: "center",
                mt: 4,
                mb: 2,
              }}
            >
              Sign Transaction
            </Typography>
            <Typography
              variant="p1"
              sx={{
                textAlign: "center",
                display: "block",
                fontSize: "1.1rem",
                fontFamily: "Montserrat",
                color: "#FFF",
              }}
            >
              Manually sign raw Transaction on frontend for that rescue token
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: "250px",
                  height: "15px",
                  borderRadius: "50%",
                  background: "#C414E4",
                  mt: 6,
                  filter: "blur(20px)",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: 8, mt: 6 }}>
          <Box
            sx={{
              px: 3,
              py: 3,
              maxWidth: "400px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage:
                    "linear-gradient(180deg, rgba(236,20,173,0.1), rgba(21,6,51,0.66))",
                  borderLeft: "3px solid #C114E8",
                  borderBottom: "3px solid #C114E8",
                  borderTop: "3px solid #C114E8",
                }}
              >
                <img src={Frame3} alt="Frame3" style={{ height: "80px" }} />
              </Box>
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "PatsySans",
                color: "#FFF",
                fontSize: "1.6rem",
                textAlign: "center",
                mt: 4,
                mb: 2,
              }}
            >
              Pay & Rescue
            </Typography>
            <Typography
              variant="p1"
              sx={{
                textAlign: "center",
                display: "block",
                fontSize: "1.1rem",
                fontFamily: "Montserrat",
                color: "#FFF",
              }}
            >
              Pay 0.1 ETH and Rescue asset Instantly
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: "250px",
                  height: "15px",
                  borderRadius: "50%",
                  background: "#C414E4",
                  mt: 6,
                  filter: "blur(20px)",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Working;
