
// step 1

const http = require("http");
const fs = require('fs')
const port = 8000;



const reqData = function (req, res) {
    // res.end("This is my third server ,")
    console.log(req.url)
    let fileName = "";
    switch (req.url) {
        case "/":
            fileName = "./index.html"
            break;

        case "/home":
            fileName = "./Home.html"
            break;

        case "/contact":
            fileName = "./Contacts.html"
            break;
    }

    fs.readFile(fileName, (err, result) => {
        // console.log(result)
        if (!err) {
            res.end(result)
        }
    })
}




const server = http.createServer(reqData);
server.listen(port, (req, res) => {
    console.log("Server is running at port ", port)
})