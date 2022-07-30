const mongoose= require('mongoose')

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    discountPercentage:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
})

module.exports = ProductModel = mongoose.model('Product', productSchema);  