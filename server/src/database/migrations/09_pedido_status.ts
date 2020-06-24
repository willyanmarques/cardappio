import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('pedido_status').then(exists => {
        if (exists) {
            knex.schema.dropTable('pedido_status');
        }
        if (!exists) {
            return knex.schema.createTable('pedido_status', table => {
                table.increments('id_pedido_status').primary();
                table.string('descricao').notNullable();
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('pedido_status').then(exists => {
        if (exists) {
            return knex.schema.dropTable('pedido_status');
        }
    })
}