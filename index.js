const path = require("path");
const express = require("express");
const membersAPI = require("./Members");

//setting to enviroment variables
require("dotenv").config();

const PORT = process.env.PORT;
//make fake data
membersAPI.makeMembers(10);

const app = express(); //this will handle all the requests

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Routing
app.use("/api/members", require(path.join(__dirname, "public/api/fakeAPI.js")));

app.listen(PORT, () => {
  console.log(`Server started on Port : ${PORT}`);
});
