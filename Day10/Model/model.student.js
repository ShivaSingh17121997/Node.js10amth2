
// import mongoose
const mongooose = require("mongoose");


// step 3 created schema
const studentSchema = mongooose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String
})

// step 2 create model
const studentModel = mongooose.model("dusara", studentSchema)

module.exports = studentModel;