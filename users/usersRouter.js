const express = require("express");

const db = require("./usersModel");

const router = express.Router();

// GET a list of tech objects with user_id ----------

router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  db.getTechByUser(id)
    .then(tech => {
      //   console.log(res);
      res.status(200).json(tech);
    })
    .catch(err => {
      res.status(500).json(console.log(err));
      //   { message: "The tech could not be retrieved!" }
    });
});

// GET a tech object with the specified id ----------

router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.getTechById(id)
    .then(tech => {
      if (tech) {
        const techWithCom = { ...tech };

        db.getTechComments(id).then(comments => {
          techWithCom.comments = comments;
          res.status(200).json(techWithCom);
        });
        // res.status(200).json(tech);
      } else {
        res.status(404).json({
          message: "The tech with the specified id could not be found!"
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "This tech could not be retrieved!" });
    });
});

module.exports = router;
