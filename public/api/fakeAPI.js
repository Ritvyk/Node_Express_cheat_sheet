const express = require("express");
const membersAPI = require("../../Members");
const throwErrResponse = require("./responseMsg");
const router = express.Router();

//all members
router.get("/", (req, res) => {
  res.json(membersAPI.members);
});

//individual members
router.get("/:id", (req, res) => {
  const memId = parseInt(req.params.id);
  const member = membersAPI.members.filter((member) => {
    return member.id === memId;
  });
  if (member.length > 0) {
    res.json(member);
  } else {
    throwErrResponse(res, "InD");
  }
});

//creating new member

router.post("/", (req, res) => {
  const data = {
    email: req.body.email,
    name: req.body.name,
  };
  if (!data.email || !data.name) {
    throwErrResponse(res, "NF");
  } else {
    if (membersAPI.checkDuplicate(req.body.email)) {
      throwErrResponse(res, "AP");
    } else {
      membersAPI.createNew(data);
      res.json(membersAPI.members);
    }
  }
});

module.exports = router;
