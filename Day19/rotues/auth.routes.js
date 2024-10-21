const express = require("express");
const User = require("../model/auth.model")

const userRouter = express.Router()


userRouter.post("/register", async (req, res) => {

    try {
        const { name, email } = req.body;
        console.log(req.body)

        // send data to user collection

        const data = new User({ name, email })
        await data.save()
        res.json({msg:"added user"})


    } catch (error) {
        console.log(error)
    }

})


module.exports = userRouter;