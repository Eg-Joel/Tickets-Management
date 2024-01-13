import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import TicketDetail from "../components/TicketDetail";
import Attachments from "../components/Attachments";
import Comments from "../components/Comments";

function TicketDetails() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <Typography variant="h5" style={{}}>
          Tickets
        </Typography>

        <Typography variant="caption"  style={{color:'gray' ,display:'flex',alignItems:"center",gap:8,fontSize:13,marginTop:4}}>
            TicketDeatils
        </Typography>
      </Box>

      <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 12, sm: 12, md: 8 }}
      >   
       <Grid xs={12} sm={12} md={5}>
        <TicketDetail/>
        </Grid>
        <Grid xs={12} sm={12} md={3}>
       <Attachments/>
        </Grid>
      
      <Grid xs={12} sm={12} md={5}>
      <Comments/>
      </Grid>
      </Grid>
      </Box>
    </Box>
  );
}

export default TicketDetails;
