const express = require("express");
const axios = require("axios");
const app = express();
var cors = require("cors");
app.use(express.json());
const { AddData } = require("./services");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
const Port = process.env.PORT || 8080;

app.post("/adddata", (req, res) => {
  try {
    AddData(req.body);
  } catch (e) {
    console.log(e);
  }
  res.send({ message: "Data added", status: "ok" });
});

app.listen(Port);
