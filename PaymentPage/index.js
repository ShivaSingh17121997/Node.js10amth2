const express = require("express");
const paymentRoute = require("./Routes/paymentPage")
require('dotenv').config()

// confidential  code hide karr k rakhte hai environment variable

const app = express()





// to get something environment variable PROCESS.ENV
const port = process.env.PORT;

















app.use(express.json());

app.get("/", (req, res) => {
    res.send("this is dashboard")
})

app.use("/payment", paymentRoute);


app.listen(port, () => {
    try {
        console.log('server is running at port', port)

    } catch (error) {
        console.log(error)

    }
})