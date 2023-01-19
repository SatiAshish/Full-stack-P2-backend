const { default: mongoose } = require("mongoose");

const burgerSubCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    image:{
        type:String
    },
    price:{
        type:Number,
        required: true
    },
    description:{
        type:String
    }
})

module.exports = mongoose.model("BurgerSubCategory", burgerSubCategorySchema);