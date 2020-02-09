const jwt = require('jsonwebtoken');

//User authentication check
module.exports.auth = function(req, res, next) {

   const token = req.header('auth-token');

   if (!token) return res.status(403).send("Access Denied");

   try {
      const verified = jwt.verify(token, process.env.TOKEN);

      req.user = verified;
      next();
   } catch {
      res.status(400).send("Invalid token");
   }
}