const mongooose = require("mongoose");


const conncetion = mongooose.connect("mongodb://localhost:27017/adminpanel");


module.exports = conncetion;


