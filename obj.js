let studentData = [
    { id: 1, name: "ram", email: "ram@gamil.com", hobby: "guitar", phoneNo: "9922444223" },
    { id: 2, name: "rama", email: "rama@gamil.com", phoneNo: "9922543223" },
    { id: 3, name: "raman", email: "raman@gamil.com", phoneNo: "9972443223" },
    { id: 4, name: "ramesh", email: "ramesh@gamil.com", phoneNo: "8922443223" },
    { id: 6, name: "ramdhari", email: "ramdhari@gamil.com", phoneNo: "7922443223" },
]

const newData = studentData.filter((item) => item.id == 4)

const findData = studentData.find((item) => item.id === 4)
console.log(newData[0]) // [{ id: 4, name: "ramesh", email: "ramesh@gamil.com", phoneNo: "8922443223" },]
console.log(findData)




//filter return array
// find return obj


let data = { id: 6, name: "ramdhari", email: "ramdhari@gamil.com", phoneNo: "7922443223" }

data.name = "ramdhari singh dinkar"
data.email = "ramdharisinghdinkar@gmail.com"


console.log(data.name)
console.log(data.email)

