const express = require('express');
const prod_Routes = express.Router();
const prodModel = require("../Model/model.products");
const auth = require("../Middleware/AuthMiddleware");


prod_Routes.get("/form", auth, (req, res) => {
    res.render("form")
})

prod_Routes.get("/editPage/:id", async (req, res) => {
    let { id } = req.params;   // we should use params insteda of query
    const data = await prodModel.findById(id);
    if (!data) {
        return res.status(404).json({ msg: "Product not found" });
    }
    // console.log(data)
    res.render("editPage", { data });
});

// product routes
prod_Routes.post("/formData", async (req, res) => {
    const { productname, price } = req.body;
    let product = new prodModel({ productname, price });
    await product.save();

})


prod_Routes.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const deleteData = await prodModel.findByIdAndDelete(id);

        req.flash('info', 'Data delete successfully');

        res.status(200).json({ msg: "data deleted successfully", deleteData })
    } catch (error) {
        res.status(400).json({ msg: "something is wrong", error })
    }

});

// Patch Route for Editing Product
prod_Routes.patch("/edit/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { productname, price } = req.body;
        // console.log("ram".productname, price)
        // find by id and update the product
        let updatedProduct = await prodModel.findByIdAndUpdate(id, { productname, price });
        if (!updatedProduct) {
            return res.status(404).json({ msg: "product not found" });
        }
        req.flash("info", "Data updated successfully")


        res.status(200).json({ msg: "product updated successfully", updatedProduct });
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong", error });
    }
});


// logout
prod_Routes.post("/logout", (req, res) => {
    res.clearCookie('authToken');  // clear the cookie
    res.status(200).json({ msg: "Logged out successfully" });
});

prod_Routes.get("/getData", async (req, res) => {
    try {
        let data = await prodModel.find();
        const infoMessage = req.flash("info")
        res.render("home", { data, infoMessage });
    } catch (error) {
        res.status(400).json({ msg: "Data not found" });
    };
});


module.exports = prod_Routes;


