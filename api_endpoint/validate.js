const joi = require('joi');

module.exports = (object) => {
    const schema = joi.object({
        id: joi.number()
            .integer()
            .min(0),
        title: joi.string()
            .alphanum()
            .min(3)
            .required(),
        price: joi.number()
            .required()
    });
    return !schema.validate(object).error;
}