const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('shoppingList').where("recipeId", id);
}

function getInstructions(id) {
    return db('instructions').where("recipeId", id);
}