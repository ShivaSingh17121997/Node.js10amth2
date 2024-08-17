const express = require("express");
const app = express();
const port = 7000;

let student = [
    {
        id: 1,
        name: "ram",
        email: "Ram@gmail.com",
        password: "ram123",
        phonNo: 2345634543
    }, {
        id: 2,
        name: "rama",
        email: "Rama@gmail.com",
        password: "rama123",
        phonNo: 2345634543
    }, {
        id: 3,
        name: "ramnam",
        email: "Ramnam@gmail.com",
        password: "ramnam123",
        phonNo: 2345634543
    },
]


app.set("view engine", "ejs")

app.get("/", (req, res) => {
    console.log(student)
    return res.render('form', {
        stud: student
    })
})
// console.log(student)

// app.get("/form",(req,res)=>{
//     console.log(student)
// })

const checkpost = (req, res, next) => {
    if (req.query.age >= 18) {
        return next();
    }
    return res.redirect('/')
}

app.get("/home", checkpost, (req, res) => {
    res.render("home")
})


app.get("/contact", checkpost, (req, res) => {
    res.render("contact")
})

app.post("/insertdata", (req, res) => {
    // console.log(req.body)
    // let id = req.body.id
    let name = req.body.name
    let email = req.body.email
    let phone = req.body.phone

    let obj = { name: name, email: email, phoneNo: phone }
    studentData.push(obj)
    res.redirect('back')

})

app.use(checkpost);

app.listen(port, (error) => {
    try {
        console.log("app is running at", port)

    } catch (error) {
        console.log(error, 'something is wrong')
    }
})
