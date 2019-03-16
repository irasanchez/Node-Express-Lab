const express = require("express");
const posts = require("../data/db");
const router = express.Router();

// '/' here is short for '/posts'
router.get("/", (req, res) => {
  posts
    .find()
    .then(posts => {
      res.status(200).json({ success: true, users });
    })
    .catch(error => {
      res.status(500).json({ error: "error" });
    });
});

//TODO:
// POST 	/api/posts 	Creates a post using the information sent inside the request body.
// GET 	/api/posts 	Returns an array of all the post objects contained in the database.
// GET 	/api/posts/:id 	Returns the post object with the specified id.
// DELETE 	/api/posts/:id 	Removes the post with the specified id and returns the deleted post object. You may need to make additional calls to the database in order to satisfy this requirement.
// PUT 	/api/posts/:id 	Updates the post with the specified id using data from the request body. Returns the modified document, NOT the original.

module.exports = router;
