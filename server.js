const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const authRouter = require("./authorization/authRouter");
const techRouter = require("./tech/techRouter");
// const { restricted } = require("./authorization/restricted");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/tech", techRouter);

server.get("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
