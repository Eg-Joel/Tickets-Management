import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';


function TicketDetail() {

    
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [status, setStatus] = React.useState('10');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <Box>
    <Card>
      <CardContent>
      <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
  }}
>
  <Typography variant="body2" style={{}}>
    Payout not received since last 3 months
  </Typography>

<Box>
<Button size="small"><KeyboardBackspaceIcon/> Back</Button>
<FormControl sx={{ minWidth: 110,}} size="small">
<InputLabel id="demo-select-small-label" sx={{ fontSize:14,}}>Watch</InputLabel>
<Select
  labelId="demo-select-small-label"
  id="demo-select-small"
  value={age}
  label="Age"
  size="small"
  sx={{ height:30,}} 
  onChange={handleChange}
>
  <MenuItem value="">

  </MenuItem>
  <MenuItem value={10}>Ten</MenuItem>
  
</Select>
</FormControl>
</Box>
</Box>

<Box>
  
     
   <Box>
   <Typography variant="subtitle1" style={{fontWeight:'lighter',color:'gray',fontSize:15,}}>
          Ticket Type :
        </Typography>

        <Typography variant="caption"  style={{color:'gray' ,display:'flex',alignItems:"center",gap:8,fontSize:14,marginTop:4}}>
          <LocalActivityIcon style={{fontSize:18,color:'#1abc9c',}}/>  Payments
        </Typography>
   </Box>
   
<Box style={{marginTop:15}}>
<Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      > 

        <Grid xs={12} sm={12} md={6}>
   <Box>
   <Typography variant="subtitle1" style={{fontWeight:'lighter',color:'gray',fontSize:15,}}>
          Reported By:
        </Typography>

        <Box sx={{display:'flex',gap:1,alignItems:"center" }}> 
                 <img
                        src='./prof1.png'
                        alt="Profile"
                        height={17}
                        style={{ borderRadius: "30px" }}
                      />
                 <Typography variant="caption"  style={{color:'gray' ,display:'flex',alignItems:"center",gap:8,fontSize:14,marginTop:4}}>
            Payments
        </Typography>
                 
                 </Box>
   </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
   <Box>
   <Typography variant="subtitle1" style={{fontWeight:'lighter',color:'gray',fontSize:15,}}>
          Assigned To:
        </Typography>

        <Box sx={{display:'flex',gap:1,alignItems:"center" }}> 
                 <img
                        src='./prof1.png'
                        alt="Profile"
                        height={17}
                        style={{ borderRadius: "30px" }}
                      />
                 <Typography variant="caption"  style={{color:'gray' ,display:'flex',alignItems:"center",gap:8,fontSize:14,marginTop:4}}>
            Payments
        </Typography>
                 
                 </Box>
   </Box>
        </Grid>

        <Grid xs={12} sm={12} md={6}>
   <Box>
   <Typography variant="subtitle1" style={{fontWeight:'lighter',color:'gray',fontSize:15,}}>
          Created On:
        </Typography>

        <Typography variant="caption"  style={{color:'gray' ,display:'flex',alignItems:"center",gap:8,fontSize:14,marginTop:4}}>
            Payments
        </Typography>
   </Box>
        </Grid>

        <Grid xs={12} sm={12} md={6}>
   <Box>
   <Typography variant="subtitle1" style={{fontWeight:'lighter',color:'gray',fontSize:15,}}>
          Created On:
        </Typography>

        <Typography variant="caption"  style={{color:'gray' ,display:'flex',alignItems:"center",gap:8,fontSize:14,marginTop:4}}>
            Payments
        </Typography>
   </Box>
        </Grid>

        <Grid xs={12} sm={12} md={6}>
   <Box>
   <Typography variant="subtitle1" style={{fontWeight:'lighter',color:'gray',fontSize:15,}}>
          Status:
        </Typography>

        <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={status}
        label=""
        onChange={handleStatusChange}
        sx={{ m: 1, minWidth: 120 }} size="small"
      >
        <MenuItem value="">
        
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
   </Box>
        </Grid>

        <Grid xs={12} sm={12} md={6}>
   <Box>
   <Box>
   <Typography variant="subtitle1" style={{fontWeight:'lighter',color:'gray',fontSize:15,}}>
          Status:
        </Typography>

        <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={status}
        label=""
        onChange={handleStatusChange}
        sx={{ m: 1, minWidth: 120 }} size="small"
      >
        <MenuItem value="">
        
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
   </Box>
   </Box>
        </Grid>

        <Grid xs={12} sm={12} md={12}>
   <Box>
   <Typography variant="subtitle1" style={{fontWeight:'lighter',color:'gray'}}>
          Ticket Type :
        </Typography>

        <Typography  style={{fontWeight:'lighter',color:'gray' ,display:'flex'}}>
          <LocalActivityIcon style={{fontSize:20,color:'#1abc9c',marginRight:2}}/> Payments
        </Typography>
   </Box>
        </Grid>

        
        </Grid>
        </Box>
      
</Box>
      </CardContent>
    </Card>
  </Box>
  )
}

export default TicketDetail