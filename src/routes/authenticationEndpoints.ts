const router = require('express').Router();
const bcrypt = require('bcryptjs');
const validate = require("../validation");
const verify = require('./verify');
const jwt = require('jsonwebtoken');
import User from '../models/User';
require('dotenv').config();

//Handle register endpoint
router.post('/register', async (req, res) => {

   const { error } = validate(req.body, { type: "register" });
   if (error) return res.status(400).send(error.details[0].message);

   if ((await User.findOne({ email: req.body.email }))) return res.status(400).send("That email already exists");

   const hashedPassword = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));

   const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
   });

   try { 
      const savedUser = await user.save();

      res.status(200).send(`Successfully created new account. ID: ${savedUser._id}`);
   } catch (e) {
      res.status(400).send(e);
   }
});


//Handle login endpoint
router.post('/login', async (req, res) => {

   const { error } = validate(req.body);
   if (error) return res.status(400).send(error.details[0].message);

   const user = await User.findOne({ email: req.body.email });

   if ((await bcrypt.compare(req.body.password, user.password)) == false) return res.status(400).send("Incorrect login details provided.");

   //Create & assign token.
   const token = jwt.sign({ _id: user._id }, process.env.TOKEN);

   res.header('auth-token', token).send(token);

});

router.get('/logout', (req, res) => {

   if (!req.header('auth-token')) return res.send("Lol");

   req.user = '';

   res.redirect('/');
})

module.exports = router;