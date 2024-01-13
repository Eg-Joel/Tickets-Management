const express = require("express")
const app = express()

const cors = require("cors")
const userRouter = require("./routes/userRouter")
const ticketRouter = require("./routes/ticketRouter")



const db = require('./db');

app.use(express.json())

const corsOptions = {
    origin: ['http://localhost:3000','http://localhost:5173' ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    credentials: true,
  };


app.listen(3000,()=>{
    console.log("server is running");
    
})

app.use("/api/tickets",cors(corsOptions), ticketRouter)
app.use("/api/user",cors(corsOptions), userRouter)


app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'internal server error'
    
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
    })