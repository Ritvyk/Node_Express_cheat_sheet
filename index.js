const path = require("path");
const express = require("express");
const membersAPI = require("./Members");

//make fake data
membersAPI.makeMembers(10);

const PORT = 5000;
const app = express(); //this will handle all the requests

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Routing
app.use("/api/members", require(path.join(__dirname, "public/api/fakeAPI.js")));

//making an static folder in node
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server started on Port : ${PORT}`);
});
