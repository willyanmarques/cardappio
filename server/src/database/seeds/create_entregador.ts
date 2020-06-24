import Knex from 'knex';

/*******************************************************************************
    |Descrição : Mock de dados para tabela de entregadores
    |Data      : 24/06/2020
    |Autor     : Willyan Marques
********************************************************************************/

export async function seed(knex: Knex) {
    await knex('entregador').insert([
        { nome: 'Paulo', sobrenome: 'Bicho', email: 'exemplo@gmail.com', cpf: '10978596874', telefone: '81997096115', logradouro: 'Rua de Exemplo Nº77', bairro: 'Centro', cidade: 'Recife', uf: 'PE' },
        { nome: 'Deidara', sobrenome: 'do Corre', email: 'exemplo@gmail.com', cpf: '30178516874', telefone: '81997096115', logradouro: 'Rua de Exemplo Nº77', bairro: 'Janga', cidade: 'Paulista', uf: 'PE' },
        { nome: 'Sasori', sobrenome: 'da Areia', email: 'exemplo@gmail.com', cpf: '10978596874', telefone: '81997096115', logradouro: 'Rua de Exemplo Nº77', bairro: 'Centro', cidade: 'Abreu e Lima', uf: 'PE' },
        { nome: 'Hidan', sobrenome: 'Imortal', email: 'exemplo@gmail.com', cpf: '10978596874', telefone: '81997096115', logradouro: 'Rua de Exemplo Nº77', bairro: 'Centro', cidade: 'Olinda', uf: 'PE' },
    ]);
}
