const express = require('express');
const Recipes = require('./recipeModel');
const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.get('/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(shoppingList => {
            res.status(200).json(shoppingList);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(instructions => {
            res.status(200).json(instructions);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

module.exports = router;