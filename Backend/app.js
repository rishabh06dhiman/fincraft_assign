const express = require("express");
const app = express();

app.use(express.json())

//Route Imports
const list = require("./routes/listRoute");

app.use("/api/v1",list)

module.exports = app;