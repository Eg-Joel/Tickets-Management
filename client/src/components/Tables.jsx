import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import Table from "@mui/joy/Table";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from '../utils/axios'

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
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const fetchData = async () => {
    try {
      const response = await axios.get("/tickets/getAllTickets");
      setTickets(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginTop: 2,
            marginBottom: 3,
          }}
        >
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
          sx={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Requested By</th>
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
            {tickets
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>
                    <Box
                      sx={{ display: "flex", gap: 1, justifyContent: "center" }}
                    >
                      <img
                        src={row.requested_by_pic}
                        alt="Profile"
                        height={25}
                        style={{ borderRadius: "30px" }}
                      />

                      {row.requested_by_name}
                    </Box>
                  </td>
                  <td>{row.subject}</td>
                  <td>
                    <img
                      src={row.assignee_pic}
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
                          row.priority === "high"
                            ? "#fbd5db"
                            : row.priority === "medium"
                            ? "#fdedd2"
                            : "#dddfe1",
                        color:
                          row.priority === "high"
                            ? "#f3847f"
                            : row.priority === "medium"
                            ? "#f8c580"
                            : "#a49ca2",
                        height: 25,
                        boxShadow: "none",
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
                          row.status === "open" ? "#1abc9c" : "#6c757d",
                        color: "white",
                        height: 25,
                      }}
                    >
                      {row.status}
                    </Button>
                  </td>

                  <td>{row.created_date}</td>
                  <td>{row.due_date}</td>

                  <td>
                    {/* Action button */}
                    <Button
                      variant="outlined"
                      style={{
                        height: 27,
                      }}
                    >
                      -
                    </Button>
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
            alignItems:'center',
            justifyContent:"space-between"
          }}
        >
          <Box sx={{ display: "flex",gap:5,alignItems:'center',  }}>

          
          <Box>
            <Typography variant="body" style={{ fontSize: 20 }}>
              Display:
            </Typography>
            <Select
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              variant="outlined"
              sx={{ m: 1,  height: 25 }}
              size="small"
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </Box>
          <Box>
            <Typography>
              Page {(page - 1) * rowsPerPage + 1} -{" "}
              {Math.min(page * rowsPerPage, data.length)} of {data.length}{" "}
            </Typography>
          </Box>
          </Box>

          <Box
            sx={{ display: "flex",  }}
          >
            <Pagination
              count={Math.ceil(data.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Tables;
