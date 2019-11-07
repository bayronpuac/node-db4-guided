
exports.up = function(knex) {
  return knex.schema
    .createTable('species', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
    })
    .createTable('animal', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();

        tbl.interger('species_id')
        .unsigned()
        .reference('id')
        .inTable('species')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE'); // about changing the value of the primary key.
    })
    .createTable('zoos', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('address', 255);
    })
    .createTable('animal_zoos', tbl => {
        tbl.increments();
        tbl.interger('zoo_id')
        .unsigned()
        .reference('id')
        .inTable('zoos')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        tbl.interger('animal_id')
        .unsigned()
        .reference('id')
        .inTable('animals')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')



    })
};

exports.down = function(knex) {
  
};
