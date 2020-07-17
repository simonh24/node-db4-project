exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipeName').notNullable();
  })
  .createTable('shoppingList', tbl => {
      tbl.increments();
      tbl.string('ingredientName').notNullable();
      tbl.float('quantity').notNullable();
      tbl.integer('recipeId').unsigned().notNullable().references('id').inTable('recipes').onDelete("CASCADE");
  })
  .createTable('instructions', tbl => {
      tbl.increments();
      tbl.string('step').notNullable();
      tbl.integer('stepNumber').notNullable();
      tbl.integer('recipeId').unsigned().notNullable().references('id').inTable('recipes').onDelete("CASCADE");
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('instructions')
    .dropTableIfExists('shoppingList')
    .dropTableIfExists('recipes');
};
