const express = require("express");

const router = express.Router();
const {
  cloudinaryConfig,
  uploader
} = require("../cloudinary/cloudinaryConfig");
const { multerUploads, dataUri } = require("../cloudinary/multer");
const restricted = require("../authorization/restricted").restricted;
const db = require("./techModel");
cloudinaryConfig(router);

// GET a list of tech objects ----------

// router.get("/", (req, res) => {
//   db.get()
//     .then(tech => {
//       const techCom = tech.map(t => {
//         db.getTechComments(t.id);
//       });

//       res.status(200).json(techCom);
//     })
//     .catch(err => {
//       res.status(500).json(console.log(err));
//       //   { message: "The tech could not be retrieved!" }
//     });
// });

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

router.post("/", restricted, async (req, res) => {
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

router.delete("/:id", restricted, async (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then(tech => {
      if (tech) {
        db.getTechById(id).then(tech => {
          res.status(200).json(id);
        });
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

router.put("/:id", restricted, async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  if (updates) {
    db.update(id, updates)
      .then(updates => {
        if (updates) {
          db.getTechById(id)
            .then(updates => {
              res.status(200).json(updates);
            })
            .catch(err => {
              res
                .status(500)
                .json({ message: "This tech could not be retrieved." });
            });
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
    res.status(400).json({ message: "Please provide updates for this tech!" });
  }
});

// POST comments to a tech object with the specified id ----------

router.post("/:id", restricted, async (req, res) => {
  const tech_id = req.params.id;
  const { content, user_id } = req.body;

  if (content) {
    db.comment(tech_id, user_id, content)
      .then(success => {
        res.status(201).json(success);
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

// POST image to Cloudinary ----------

router.post("/:id/upload", multerUploads, (req, res) => {
  if (req.file) {
    const file = dataUri(req).content;
    return uploader.upload(file).then(result => {
      const image = result.url;
      return res
        .status(200)
        .json({
          message: "Your image has been uploaded successfully to cloudinary",
          image: image
        })
        .catch(err =>
          res.status(400).json({
            message: "Something went wrong while processing your request",
            err: err
          })
        );
    });
  }
});

module.exports = router;
