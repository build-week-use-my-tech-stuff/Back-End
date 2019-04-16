const express = require("express");

const db = require("./techModel");

const router = express.Router();

// GET a list of tech objects ----------

router.get("/", (req, res) => {
  db.get()
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

// POST will create a tech object ----------

router.post("/", (req, res) => {
  const newTech = req.body;

  if (newTech.name) {
    db.insert(newTech)
      .then(newTech => {
        res.status(201).json(newTech);
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ message: "There was an error saving your tech!" });
      });
  } else {
    res.status(400).json({ message: "Please provide a name for your tech!" });
  }
});

// DELETE will remove a tech object with the specified id ----------

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then(tech => {
      if (tech) {
        res.status(204).end();
      } else {
        res.status(404).json({
          message: "The tech with the specified id could not be found!"
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "This tech could not be deleted!" });
    });
});

// PUT updates a tech object with the specified id ----------

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  if (updates.name) {
    db.update(id, updates)
      .then(updates => {
        if (updates) {
          res.status(200).json(updates);
        } else {
          res.status(404).json({
            message: "The tech with the specified id could not be found!"
          });
        }
      })
      .catch(err => {
        res.status(500).json(console.log(err));
        //   { message: "The tech information could not be modified!" }
      });
  } else {
    res
      .status(400)
      .json({ message: "Please provide the required fields for this tech!" });
  }
});

// POST comments to a tech object with the specified id ----------

router.post("/:id", (req, res) => {
  const { tech_id } = req.params;
  const { content } = req.body;
  const { user_id } = req;

  if (content) {
    db.comment(tech_id, user_id, content)
      .then(success => {
        res.status(201).json({ message: "Comment posted!" });
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ message: "There was an error posting this comment!" });
      });
  } else {
    res.status(400).json({
      message: "Please provide content before you submit this comment!"
    });
  }
});

module.exports = router;
