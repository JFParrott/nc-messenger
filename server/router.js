const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
  res.send({ response: "I am alive" });
});

module.exports = router;
