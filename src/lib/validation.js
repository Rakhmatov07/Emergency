const Joi = require('joi');

const authValidation = (username, phone_number) => {
    const authSchema = Joi.object({
        username: Joi.string().alphanum().required().min(3),
        phone_number: Joi.string().trim().pattern(/^\+\d{12}$/).required()
    });

    const {error} = authSchema.validate({username, phone_number});
    return error ? error.message : false;
};

module.exports = {
    authValidation
};