const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
        ProductName: {type: String},
        ProductCode: {type: String},
        ProductImage: {type: String},
        UnitPrice: {type: Number},
        Quantity: {type: Number},
        TotalPrice: {type: Number},
        CreatedDate: {type: Date, default: Date.now()}
    }, {versionKey: false}
)

const ProductsModel = mongoose.model('Products', ProductSchema)
module.exports = ProductsModel