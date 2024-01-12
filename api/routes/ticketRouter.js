const { createTicket, editTicket, getTickets, getTicket, deleteTickets } = require("../controllers/ticketController");

const router = require("express").Router()

router.post('/createTicket',createTicket)

router.put('/editTicket/:ticketId',editTicket)

router.get('/getAllTickets',getTickets)

router.get('/getTicket',getTicket)

router.delete('/deleteTicket/:ticketId',deleteTickets)


module.exports = router;