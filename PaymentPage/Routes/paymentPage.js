const express = require("express")
const paymentRoute = express.Router();
const stripe = require('stripe')('Your_Secret_Key');



paymentRoute.post("/paymentroute", async (req, res) => {

    try {
        const { cardNo, cvvNo, expiryDate, amount, currency } = req.body;

        // compaire stripe req==> bacnk, ? payment successfull : payment faild;

        // create a payment method obj based on the card details recieved
        // gernerate payment method;
        const paymentMethod = await stripe.paymentMethods.create({
            type: 'card',
            card: {
                number: cardNo,
                exp_month: expiryDate.split('/')[0], // MM/YY 12
                exp_year: '20' + expiryDate.split('/')[1],// extracting year //2024
                cvc: cvvNo
            }
        })


        // create a payment intent with the given amount and currency;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, ///765
            currency: "inr",
            paymentMethod: paymentMethod.id,
            confirm: true
        })

        // send success message
        res.status(200).json({ success: true, message: "Payment successfull", paymentIntent });
    } catch (error) {
        // handle error response
        console.log("payment failed", error);
        res.status(500).json({ success: false, message: "payment failed", error: error.message })

    }

})

module.exports = paymentRoute;

// dot env install,
// .env file
// varibale = value assign
// require(dotevn).config
// process.evn.PORT