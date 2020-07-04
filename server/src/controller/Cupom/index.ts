import { Request, Response } from 'express';
import knex from '../../database/connection';

/*******************************************************************************
 |                               ***Cardappio***
 |Classe    : Cupom.ts
 |Descrição : Crud para a tabela de cupom
 |Data      : 26/06/2020
 |
 ********************************************************************************/

class Cupom {

    /*******************************************************************************
        |Descrição : Lista todos os cupons registrados na base
        |Data      : 24/06/2020
        |Autor     : Willyan Marques
    ********************************************************************************/

    async index(req: Request, res: Response) {
        const items = await knex('cupom').select('*');
        console.log(items)
        if (items.length > 0) {
            return res.json({
                sucesso: true,
                mensagemErro: 'Sucesso!',
                data: items
            });
        }
        return res.status(400).json({
            sucesso: false,
            mensagemErro: 'Nenhum cupom encontado.',
            data: []
        });
    }

    /*******************************************************************************
        |Descrição : Retorna um cupom por id
        |Data      : 24/06/2020
        |Autor     : Willyan Marques
    ********************************************************************************/

    async show(req: Request, res: Response) {
        const { id_cupom } = req.params;
        const item = await knex('cupom').select('*').where('id_cupom', id_cupom).first();
        if (!item) {
            return res.status(404).json({
                sucesso: false,
                mensagemErro: 'Cupom não encontrada para o id informado.',
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
        |Descrição : Cria um novo cupom
        |Data      : 24/06/2020
        |Autor     : Willyan Marques
    ********************************************************************************/

    async create(request: Request, response: Response) {
        const { codigo, descricao, is_percentual, tipo, valor, validade, ativo } = request.body;
        const dadosCupom = {
            codigo,
            is_percentual,
            tipo,
            descricao,
            valor,
            validade,
            ativo
        };
        await knex('cupom').insert(dadosCupom)
            .then(insert => {
                console.log(insert);
                if (!insert) {
                    return response.status(400).json({
                        sucesso: false,
                        mensagemErro: 'Falha ao criar cupom.',
                        data: {}
                    });
                }
                const id_cupom = insert[0];
                return response.json({
                    sucesso: true,
                    mensagemErro: 'Cupom criado com sucesso!',
                    data: {
                        id_cupom,
                        ...dadosCupom
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
        |Descrição : Atualiza um cupom
        |Data      : 24/06/2020
        |Autor     : Willyan Marques
    ********************************************************************************/

    async update(request: Request, response: Response) {
        const { id_cupom, codigo, descricao, valor, validade, ativo } = request.body;
        const dadosCupom = {
            id_cupom,
            codigo,
            descricao,
            valor,
            validade,
            ativo
        };
        await knex('cupom')
            .where('id_cupom', id_cupom)
            .update(dadosCupom)
            .then(function (resp) {
                if (resp <= 0) {
                    return response.json({
                        sucesso: false,
                        mensagemErro: 'Falha ao atualiza cupom, id não encontrado.'
                    });
                }
                return response.json({
                    sucesso: true,
                    mensagemErro: 'Cupom atualizado com sucesso!'
                });
            })
            .catch(function (error) {
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
       |Descrição : Deleta uma cupom por id
       |Data      : 24/06/2020
       |Autor     : Willyan Marques
   ********************************************************************************/

    async delete(request: Request, response: Response) {
        const { id_cupom } = request.params;
        knex('cupom').where('id_cupom', id_cupom).del()
            .then(success => {
                console.log(success);
                if (success == 1) {
                    return response.json({
                        sucesso: true,
                        mensagemErro: 'Cupom deletado com sucesso!'
                    }).status(200);
                }
                return response.json({
                    sucesso: false,
                    mensagemErro: 'Falha ao deletar cupom, id não encontrado.'
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

export default Cupom;