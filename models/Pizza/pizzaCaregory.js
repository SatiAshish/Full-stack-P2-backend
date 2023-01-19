const { default: mongoose } = require("mongoose");

const pizzaCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    image:{
        type:String
    }
})

module.exports = mongoose.model("PizzaCategory", pizzaCategorySchema);