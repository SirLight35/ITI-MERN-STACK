const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

require("./db/mongoose");

// to parse automatically

app.use(express.json());

const studentRouter = require("./routers/student");

app.use(studentRouter);

app.listen(port, () => {
  console.log("All Done Successfully");
});
