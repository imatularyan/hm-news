const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("jsonwebtoken");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello router");
});

// register route

router.post("/register", async (req, res) => {
  const { fname, lname, email, phone, password, confirmPassword } = req.body;

  if (!fname || !lname || !email || !phone || !password || !confirmPassword) {
    return res.status(422).json({ error: "Please! fill all required fields." });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email is already registered." });
    } else if (password != confirmPassword) {
      return res.status(422).json({ error: "Password are not matching." });
    } else {
      const user = new User({
        fname,
        lname,
        email,
        phone,
        password,
        confirmPassword,
      });
      await user.save();
      res.status(201).json({ message: "Registration successful." });
    }
  } catch (err) {
    console.log(err);
  }
});

// login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      // const token = await userLogin.generateAuthToken();
      // console.log(token);

      // res.cookie("jwtoken", token),
      //   {
      //     expires: new Date(Date.now() + 25892000000),
      //     httpOnly: true,
      //   };

      if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      return res.json({ message: "Login successful" });
    } else {
      res.json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
