const express = require("express");
const router = express.Router();

router.get("/get-course", (req, res) => {
  res.send("Hello courses");
});

module.exports = router;
