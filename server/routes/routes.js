//========= REQUIRING PACKAGES TO DEFINE THE ROUTE AND METHOD
const express = require("express");

//======== CALL THE DATABASE SCHEMA THAT DEFINE ON OTHER FILE LOCATION
const Task = require("../model/models");

//========== DEFINE ROUTER FROM THE NODEJS PACKAGES
const router = express.Router();

//============ GET ALL DATA FROM DATABASE USING GET ROUTING
router.get("/", async (req, res) => {
  try {
    const task = await Task.find({});
    res.json(task);
  } catch (error) {
    res.json(error.message).status(500);
  }
});

//================== ADD NEW DATA FROM THE DATABASE USING POST METHOD&ROUTE
router.post("/", (req, res) => {
  try {
    const { todo, isComplete } = req.body;
    const task = new Task({ todo, isComplete });
    task.save();
    res.json(task);
  } catch (error) {
    res.json(error.message);
  }
});

//================= GET SPECIFIC DATA FROM DATABASE USING SPECIFIC ID USING GET METHOD
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.send(task);
  } catch (error) {
    res.json(error.message);
  }
});

//=============== UPDATE SPECIFIC DATA FROM THE DATABASE USING SPECIFIC AND PUT METHOD & Route
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { todo, isComplete } = req.body;
    const task = await Task.findByIdAndUpdate(id, { todo, isComplete });
    res.json(task);
  } catch (error) {
    res.json(error.message);
  }
});

//============ DELETE DATA FROM THE DATABASE USING SPECIFIC ID BY THE HELP OF DELETE METHOD & ROUTE
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.json(task);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
