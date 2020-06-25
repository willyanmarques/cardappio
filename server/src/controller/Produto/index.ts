import { Request, Response } from 'express';
import knex from '../../database/connection';

/*******************************************************************************
 |                               ***Cardappio***
 |Classe    : Produtos.ts
 |Descrição : Crud para a tabela de Produtos
 |Data      : 24/06/2020
 |Autor     : Gabriel Alcanata
 ********************************************************************************/

class Produto {

/*******************************************************************************
 |Descrição : returna todos os produtos cadastrados no banco
 |Data      : 24/06/2020
 |Autor     : Gabriel Alcanata
 ********************************************************************************/

    async index(req: Request, res: Response) {
        const itens = await knex('produto').select('*');
        if (itens.length > 0) {
            return res.json({
                sucesso: true,
                mensagemErro: 'Sucesso!',
                date: itens
            });
        }
        return res.status(400).json({
            sucesso: false,
            mensagemErro: 'nenhum produto encontrado ',
            data: []
        });
    }

/*******************************************************************************
 |Descrição : returna o produtos por id
 |Data      : 24/06/2020
 |Autor     : Gabriel Alcanata
 ********************************************************************************/

    async show(req: Request, res: Response) {
        const { id_produto } = req.params;
        const item = await knex('produto').select('*').where('id_produto', id_produto).first();
        if (!item) {
            return res.status(404).json({
                sucesso: false,
                mensagemErro: 'Produtos não encontrado',
                data: []
            });
        }
        return res.json({
            sucesso: false,
            mensagemErro: 'Sucesso!',
            data: []
        });
    }

/*******************************************************************************
 |Descrição : cadastro dos produtos no banco
 |Data      : 24/06/2020
 |Autor     : Gabriel Alcanata
 ********************************************************************************/

    async create(request: Request, response: Response) {
        const { nome, descricao, maior_de_18, preco, promocao, preco_promocional, ativo, categoria_id } = request.body;
        const dadosProduto = {
            nome,
            descricao,
            maior_de_18,
            preco,
            promocao,
            preco_promocional,
            ativo,
            categoria_id
        };
        await knex('produto').insert(dadosProduto)
            .then(insert => {
                console.log(insert);
                if (!insert) {
                    return response.status(400).json({
                        sucesso: false,
                        mensagemErro: 'Falha ao cadastrar o produto.',
                        data: {}
                    });
                }
                const id = insert[0];
                return response.json({
                    sucesso: true,
                    mensagemErro: 'Produto cadastrado com suceso!',
                    data: {
                        id,
                        ...dadosProduto
                    }
                });
            })
            .catch(error => {
                return response.json({
                    sucesso: false,
                    mensagemErro: `Error! ${error.sqlMessage}`,
                    sql: {
                        query: error.sql
                    }

                }).status(500);

            });
    }

/*******************************************************************************
 |Descrição : atualização dos produtos no banco
 |Data      : 24/06/2020
 |Autor     : Gabriel Alcanata
 ********************************************************************************/

    async update(req: Request, res: Response) {
        const {
            id_produto,
            nome,
            descricao,
            maior_de_18,
            preco,
            promocao,
            preco_promocional,
            ativo,
            categoria_id
        } = req.body;
        await knex('produto').where('id_produto', id_produto)
            .update({ id_produto, nome, descricao, maior_de_18, preco, promocao, preco_promocional, ativo, categoria_id })
            .then(function (resp) {
                console.log(resp);
                if (resp <= 0) {
                    return res.json({
                        sucesso: false,
                        mensagemErro: 'Falha ao atualizar o produto id não encontrado.'

                    });
                }
                return res.json({
                    sucesso: true,
                    mensagemErro: 'produto atualizado com sucesso.'
                });
            })
            .catch(function (error) {
                console.log(error);
                return res.json({
                    sucesso: false,
                    mensagemErro: `Error! ${error.sqlMessage}`,
                    sql: {
                        query: error.sql
                    }
                }).status(500);
            });
    }

/*******************************************************************************
 |Descrição : exclução dos produtos no banco
 |Data      : 24/06/2020
 |Autor     : Gabriel Alcanata
 ********************************************************************************/

    async delete(request: Request, response: Response) {
        const { id_produto } = request.params;
        knex('produto').where('id_produto', id_produto).del()
            .then(success => {
                console.log(success);
                if (success == 1) {
                    return response.json({
                        sucesso: true,
                        mensagemErro: 'produto deletado com sucesso!'
                    }).status(200);
                }
                return response.json({
                    sucesso: false,
                    mensagemErro: 'Falha ao deletar o produto'
                }).status(404);
            })
            .catch(error => {
                return response.json({
                    sucesso: false,
                    mensagemErro: `Error ${error.sqlMessage}`,
                    sql: {
                        query: error.sql
                    }
                }).status(500);
            });
    }

}
export default Produto;