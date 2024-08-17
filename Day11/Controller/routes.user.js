



const express = require("express");
const user = require("../Model/model.user")

const usrRoutes = express.Router();

// add data 

usrRoutes.post("/addData", async (req, res) => {
    console.log(req.body)
    let newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    const savedUser = await newUser.save();
    console.log(savedUser)
    res.json({ "userdata": savedUser })


})

// getData 
usrRoutes.get("/getData", async (req, res) => {

    const getData = await user.find()
    console.log(getData)
    res.send(getData)
})


// delete function

usrRoutes.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const DeletedData = await user.findByIdAndDelete(id);
    console.log(DeletedData)
})

// update function

usrRoutes.put("/update/:id", async (req, res) => {
    const { id } = req.params
    const { username, email, password } = req.body;

    const updatedData = await user.findByIdAndUpdate(id, { username, email, password })
    console.log(updatedData)
})

usrRoutes.patch("/updatewithpatch/:id", async (req, res) => {
    const { id } = req.params
    const { username, email, password } = req.body;

    const updatedData = await user.findByIdAndUpdate(id, { username, email, password })

    console.log(updatedData)

})


module.exports = usrRoutes;








