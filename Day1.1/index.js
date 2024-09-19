const cookieParser = require('cookie-parser');
const express = require('express')

const app = express();
const port = 8000
app.use(express.json());
app.use(cookieParser())

app.get('/', (req, res) => {
    // Set a cookie named 'myCookie' with a value of 'cookieValue'
    res.cookie('myCookie', 'cookieValue', { maxAge: 86400000, httpOnly: true }); // Cookie expires in 1 day
    res.send('Cookie has been set');
});


app.get('/get-cookie', (req, res) => {
    // Retrieve the cookie named 'myCookie'
    const myCookie = req.cookies.myCookie;

    if (myCookie) {
        res.send(`Cookie value: ${myCookie}`);
    } else {
        res.send('No cookie found');
    }
});




app.get("/", (req, res) => {
    res.send("this is home page")
})

app.listen(port, () => {
    console.log("server is running at ", port)
})