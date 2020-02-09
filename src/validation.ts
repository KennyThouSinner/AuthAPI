const Joi = require("@hapi/joi");

function validate(data, type?: string) {

   if (!type) type = "";

   const validationData = Joi.object({ 
      name: Joi.string().min(6),
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required()
   });

   return validationData.validate(data);
}

module.exports = validate;