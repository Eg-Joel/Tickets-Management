import React from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import TicketListing from "./TicketListing";


function Home() {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
    
          bgcolor: "#f4f5f7",
          margin: 0,
          minHeight: '100vh',
          padding: '15px 15px '
        }}
      >
        <Grid container>
          <TicketListing />
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
