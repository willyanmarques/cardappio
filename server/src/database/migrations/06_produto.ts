import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('produto').then(exists => {
        if (exists) {
            knex.schema.dropTable('produto');
        }
        if (!exists) {
            return knex.schema.createTable('produto', table => {
                table.increments('id_produto').primary();
                table.string('nome').notNullable();
                table.string('descricao');
                table.integer('maior_de_18', 1).notNullable();
                table.float('preco').notNullable();
                table.integer('promocao', 1).notNullable();
                table.float('preco_promocional');
                table.integer('ativo', 1).notNullable();
                table.integer('categoria_id')
                    .unsigned().notNullable();
                table.foreign('categoria_id')
                    .references('id_categoria')
                    .inTable('categoria');
                table.timestamp('dataHora').defaultTo(knex.fn.now());
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('produto').then(exists => {
        if (exists) {
            return knex.schema.dropTable('produto');
        }
    })
}