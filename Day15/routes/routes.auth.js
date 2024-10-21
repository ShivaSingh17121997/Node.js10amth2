const express = require("express");
// const crypto = require('crypto');
// const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const userModel = require("../Model/model.user");
const userRoutes = express.Router();

// get routes of ejs
userRoutes.get("/registerPage", (req, res) => {
    res.render("signup")
});

userRoutes.get("/loginPage", (req, res) => {
    res.render("login")
});

userRoutes.get("/updatePassword", (req, res) => {
    res.render("updatePassword");
})


// render the page of ejs to ui
userRoutes.get("/generateOtp", (req, res) => {
    res.render("generateOtp")
})

userRoutes.get("/verifyOtp", (req, res) => {
    res.render("verifyOTP")
})



userRoutes.post("/register", async (req, res) => {
    // register;

    try {
        const { username, email, password } = req.body;
        const registerUser = new userModel({ username, email, password })
        await registerUser.save();
        // bcrypt code

        res.status(200).json({ msg: "user added successfully!" })

    } catch (error) {
        res.status(400).json({ msg: "user is not registerd!", error })
    }

});


userRoutes.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;  // email password come form ejs input fields

        // if email mathches with data base email
        const user = await userModel.findOne({ email });

        //if user not found
        if (!user) {
            return res.status(400).json({ msg: "Invalid email or password" });
        };

        // if user found then check password
        if (user.password !== password) {
            return res.status(400).json({ msg: " password is wrong" });
        };

        // if password is correct
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            "Learning-node", // secret key;
            { expiresIn: '1h' }  // token expiration time ;
        );

        // storing the token in cookies in browser;
        res.cookie("authtoken", token, { httpOnly: true, maxAge: 3600 * 1000, path: "/" })

        res.status(200).json({ msg: "User logged in successfully", user: user.email, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    };
});

userRoutes.post("/changePassword", async (req, res) => {
    try {
        const { email, oldpassword, newPassword, } = req.body

        const userObj = await userModel.findOne({ email });
        console.log(userObj);

        if (userObj.password !== oldpassword) {
            res.status(400).json({ msg: "password is incorrerct" })
        }

        let updatedPassword = await userModel.findByIdAndUpdate(userObj._id, { password: newPassword })
        res.status(200).json({ msg: "password changed" }, updatedPassword);


    } catch (error) {
        console.log("something is worng password in not changed", error)
    }
})



// genereate otp form nodemailer

userRoutes.post("/generateOtp", async (req, res) => {

    try {
        const { email } = req.body;
        console.log(email)

        //verify the email in database
        const user = await userModel.findOne({ email })

        // const user = await userModel.findOne({ email });
        // console.log(user)

        if (!user) {
            res.status(404).json({ msg: 'User not found, invalid email' })
        }

        // if email matches successfully then generate otp
        console.log("otp  generated")


        const transporter = nodemailer.createTransport({
            host: "shisingh01997@gmail.com",
            service: "gmail",
            auth: {
                user: "shisingh01997@gmail.com",
                pass: "xloj kqfz bemv tbzc",
            },
        });

        let randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
        let otpExpires = Date.now() + 60 * 10 * 1000;


        console.log(randomOtp)


        // store the otp in the mongodb
        user.otp = randomOtp;
        user.otpExpires = otpExpires;
        await user.save(); // store the otp in data bse


        async function main() {
            // send mail with defined transport object
            const info = await transporter.sendMail({
                from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
                to: user.email, // list of receivers
                subject: "Hello ✔", // Subject line
                text: randomOtp, // plain text body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
        }
        main().catch(console.error);

    } catch (error) {
        res.status(400).json({ msg: "Otp not sent something is wrong", error })
    }
})



// verofu otp
userRoutes.post("/verifyOtp", async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;

        const user = await userModel.findOne({
            email, otp,
            otpExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid OTP or OTP has expired.' });
        }

        // Update the password
        user.password = newPassword;
        user.otp = undefined;

        await user.save();

        res.status(200).json({ msg: 'Password updated successfully' });
    } catch (error) {
        console.error("Invalid OTP", error);
        res.status(500).json({ msg: 'Error verifying OTP', error });
    }
});



module.exports = userRoutes;    