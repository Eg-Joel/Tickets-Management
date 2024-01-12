import React from "react";
import {
  
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import Table from '@mui/joy/Table';
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Tables() {
  const data = [
    {
      id: "#1234",
      name: "John Doe",
      profilePic: "prof1.png",
      subject: "Something related issue",
      assignee: "prof2.png",
      priority: "High",
      status: "Open",
      dateOfCreation: "2022-01-01",
      dueDate: "2022-01-10",
    },
    {
      id: "#1235",
      name: "Alice Smith",
      profilePic: "prof3.png",
      subject: "Another issue",
      assignee: "prof2.png",
      priority: "Medium",
      status: "Closed",
      dateOfCreation: "2022-01-05",
      dueDate: "2022-01-15",
    },
  ];

  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <>
      <Box
        sx={{ flexGrow: 1, backgroundColor: "white", marginTop: 2, padding: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <Typography variant="h6" style={{}}>
            Manage Tickets
          </Typography>

          <Button variant="contained" startIcon={<AddCircleIcon />}>
            Add Ticket
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1,marginTop: 2,marginBottom:3 }}>
          <Typography variant="body" style={{ fontSize: 20 }}>
            Search :
          </Typography>
          <TextField
            label="Search"
            variant="outlined"
            id="outlined-size-small"
            size="small"
          />
        </Box>
      
          <Table    
          borderAxis="both"
          variant="outlined"
          size="sm"
          sx={{ textAlign: "center",  }}
          >
            
          <thead   >
              <tr >
                <th >Ticket ID</th>
                <th >Requested By</th>
                <th>Subject</th>
                <th>Assignee</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Created Date</th>
                <th>Due Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through your data and render rows */}
              {data
                .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                .map((row) => (
                  <tr  key={row.id}>
                    <td>{row.ticketId}</td>
                    <td >
                 <Box sx={{display:'flex',gap:1, justifyContent: 'center'}}> 
                 <img
                        src={row.profilePic}
                        alt="Profile"
                        height={25}
                        style={{ borderRadius: "30px" }}
                      />
               
                 {row.name}
                 </Box>
                   
                       
                    
                     
                    
                    </td>
                    <td>{row.subject}</td>
                    <td>
                
                      <img
                        src={row.assignee}
                        alt="Assignee"
                        height={25}
                        style={{ borderRadius: "30px" }}
                      />
                    </td>

                    <td>
                      {/* Use appropriate styling based on the priority */}
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor:
                            row.priority === "High"
                              ? "#fbd5db"
                              : row.priority === "Medium"
                              ? "#fdedd2"
                              : "#dddfe1",
                          color: 
                          row.priority === "High"
                            ? "#f3847f"
                            : row.priority === "Medium"
                            ? "#f8c580"
                            : "#a49ca2",
                          height:25,
                          boxShadow:"none",
                         
                        }}
                      >
                        {row.priority}
                      </Button>
                    </td>
                    <td>
                      {/* Use appropriate styling based on the status */}
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor:
                            row.status === "Open" ? "#1abc9c" : "#6c757d",
                          color: "white",
                          height:25,
                        }}
                      >
                        {row.status}
                      </Button>
                    </td>

                    <td>{row.dateOfCreation}</td>
                    <td>{row.dueDate}</td>

                    <td>
                      {/* Action button */}
                      <Button variant="outlined"
                      style={{
                        height:27,
                      }}>-</Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        

        <Box
          sx={{
            display: "flex",
            gap: 4,
            marginTop: 2,
          }}
        >
          <Box>
            <Select
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              variant="outlined"
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </Box>
          <Box>
            <Typography>
              Showing {(page - 1) * rowsPerPage + 1} -{" "}
              {Math.min(page * rowsPerPage, data.length)} of {data.length}{" "}
              records
            </Typography>
          </Box>
          <Box>
            <TextField
              label="Go to page"
              variant="outlined"
              type="number"
              InputProps={{
                inputProps: {
                  min: 1,
                  max: Math.ceil(data.length / rowsPerPage),
                },
              }}
            />
            <Button variant="outlined">Go</Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
          <Pagination
            count={Math.ceil(data.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </Box>
      </Box>
    </>
  );
}

export default Tables;
