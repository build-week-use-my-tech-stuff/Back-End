const db = require("../database/dbConfig");

module.exports = {
  get,
  getTechById,
  insert,
  update,
  remove,
  comment,
  getTechComments,
  getTechByUser,
  getUsers
};

function get() {
  return db("tech")
    .leftJoin("users", "tech.user_id", "users.id")
    .select({
      name: "tech.name",
      user: "users.username",
      user_id: "tech.user_id",
      category: "tech.category",
      description: "tech.description",
      cost: "tech.cost",
      availability: "tech.availability",
      picture: "tech.picture",
      id: "tech.id"
    });
}

function getTechByUser(id) {
  return db("tech").where({ user_id: id });
}

function getUsers() {
  return db("users");
}

function insert(tech) {
  return db("tech")
    .insert(tech)
    .returning("id")
    .then(ids => {
      return getTechById(ids[0]);
    });
}

function getTechComments(id) {
  return db("comments").where({ tech_id: id });
}

function getTechById(id) {
  return db("tech")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("tech")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("tech")
    .where("id", id)
    .del();
}

function comment(tech_id, user_id, content) {
  return db("comments").insert({
    tech_id: tech_id,
    user_id: user_id,
    date: new Date().toString(),
    content: content
  });
}
