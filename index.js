const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("moongoose");

const courses = require("./routes/courses");
app.use("/api/courses", courses);

mongoose
  .connect(process.env.DB_CONECTIONS_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT, () => {
  console.log("listening at port 8080");
});
