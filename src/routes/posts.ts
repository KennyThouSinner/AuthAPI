const router = require('express').Router();
const verify = require('./verify');

router.get('/posts', verify.auth, (req, res) => {

   res.json({
      posts: {
         title: "My first post",
         description: "Random"
      }
   })
});

module.exports = router;