import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from '@mui/material/IconButton';
import GetAppIcon from '@mui/icons-material/GetApp';
const files = [
  { name: 'Document1.pdf', url: '/path/to/document1.pdf' },
  { name: 'Document2.docx', url: '/path/to/document2.docx' },
  // Add more files as needed
];
function Attachments() {

 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card>
        <CardContent>
          <Typography variant="h6">Attachments</Typography>

          <Box>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 12, sm: 12, md: 12 }}
            >
              <Grid xs={12} sm={12} md={12}>
              {files.map((file, index)  => (
                <Card key={index} sx={{marginBottom:2}}>
                  <CardContent>
                 <Box sx={{display:'flex',justifyContent:"space-between"}}>
                  <Box sx={{display:'flex',gap:2}}>
                  {file.name.endsWith('.pdf') ? (
                <img src="./pdf.png" alt="PDF Icon" height={50} />
              ) : (
                <img src="./docs.png" alt="DOCX Icon" height={50} />
              )}
         <Typography variant="subtitle1" style={{ marginTop: 10 }}>
                {file.name}
              </Typography>
                  </Box>
                  <Box>
                  <a href={file.url} download>
                <GetAppIcon color="primary" style={{ marginTop: 10, cursor: 'pointer' }} />
              </a>
                  </Box>
                  
                 </Box>
                  
             
                  </CardContent>
                </Card>
                  ))}
              </Grid>
              
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Attachments;
