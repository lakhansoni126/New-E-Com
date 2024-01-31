const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./config/db");
const authRouter = require("./routes/authRoute");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
db();
app.use(bodyParser.json());
app.use("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user", authRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
