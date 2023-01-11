const mongoose=require("mongoose")

const ProductSchema=mongoose.Schema({
    ProductName:{type:String},
    ProductCode:{type:String},
    ProductImage:{type:String},
    UnitPrice:{type:String},
    Quantity:{type:String},
    TotalPrice:{type:String},
    CreatedDate:{Type:Date,
    default: Date.now()
    }
})