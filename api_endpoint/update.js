const { object } = require("joi");

exports.module = (object1, object2) => {
    object1.title = object2.title;
    object1.price = object2.price;
    return object1;
}