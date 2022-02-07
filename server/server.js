const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./routes/routes");
require("./model/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/task", route);

app.listen(5000, () => {
  console.log("Sever Started On Port 5000");
});
