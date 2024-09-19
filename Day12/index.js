// install multer
// require multer
// create input type file in form 
// write enctype = "multipart/form-data"
// write code for image stored in diskstorage provide destination and name, it is middelware
// write the middleware and access the image using req.file.path
// send data to mongodb
// require path core module to access path
// use middle ware app.use("/imgUplodes", express.static(path.join(__dirname, "imgUplodes")))  // middleware used to show image on UI, without it image is broken to show data on Ui




const express = require("express");
const ejs = require("ejs");
const multer = require("multer")  // step 2 
const path = require("path")  // path core module
const users = require("./model/model.users")
const connection = require("./connection/db")
const userRoutes = require("./contoller/routes.users")
const fs = require("fs")
const usrRegister = require("./model/model.register")


const app = express();
const port = 9000;


// middlewares
app.use(express.json()); //  to covert data in json format 
app.use(express.urlencoded())
app.use("/imgUplodes", express.static(path.join(__dirname, "imgUplodes")))  // middleware used to show image on UI, without it image is broken


app.set("view engine", "ejs")
app.use("/userRouter", userRoutes)



app.get("/", (req, res) => {
    res.end("hello world!")
})



// upload image start 

const fileUpload = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "imgUplodes/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const imageUpload = multer({ storage: fileUpload }).single("image"); // image is coming from form name = "image"

// upload image end




// form data
app.get("/form2", async (req, res) => {
    let allData = await users.find({})
    console.log(allData)
    res.render("form2", { booksData: allData })
})


// post data to mongodb
app.post("/addData", imageUpload, async (req, res) => {
    console.log(req.file)

    let image = "";
    if (req.file) {
        image = req.file.path
    }

    console.log(req.body)
    const { poets, books, awards, price } = req.body;

    const newUser = new users({ poets, books, awards, price, image })
    await newUser.save();
    console.log(newUser)
    res.redirect("/form2")
})

// delete


app.post("/register", async (req, res) => {
    console.log("register user")
    const { name, email, password, gender } = req.body;
    console.log(req.body)
    const registeredData = new usrRegister({ name, email, password, gender })
    await registeredData.save()
    console.log(registeredData)

})




app.get("/deleteData/:id", async (req, res) => {
    // console.log("id is", req.query.id)
    let id = req.params.id;
    console.log("id is", id);

    // Find the record to get the image path
    let recordToDelete = await users.findById(id);

    // Delete the image file associated with the record
    fs.unlinkSync(recordToDelete.image);


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