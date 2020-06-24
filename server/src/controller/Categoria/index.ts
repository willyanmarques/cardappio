import { Request, Response } from 'express';
import knex from '../../database/connection';

/*******************************************************************************
 |                               ***Cardappio***
 |Classe    : Categoria.ts
 |Descrição : Crud para a tabela de status do pedido
 |Data      : 26/06/2020
 |
 ********************************************************************************/

class Categoria {

    /*******************************************************************************
        |Descrição : Lista todas as categorias cadatradas na base
        |Data      : 24/06/2020
        |Autor     : Willyan Marques
    ********************************************************************************/

    async index(req: Request, res: Response) {
        const items = await knex('categoria').select('*');
        if (items.length > 0) {
            return res.json({
                sucesso: true,
                mensagemErro: 'Sucesso!',
                data: items
            });
        }
        return res.status(400).json({
            sucesso: false,
            mensagemErro: 'Nenhuma categoria encontrada.',
            data: []
        });
    }

    /*******************************************************************************
        |Descrição : Retorna uma categoria por id
        |Data      : 24/06/2020
        |Autor     : Willyan Marques
    ********************************************************************************/

    async show(req: Request, res: Response) {
        const { id_categoria } = req.params;
        const item = await knex('categoria').select('*').where('id_categoria', id_categoria).first();
        if (!item) {
            return res.status(404).json({
                sucesso: false,
                mensagemErro: 'Categoria não encontrada para o id informado.',
                data: []
            });
        }
        return res.json({
            sucesso: true,
            mensagemErro: 'Sucesso!',
            data: item
        });
    }

    /*******************************************************************************
        |Descrição : Cria uma nova categoria
        |Data      : 24/06/2020
        |Autor     : Willyan Marques
    ********************************************************************************/

    async create(request: Request, response: Response) {
        const { descricao, ativo } = request.body;
        await knex('categoria').insert({ descricao, ativo })
            .then(insert => {
                console.log(insert);
                if (!insert) {
                    return response.status(400).json({
                        sucesso: false,
                        mensagemErro: 'Falha ao criar categoria.',
                        data: {}
                    });
                }
                const id = insert[0];
                return response.json({
                    sucesso: true,
                    mensagemErro: 'Categoria criada com sucesso!',
                    data: {
                        id,
                        descricao
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
        |Descrição : Atualiza uma categoria
        |Data      : 24/06/2020
        |Autor     : Willyan Marques
    ********************************************************************************/

    async update(req: Request, res: Response) {
        const { id_categoria, descricao, ativo } = req.body;
        console.log(req.body);
        await knex('categoria')
            .where('id_categoria', id_categoria)
            .update({ descricao, ativo })
            .then(function (resp) {
                console.log(resp);
                if (resp <= 0) {
                    return res.json({
                        sucesso: false,
                        mensagemErro: 'Falha ao atualiza categoria, id não encontrado.'
                    });
                }
                return res.json({
                    sucesso: true,
                    mensagemErro: 'Categoria atualizada com sucesso!'
                });
            })
            .catch(function (error) {
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
       |Descrição : Deleta uma categoria por id
       |Data      : 24/06/2020
       |Autor     : Willyan Marques
   ********************************************************************************/

    async delete(request: Request, response: Response) {
        const { id_categoria } = request.params;
        knex('categoria').where('id_categoria', id_categoria).del()
            .then(success => {
                console.log(success);
                if (success == 1) {
                    return response.json({
                        sucesso: true,
                        mensagemErro: 'Categoria deletada com sucesso!'
                    }).status(200);
                }
                return response.json({
                    sucesso: false,
                    mensagemErro: 'Falha ao deletar categoria, id não encontrado.'
                }).status(404);
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

}

export default Categoria;