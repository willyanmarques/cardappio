import { Request, Response } from 'express';
import knex from '../../database/connection';

class PedidoStatus {

    async index(req: Request, res: Response) {
        const items = await knex('pedido_status').select('*');
        if (!items) {
            return res.status(400).json({
                sucesso: false,
                mensagemErro: 'Falha ao listar status do pedido.',
                data: []
            });
        }
        return res.json({
            sucesso: true,
            mensagemErro: 'Sucesso!',
            data: items
        });
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        const item = await knex('pedido_status').select('*').where('id_pedido_status', id).first();
        if (!item) {
            return res.status(404).json({
                sucesso: false,
                mensagemErro: 'Status do pedido não encontrado.',
                data: []
            });
        }
        return res.json({
            sucesso: true,
            mensagemErro: 'Sucesso!',
            data: item
        });
    }

    async create(request: Request, response: Response) {
        const { descricao } = request.body;
        await knex('pedido_status').insert({ descricao })
            .then(insert => {
                console.log(insert);
                if (!insert) {
                    return response.status(400).json({
                        sucesso: false,
                        mensagemErro: 'Falha ao criar status do pedido.',
                        data: {}
                    });
                }
                const id = insert[0];
                return response.json({
                    sucesso: true,
                    mensagemErro: 'Status do pedido criado com sucesso!',
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

    async update(req: Request, res: Response) {
        const { id, descricao } = req.body;
        console.log(req.body);
        await knex('pedido_status')
            .where('id_pedido_status', id)
            .update({ descricao: descricao })
            .then(function (resp) {
                console.log(resp);
                if (resp <= 0) {
                    return res.json({
                        sucesso: false,
                        mensagemErro: 'Falha ao atualiza status do pedido, id não encontrado.'
                    });
                }
                return res.json({
                    sucesso: true,
                    mensagemErro: 'Status do pedido atualizado com sucesso.'
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

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        knex('pedido_status').where('id_pedido_status', id).del()
            .then(success => {
                console.log(success);
                if (success == 1) {
                    return response.json({
                        sucesso: true,
                        mensagemErro: 'Status do pedido deletado com sucesso!'
                    }).status(200);
                }
                return response.json({
                    sucesso: false,
                    mensagemErro: 'Falha ao deletar status do pedido, id não encontrado'
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

export default PedidoStatus;