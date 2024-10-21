const jwt = require('jsonwebtoken');


// middleware is a simple function has access to req, res , next
const verifyToken = (req, res, next) => {
    
    const token = req.cookies.authtoken;   // getting cookie form browser

    if (!token) {
        return res.redirect("/authRoute/loginPage")
        // return res.status(403).json({ msg: "No token provided, access denied" });
    }

    jwt.verify(token, "Learning-node", (err, decoded) => {
        if (err) {
            return res.status(401).json({ msg: "Failed to authenticate token" });
        }
        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;
