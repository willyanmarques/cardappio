import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('pedido').then(exists => {
        if (exists) {
            knex.schema.dropTable('pedido');
        }
        if (!exists) {
            return knex.schema.createTable('pedido', table => {
                table.increments('id_pedido').primary();
                table.integer('conta_id').unsigned().notNullable();
                table.integer('entregador_id').notNullable();
                table.integer('cupom_id');
                table.string('endereco').notNullable();
                table.integer('pedido_status_id').notNullable();
                table.string('observacao');
                table.foreign('conta_id')
                    .references('id_conta')
                    .inTable('conta');
                table.timestamp('dataHora').defaultTo(knex.fn.now());
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('pedido').then(exists => {
        if (exists) {
            return knex.schema.dropTable('pedido');
        }
    })
}