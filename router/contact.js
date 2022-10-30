const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../middleware/auth");
const Contact = require("../models/contact");

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort("name");
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

router.post(
  "/",
  [auth, [check("name", "Enter the valid name").not().isEmpty()]],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send({ errors: error.array() });
    }
    const { name, email, phone, type } = req.body;
    try {
      const contact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      await contact.save();
      res.json(contact);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("server error");
    }
  }
);

router.put("/:id", auth,async (req, res) => {
  const { name, email, phone } = req.body;
  const contactField = {};
  if (name) contactField.name = name;
  if (email) contactField.email = email;
  if (phone) contactField.phone = phone;

  try {
    let contact=await Contact.findById(req.params.id)
    if(!contact) return res.status(404).json({msg:"user not found"})
    if(contact.user.toString()!==req.user.id){
       return res.status(404).send("unauthorized to edit")
    }
    contact=await Contact.findByIdAndUpdate(req.params.id,{$set:contactField},{new:true})
    res.send(contact)
  } catch (error) {
    console.log(error.message)
    res.status(500).send("server error")
  }
});
router.delete("/", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
