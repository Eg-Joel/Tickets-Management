const { createTicket, editTicket, getTickets, getTicket, deleteTickets } = require("../controllers/ticketController");
const { createStudent, createAssignees, getStudents, getAssignees } = require("../controllers/userController");

const router = require("express").Router()

router.post('/createStudent',createStudent)

router.post('/createAssgnees',createAssignees)

router.get('/getAllStudents',getStudents)

router.get('/getAssgnees',getAssignees)



module.exports = router;