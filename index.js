const express = require("express");
const server = express();

server.use("/", (req, res) => res.send("API is up and running!"));

server.listen(8000, () => console.log("API running on port 8000"));
