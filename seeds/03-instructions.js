
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { 'step': 'Boil the egg in boiling water for 5 minutes and 30 seconds.', 'stepNumber': 1, 'recipeId': 1 },
        { 'step': 'Take out and immediately put in cold or iced water.', 'stepNumber': 2, 'recipeId': 1 },
        { 'step': 'Put packets and noodles in boiling or hot water for 3 minutes.', 'stepNumber': 1, 'recipeId': 2 },
        { 'step': 'Toast the bread.', 'stepNumber': 1, 'recipeId': 3 },
        { 'step': 'Fry the egg.', 'stepNumber': 2, 'recipeId': 3 },
        { 'step': 'Mash up the avocado.', 'stepNumber': 3, 'recipeId': 3 },
        { 'step': 'Put the avocado on the toast and the egg on the very top.', 'stepNumber': 4, 'recipeId': 3 },
      ]);
    });
};
