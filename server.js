const express = require("express");
const postsRouter = require("./routes/posts-router");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
  <h2>Notes API by Ira Sanchez</h2>`);
});

server.use("/api/posts", postsRouter);

module.exports = server;
