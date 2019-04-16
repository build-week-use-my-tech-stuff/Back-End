const express = require("express");

const db = require("./usersModel");
// const restricted = require("../authorization/restricted");

const router = express.Router();

// GET a list of user objects ----------

router.get("/", (req, res) => {
  db.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "The users could not be retrieved!" });
    });
});

// GET a user object with a specified id ----------

router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.getUserById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was a problem retrieving this user!" });
    });
});

module.exports = router;
