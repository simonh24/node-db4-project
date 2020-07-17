
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shoppingList').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('shoppingList').insert([
        {'ingredientName': 'Eggs', 'quantity': 1, 'recipeId': 1},
        {'ingredientName': 'Ramen Packet', 'quantity': 1, 'recipeId': 2},
        {'ingredientName': 'Bread', 'quantity': 1, 'recipeId': 3},
        {'ingredientName': 'Avocado', 'quantity': 0.5, 'recipeId': 3},
        {'ingredientName': 'Egg', 'quantity': 1, 'recipeId': 3},
      ]);
    });
};
