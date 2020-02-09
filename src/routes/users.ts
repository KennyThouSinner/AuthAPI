const router = require('express').Router();
import User from '../models/User';

//Get all users from database
router.get('/users', async (req, res) => {
   const users = await User.find();

   if (!users) return res.status(404).send("There are no users in the database.");

   try {
      res.status(200).send({ data: users.map(u => u._id) });
   } catch (err) {
      res.status(400).send(err);
   }
});

//Get specific user from database by _id
router.get('/users/:id', async (req, res) => {
   const user = await User.findById(req.params.id);

   if (!user) return res.status(404).send("Specified user was not found.");

   try {
      res.status(200).send({
         data: {
            _id: user._id,
            name: user.name,
            email: user.email
         }
      });
   } catch (err) {
      res.status(400).send(err);
   }
});

module.exports = router;