const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())

//Route Imports
const list = require("./routes/listRoute");

app.use("/api/v1",list)

module.exports = app;