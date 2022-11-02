const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");

//added from stack overflow
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.send(user);
  } catch (error) {
    res.status(500).send({ msg: "server Error" });
  }
});

router.post(
  "/",
  [
    check("email", "Enter the valid email").isEmail(),
    check("password", "Enter the valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid creditials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send("credentials not match");
      }
      const payload = { user: { id: user.id } };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err.message;
          res.send({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.send("server error");
    }
  }
);

module.exports = router;
