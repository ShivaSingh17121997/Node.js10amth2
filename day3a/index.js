
const express = require("express");
const app = express();
const path = require("path");


app.use(express.static('public'))
app.use(express.json())
const port = 5000


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});