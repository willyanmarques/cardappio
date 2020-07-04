import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('pedido_item_adicional').then(exists => {
        if (!exists) {
            return knex.schema.createTable('pedido_item_adicional', table => {
                table.increments('id_pedido_item_adicional').primary();
                table.integer('pedido_item_id')
                    .unsigned()
                    .notNullable();;
                table.integer('adicional_id');
                table.integer('quantidade');
                table.float('valor');
                table.foreign('pedido_item_id')
                    .references('id_pedido_item')
                    .inTable('pedido_item');
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('pedido_item_adicional').then(exists => {
        if (exists) {
            return knex.schema.dropTable('pedido_item_adicional');
        }
    })
}