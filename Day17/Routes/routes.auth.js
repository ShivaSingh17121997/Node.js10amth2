const express = require("express");
const userModel = require("../modal/modal.auth");
const passport = require("passport");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {

    const { username, password } = req.body
    console.log(username, password)
    try {
        if (!username) {
            return res.json({ msg: "username is required" })
        }
        if (!password) {
            return res.json({ msg: "password is required" })
        }

        const user = new userModel({ username, password })
        await user.save()

        res.status(200).json({ msg: "user registered successfully" })

    } catch (error) {
        res.status(400).json({ msg: "someting is wrong ", error })

    }


})


// authRouter.post("/login", async (req, res) => {
//     let { username, password } = req.body;
//     try {
//         if (!username) {
//             return res.json({ msg: "username is required" })
//         }
//         if (!password) {
//             return res.json({ msg: "password is required" })
//         }

//         let user = await userModel.findOne({ username })
//         console.log(user)

//         if (!user) {
//             return res.json({ msg: "user not found" })
//         }

//         if (user.password !== password) {
//             return res.json({ msg: "password is incorrect" })
//         }

//         res.status(200).json({ msg: "login successfull" })

//     } catch (error) {
//         res.status(400).json({ msg: "something is wrong", error })

//     }


// })


// { failureRedirect: '/login' }


authRouter.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
        console.log("logged in successfully")
    });


module.exports = authRouter;