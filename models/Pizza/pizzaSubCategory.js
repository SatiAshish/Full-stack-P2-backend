const { default: mongoose } = require("mongoose");

const pizzaSubCategorySchema = new mongoose.Schema({
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

module.exports = mongoose.model("PizzaSubCategory", pizzaSubCategorySchema);