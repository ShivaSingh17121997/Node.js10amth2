// let studentData = [
//     { id: 1, name: "ram", email: "ram@gamil.com", hobby: "guitar", phoneNo: "9922444223" },
//     { id: 2, name: "rama", email: "rama@gamil.com", phoneNo: "9922543223" },
//     { id: 3, name: "raman", email: "raman@gamil.com", phoneNo: "9972443223" },
//     { id: 4, name: "ramesh", email: "ramesh@gamil.com", phoneNo: "8922443223" },
//     { id: 6, name: "ramdhari", email: "ramdhari@gamil.com", phoneNo: "7922443223" },
// ]

// const newData = studentData.filter((item) => item.id == 4)

// const findData = studentData.find((item) => item.id === 4)
// console.log(newData[0]) // [{ id: 4, name: "ramesh", email: "ramesh@gamil.com", phoneNo: "8922443223" },]
// console.log(findData)




// //filter return array
// // find return obj


// let data = { id: 6, name: "ramdhari", email: "ramdhari@gamil.com", phoneNo: "7922443223" }

// data.name = "ramdhari singh dinkar"
// data.email = "ramdharisinghdinkar@gmail.com"


// console.log(data.name)
// console.log(data.email)


// promises
// req (top 10 richest person) ==> loader (pending) ==> show data of top 10 richest person resoleve, else promise rejected
// primises are used when we need to perform asynchronus operations , ex api fetching
// fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json()) // promise
//     .then((data) => console.log(data))// promise resoved
//     .catch((error) => console.log("somenting is wrong")) // promise rejected



// async function asyncFun() {
//     // we use trycatch block for error handleling;
//     try {
//         let res = await fetch("https://fakestoreapi.com/products?limit=5") // promise
//         // console.log(res) // promise

//         const data = await res.json();  // data
//         console.log(data)

//     } catch (error) {
//         console.log("something is wrong , error in fetching api")

//     }
// }
// asyncFun()


// authentiation // authorization // permission

// frontend ==> backend ==> /register ==>mongodb  // email, passwrod, name
// frontend ==> backend ==> /login ==> compare ==> providedData === registeredData? "user is logged in " : "wrong credentials"

// let str = "bablu dabalu"

// let arr = str.split(" ")

// console.log(arr)


///





/////

