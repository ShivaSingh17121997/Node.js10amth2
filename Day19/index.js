const express = require("express");
const app = express();
const connection = require("./connection/db");
const userRouter = require("./rotues/auth.routes");
const postRouter = require("./rotues/post.routes")


const port = 8990;


// middleware
app.use(express.json());
app.use("/auth", userRouter)
app.use("/post", postRouter)



app.get("/", (req, res) => {
    res.send("hi")
})




app.listen(port, async () => {
    try {
        await connection;
        console.log("server is running at port : ", port)
    } catch (error) {
        console.log(error)
    }
})
