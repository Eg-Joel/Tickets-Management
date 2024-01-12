import React from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import TicketListing from "./TicketListing";
import TicketDetails from "./TicketDetails";

function Home() {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
    
          bgcolor: "#f4f5f7",
          margin: 0,
          
          padding: '15px 15px '
        }}
      >
        <Grid container>
          <TicketDetails />
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
