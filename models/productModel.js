const mongoose = require('mongoose')

const productSchema = mongoose.Schema (
    {
        name: {
            type: String,
            require: true
        },
        quantity: {
            type: Number,
            require: true
        },
        price: {
            type: Number,
            require: true
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", productSchema)
module.exports = Product