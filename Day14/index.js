// // server.js
// const express = require('express');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = 9000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cookieParser());

// // const users = {
// //     userEmail: 'user@babalu.com',
// //     userPassword: 'password123'
// // }; // register

// // Authentication middleware
// const authMiddleware = (req, res, next) => {
//     const { authToken } = req.cookies;

//     if (authToken && authToken === 'VALID_TOKEN') {
//         next();
//     } else {
//         res.status(401).json({ message: 'Unauthorized' });
//     }
// };

// // Routes
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     if (email === "ram@gmail.com" && password === "ram@123") {
//         const authToken = 'VALID_TOKEN';
//         res.cookie('authToken', authToken, { httpOnly: true });

//         res.status(200).json({ message: 'Login successful' });
//     } else {
//         res.status(401).json({ message: 'Invalid credentials' });
//     }
// });

// app.post('/logout', (req, res) => {
//     res.clearCookie('authToken');
//     res.status(200).json({ message: 'Logged out successfully' });
// });

// app.get('/protected', authMiddleware, (req, res) => {
//     res.status(200).json({ message: 'This is a protected route' });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


////



// creata server / done
// cookie install / done
// login route / done
// store token in the cookie / done
// get token form the cookie  ? if token ? userAunthicated : wrong credentials // odne
// logout clear token from cookie
// crdeate a middleware for token;


const express = require("express");
const bodyParser = require('body-parser'); // middleware
const cookieParser = require("cookie-parser");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser())
const port = 9000;

app.use(express.json());

// middleware

const middleware = (req, res, next) => {
    const { token } = req.cookies;
    console.log(token)
    if (token && token === "valid tokne") {
        next();
    } else {
        console.log("login first")
    }
}

// login page

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    try {
        if (email == "krishn@gmail.com" && password == "1234") {
            const token = "valid tokne";
            res.cookie("token", token);
            res.json({ msg: "login successful", token });
        } else {
            res.status(400).json({ msg: "wrong credentials" })
        }
    } catch (error) {
        console.log("login first", error)
    }
})

// contact 
app.get("/contact", middleware, (req, res) => {

    res.json({ msg: "this is contact page" })

})


// logout 
app.post("/logout", (req, res) => {
    res.clearCookie("token")
    res.status(200).json({ msg: "you are logged out" })

})


app.get("/", (req, res) => {
    res.send("home page")
})

app.listen(port, () => {
    console.log("server is running at port ", port)
})









