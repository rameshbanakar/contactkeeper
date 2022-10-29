const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("get the user login");
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
        { expiresIn: 10 },
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
