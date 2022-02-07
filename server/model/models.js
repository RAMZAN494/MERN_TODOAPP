//=========== CALLING DATABASE NODE PACKAGES TO DEFINE THE STRUCTURE OF DATABASE
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//========== DEFINE THE SCHEMA OF DATABASE
const todoScheam = new Schema({
  todo: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
  },
});

//=============== CREATING TABLE NAME IN THE DATABASE BY GIVEN ATTRIBUTE ON THE SCHEMA CONFIGURATION
const Task = mongoose.model("Todo", todoScheam);

//========== EXPORTS THE CREATING DATABASE
module.exports = Task;
