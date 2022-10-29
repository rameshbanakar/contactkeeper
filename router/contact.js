const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get contact");
});

router.post("/", (req, res) => {
    res.send("post contact");
});

router.put("/:id", (req, res) => {
    res.send("put contact");
});
router.delete("/", (req, res) => {
    res.send("delete contact");
});



module.exports = router;
