import { Box } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Description = [
  {
    heading: "Q1. How we help against SweeperBots?",
    subheading:
      "We beat the sweeper bots via private transactions, they won't ever know how we save your assets! Transactions are sent directly to miners and skip Memepool.",
  },
  {
    heading: "Q2. What all assets can be rescued?",
    subheading:
      "Any ERC20 tokens or NFT's that haven't left your wallet can be rescued, for any staked assets, reach out via chat for support.",
  },
  {
    heading: "Q3. Why Do i need to enter private key?",
    subheading:
      "We need the private keys to save your assets, but for your safety, we never even save it in our database. Check our open sourced code here https://github.com/web3rescue/Frontend-web3rescue.com to see how it's all done.",
  },
  {
    heading: "How much time does it take to rescue?",
    subheading:
      "We rescue your assets as fast as possible, max about 30-60 seconds after rescue payment",
  },
  {
    heading: "What is the charge per rescue?",
    subheading:
      "We charge 0.1 ETH for any rescue amount, a small price to pay to save your assets. Check this on why payment is required https://web3rescue.tawk.help/article/why-01-eth-payment-or-payment-of-gas-fees-required",
  },
];

export default function SimpleAccordion() {
  return (
    <Box sx={{ px: 12, py: 5 }}>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "PatsySans",
          color: "#FFF",
          fontSize: "4rem",
          textAlign: "center",
          mb: 4,
        }}
      >
        FAQ's
      </Typography>
      <Box className="root" sx={{ mx: 6 }}>
        {Description.map((e) => {
          return (
            <Accordion
              sx={{
                my: 4,
                background: "#150633",
                border: "1px solid #FFF",
              }}
              style={{
                borderRadius: "20px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                  background: "linear-gradient(90deg, #BE14EC, #EF14A9)",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "PatsySans",
                    color: "#FFF",
                    fontSize: "1.5rem",
                  }}
                >
                  {e.heading}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ py: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    color: "#FFF",
                  }}
                >
                  {e.subheading}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
}
