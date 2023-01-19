const  mongoose = require("mongoose");

const burgerCategorySchema = new mongoose.Schema({
    name:{
        type:String,
    },
    image:{
        type:String
    }
})

module.exports = mongoose.model("BurgerCategory", burgerCategorySchema);