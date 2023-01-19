const express = require('express');
const { addBurgerCategory, getBurgerCategory } = require('../controllers/burgerController');
const { addPizzaCategory, getPizzaCategory } = require('../controllers/pizzaController');
const { addBurgerSubCategory, getBurgerSubCategory } = require('../controllers/burgerController');
const { addPizzaSubCategory, getPizzaSubCategory } = require('../controllers/pizzaController');

const router = express.Router();

// Pizza Category Routes
router.route("/pizzaCategory/add").post(addPizzaCategory);
router.route("/pizzaCategory/getAll").get(getPizzaCategory);

// Pizza SubCategory Routes
router.route("/pizzaSubCategory/add").post(addPizzaSubCategory);
router.route("/pizzaSubCategory/getAll").get(getPizzaSubCategory);

// Burger Category Routes
router.route("/burgerCategory/add").post(addBurgerCategory);
router.route("/burgerCategory/getAll").get(getBurgerCategory);

// Burger SubCategory Routes
router.route("/burgerSubCategory/add").post(addBurgerSubCategory);
router.route("/burgerSubCategory/getAll").get(getBurgerSubCategory);

module.exports = router;