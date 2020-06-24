import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('pedido').then(exists => {
        if (!exists) {
            return knex.schema.createTable('pedido', table => {
                table.increments('pedido_id').primary();
                table.integer('conta_id');
                table.integer('entregador_id');
                table.integer('cupom_id');
                table.timestamp('dataHora').defaultTo(knex.fn.now());
                table.string('endereco');
                table.integer('pedido_status_id');
                table.string('observacao');
                table.foreign('conta_id')
                    .references('id_conta')
                    .inTable('conta');
                table.foreign('entregador_id')
                    .references('id_entregador')
                    .inTable('entregador');                    
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