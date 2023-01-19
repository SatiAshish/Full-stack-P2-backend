const burgerCaregory = require("../models/Burger/burgerCategory");
const burgerSubCaregory = require("../models/Burger/burgerSubCategory");

// Add burgerCaregory
exports.addBurgerCategory = async(req,res) =>{
    try{
        const item = new burgerCaregory(req.body);
        const creatItem = await item.save();
        res.status(200).send(creatItem);
    }catch(err){
        res.status(400).send(err)
    }
};

// Get burgerCategory

exports.getBurgerCategory = async(req, res) =>{
    try{
        const items = await burgerCaregory.find();
        res.status(200).send(items);
    }catch(err){
        res.status(400).send(err);
    }
}

//Add BurgrSubCategory
exports.addBurgerSubCategory = async(req,res) =>{
    try{
        const item = new burgerSubCaregory(req.body);
        const creatItem = await item.save();
        res.status(200).send(creatItem);
    }catch(err){
        res.status(400).send(err)
    }
};

//Get BurgrSubCategory
exports.getBurgerSubCategory = async(req, res) =>{
    try{
        const items = await burgerSubCaregory.find();
        res.status(200).send(items);
    }catch(err){
        res.status(400).send(err);
    }
}