require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
require("./db/conn");
// const User = require("./model/userSchema");

app.use(express.json());

// link router files to make our routes easy
app.use(require("./router/auth"));

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.get("/signin", (req, res) => {
  res.send("SignIn page");
});

app.get("/signup", (req, res) => {
  res.send("SignUp page");
});

app.listen(PORT, () => {
  console.log(`Backend server ➡ http://localhost:${PORT}`);
});
