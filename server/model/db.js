//=========== CALLING DATABASE NODE PACKAGES TO DEFINE THE STRUCTURE OF DATABASE
const mongoose = require("mongoose");

//================= DATABASE CONNECTION
mongoose
  .connect("mongodb://localhost:27017/todolist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connected SuccessFully");
  })
  .catch((e) => {
    console.log(`Something Went Wrong With DataBase ${e.message}`);
  });

