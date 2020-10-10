const uuid = require("uuid");
const faker = require("faker");
//Modal
let members = [];

const makeMembers = (num) => {
  for (var i = 0; i < num; i++) {
    members.push({
      id: i + 1,
      accNum: uuid.v4(),
      name: faker.name.findName(),
      email: faker.internet.email(),
    });
  }
};

const createNew = (data) => {
  members.push({
    ...data,
    accNum: uuid.v4(),
    id: members.length + 1,
  });
};

const checkDuplicate = (email) => {
  if (
    members.filter((member) => {
      return member.email === email;
    }).length > 0
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports.makeMembers = makeMembers;
module.exports.members = members;
module.exports.createNew = createNew;
module.exports.checkDuplicate = checkDuplicate;
