const path = require("path");
const express = require("express");
const membersAPI = require("./Members");
const { query } = require("express");

const app = express(); //this will handle all the requests

const logger = (req, res, next) => {
  console.log("First Middleware -- Logger");
  next(); //calling the next middleware that is under /member/login controller --> auth
};

const auth = (req, res, next) => {
  if (req.query.admin === "true") {
    next(); //calling the next middleware that is after auth in /member/login controller
  } else {
    res.send("Not Authorized");
  }
};

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Routing
app.use("/api/members", require(path.join(__dirname, "public/api/fakeAPI.js")));

//member/login controller
app.get("/member/login", auth, (req, res) => {
  res.send("User Page");
});

//setting to enviroment variables
require("dotenv").config();

const PORT = process.env.PORT;
//make fake data
membersAPI.makeMembers(10);

app.listen(PORT, () => {
  console.log(`Server started on Port : ${PORT}`);
});
