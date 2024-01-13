import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Comments() {
  const [option, setOption] = useState("10");

  const handleStatusChange = (event) => {
    setOption(event.target.value);
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
            <Typography variant="subtitle1">Discussion (2)</Typography>

            <Box>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={option}
                label=""
                onChange={handleStatusChange}
                sx={{ m: 1, minWidth: 120, height: 25 }}
                size="small"
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>Recent</MenuItem>
                <MenuItem value={20}>Older</MenuItem>
              </Select>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Comments;
