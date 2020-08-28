const express = require("express");
const router = express.Router();

const habitController = require("../controllers/habit_controller");

// For rendering home page
router.get("/", habitController.load);

// For adding a habit
router.post("/add-habit", habitController.add);

// for deleting a habit
router.get("/delete-habit", habitController.delete);

// for viewing a single habit
router.get("/view-habit", habitController.viewhabit);

// finding a habit and returning a json
router.get("/find-habit", habitController.fetchhabit);

// update state of list item in db
router.get("/update-db-date", habitController.updateDates);

module.exports = router;