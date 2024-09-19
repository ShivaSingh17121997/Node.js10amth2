const express = require('express');
var cors = require('cors')

const app = express();
app.use(express.json());
const dbConnection = require('./connection/db');
const authenticationRoutes = require("./Routes/routes.auth");
const pagesRoutes = require("./Pages/home")
app.use(cors())

app.use("/auth", authenticationRoutes);
app.use("/", pagesRoutes)


const port = 9000;

app.listen(port, async () => {
    try {
        await dbConnection;
        console.log(`Server is running at port ${port}`);
    } catch (error) {
        console.error('Database connection error:', error.message);
    }
});


//  displine
// average ==> no value chat gpt // spcilization // practice  // hard work and consistecy(discipline) beats talent