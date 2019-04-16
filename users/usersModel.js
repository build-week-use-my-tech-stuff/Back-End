const db = require("../database/dbConfig");

module.exports = {
  getTechByUser,
  getUsers
};

function getTechByUser(id) {
  return db("tech").where({ user_id: id });
}

function getUsers() {
  return db("users");
}
