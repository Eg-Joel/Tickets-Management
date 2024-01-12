const db = require("../db");

exports.createStudent = async (req, res, next) => {
  const { name, profile_pic_url } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO students(name, profile_pic_url) VALUES($1, $2) RETURNING *",
      [name, profile_pic_url]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

exports.createAssignees = async (req, res, next) => {
  const { name, profile_pic_url } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO assignees(name, profile_pic_url) VALUES($1, $2) RETURNING *",
      [name, profile_pic_url]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

exports.getStudents = async (req, res, next) => {
  try {
    const result = await db.query("SELECT * FROM students");
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

exports.getAssignees = async (req, res, next) => {
  try {
    const result = await db.query("SELECT * FROM assignees");
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};
