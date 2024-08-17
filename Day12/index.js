//1 create server 
//2 connect with mongodb
//3 schema
//4 routing crud

const express = require("express");

const app = express();
app.use(express.json()); //  to covert data in json format 
const ejs = require("ejs");


app.use(express.urlencoded())


const users = require("./model/model.users")


app.set("view engine", "ejs")




const port = 9000;
const connection = require("./connection/db")

const userRoutes = require("./contoller/routes.users")


app.use("/userRouter", userRoutes)

app.get("/", (req, res) => {
    res.end("hello world!")
})

// get form
// app.get("/form", (req, res) => {
//     res.render("form")
// })


// get form 

app.get("/form2", async (req, res) => {
    let allData = await users.find({})
    console.log(allData)

    res.render("form2", { booksData: allData })
})


// post data to mongodb
app.post("/addData", async (req, res) => {
    console.log(req.body)
    const { poets, books, awards, price } = req.body;

    const newUser = new users({ poets, books, awards, price })
    await newUser.save();
    console.log(newUser)
    res.redirect("/form2")
})

// delete

app.get("/deleteData/:id", async (req, res) => {
    // console.log("id is", req.query.id)
    let id = req.params.id
    console.log("id is", id)

    // let id = req.query.id
    let deletedData = await users.findByIdAndDelete(id)
    console.log(deletedData)
    res.redirect("/form2")
})





// post data in form
// app.post("/inserData", async (req, res) => {
//     console.log(req.body)
//     const { poets, books, awards, price } = req.body;

//     const addedData = new users({ poets, books, awards, price })
//     await addedData.save()

//     console.log(addedData)

//     res.send(addedData)
//     // smsr
// })









app.listen(port, async (error) => {
    try {
        console.log("server is running at port", port)
        await connection;
        console.log("connected to mondodb")

    } catch (error) {
        res.json({ mag: "something is wrong" })
    }
})