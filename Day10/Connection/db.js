const mongooose = require("mongoose");


const conncetion = mongooose.connect("mongodb://localhost:27017/Student");


module.exports = conncetion;


