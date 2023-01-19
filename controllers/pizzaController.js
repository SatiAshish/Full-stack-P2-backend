const pizzaCaregory = require("../models/Pizza/pizzaCaregory");
const pizzaSubCaregory = require("../models/Pizza/pizzaSubCategory");

// Add PizzaCategory
exports.addPizzaCategory = async(req,res) =>{
    try{
        const item = new pizzaCaregory(req.body);
        const creatItem = await item.save();
        res.status(200).send(creatItem);
    }catch(err){
        res.status(400).send(err)
    }
};

// Get PizzaCategory

exports.getPizzaCategory = async(req, res) =>{
    try{
        const items = await pizzaCaregory.find();
        res.status(200).send(items);
    }catch(err){
        res.status(400).send(err);
    }
}

//Add Pizza SubCategory
exports.addPizzaSubCategory = async(req,res) =>{
    try{
        const item = new pizzaSubCaregory(req.body);
        const creatItem = await item.save();
        res.status(200).send(creatItem);
    }catch(err){
        res.status(400).send(err)
    }
};

//Get Pizza SubCategory
exports.getPizzaSubCategory = async(req, res) =>{
    try{
        const items = await pizzaSubCaregory.find();
        res.status(200).send(items);
    }catch(err){
        res.status(400).send(err);
    }
}