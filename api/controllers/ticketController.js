const db = require('../db');
const errorHandler = require('../utils/error');

exports.createTicket = async (req, res, next) => {
    const {
        requested_by_id,
        assignee_id,
        subject,
        status,
        created_date,
        due_date,
        priority,
      } = req.body;
    try {
        const result = await db.query(
            "INSERT INTO tickets(requested_by_id, assignee_id, subject, status, created_date, due_date, priority) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [requested_by_id, assignee_id, subject, status, created_date, due_date, priority]
          );
  
      res.status(201).json(result.rows[0]);
    } catch (error) {
      next(error);
    }
  };

  exports.editTicket = async (req, res, next) => {
    const ticketId = req.params.ticketId;
    const { status } = req.body;
    try {
        const result = await db.query(
            "UPDATE tickets SET status = $1 WHERE id = $2 RETURNING *",
            [status, ticketId]
          );
      
          if (result.rows.length === 0) {
            return next(errorHandler(404, "Ticket not found!"));
            
          } else {
            res.json(result.rows[0]);
          }
    } catch (error) {
      next(error);
    }
  };

exports.getTickets = async (req, res, next) => {
    try {
        const result = await db.query(`
        SELECT t.*, s.name AS requested_by_name, s.profile_pic_url AS requested_by_pic,
                   a.name AS assignee_name, a.profile_pic_url AS assignee_pic
        FROM tickets t
        JOIN students s ON t.requested_by_id = s.id
        JOIN assignees a ON t.assignee_id = a.id
        WHERE t.deleted_at IS NULL
      `);
  
      res.status(200).json(result.rows);
    } catch (error) {
      next(error);
    }
  };
  

  exports.getTicket = async (req, res, next) => {
    const ticketId = req.params.ticketId;
    try {
        const result = await db.query(`
      SELECT t.*, s.name AS requested_by_name, s.profile_pic_url AS requested_by_pic,
                 a.name AS assignee_name, a.profile_pic_url AS assignee_pic
      FROM tickets t
      JOIN students s ON t.requested_by_id = s.id
      JOIN assignees a ON t.assignee_id = a.id
      WHERE t.id = $1
    `, [ticketId]);

    if (result.rows.length === 0) {
        return next(errorHandler(404, "Ticket not found!"))
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      next(error);
    }
  };
  

  exports.deleteTickets = async (req, res, next) => {
    const ticketId = req.params.ticketId;

    try {
        const result = await db.query(
            "UPDATE tickets SET deleted_at = NOW() WHERE id = $1 RETURNING *",
            [ticketId]
          );
      
          if (result.rows.length === 0) {
            return next(errorHandler(404, "Ticket not found!"))
          } else {
            res.json({ message: "Ticket soft deleted successfully" });
          }
    } catch (error) {
      next(error);
    }
  };
 
 