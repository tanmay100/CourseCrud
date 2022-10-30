const express = require("express");
const router = express.Router();
const Course = require("../models/course");

router.get("/get-course", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

router.post("/post-course", async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
});

module.exports = router;
