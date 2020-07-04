import { Request, Response } from 'express';
import knex from '../../database/connection';


/*******************************************************************************
 |                               ***Cardappio***
 |Classe    : Conta.ts
 |Descrição : Crud para a tabela de Conta
 |Data      : 24/06/2020
 |Autor     : Gabriel Alcanata
 ********************************************************************************/

class Conta {

    /*******************************************************************************
        |Descrição : Retorna todos as Contas cadastradas no banco
        |Data      : 24/06/2020
        |Autor     : Gabriel Alcanata
    ********************************************************************************/


    async index(req: Request, res: Response) {
        const itens = await knex('conta').select('*');
        if (!itens) {
            return res.status(400).json({
                sucesso: false,
                mensagemErro: 'Falha ao listar de Conta.',
                data: []
            });
        }
        return res.json({
            sucesso: true,
            mensagemErro: 'Sucesso!',
            data: itens
        });
    }

    /*******************************************************************************
        |Descrição : Retorna todos as Contas por id
        |Data      : 24/06/2020
        |Autor     : Gabriel Alcanata
    ********************************************************************************/

    async show(req: Request, res: Response) {
        const { id_conta } = req.params;
        const item = await knex('conta').select('*').where('id_conta', id_conta).first();
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

    /*******************************************************************************
        |Descrição : Cadastro das Contas no banco de dados
        |Data      : 24/06/2020
        |Autor     : Gabriel Alcanata
    ********************************************************************************/

    async create(request: Request, response: Response) {
        const { nome, sobrenome, usuario, senha, email, cpf, telefone, logradouro, bairro, cidade, uf, status, is_whatsapp, tipo_conta_id } = request.body;
        const dadosConta = {
            nome,
            sobrenome,
            usuario,
            senha,
            email,
            cpf,
            telefone,
            logradouro,
            bairro,
            cidade,
            uf,
            status,
            is_whatsapp,
            tipo_conta_id
        };
        await knex('conta').insert(dadosConta)
            .then(insert => {
                console.log(insert);
                if (!insert) {
                    return response.status(400).json({
                        sucesso: false,
                        mensagemErro: 'Falha ao Cadastrar o Conta.',
                        data: {}
                    });
                }
                const id = insert[0];
                return response.json({
                    sucesso: true,
                    mensagemErro: 'Conta criado com sucesso!',
                    data: {
                        id,
                        ...dadosConta
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
        |Descrição : Atualiza os dados de um conta pelo id
        |Data      : 24/06/2020
        |Autor     : Gabriel Alcanata
    ********************************************************************************/

    async update(req: Request, res: Response) {
        const {
            id_conta,
            nome,
            sobrenome,
            usuario,
            senha,
            email,
            cpf,
            telefone,
            logradouro,
            bairro,
            cidade,
            uf,
            status,
            is_whatsapp,
            tipo_conta_id
        } = req.body;
        await knex('conta')
            .where('id_conta', id_conta)
            .update({ nome, sobrenome, usuario, senha, email, cpf, telefone, logradouro, bairro, cidade, uf, status, is_whatsapp, tipo_conta_id })
            .then(function (resp) {
                console.log(resp);
                if (resp <= 0) {
                    return res.json({
                        sucesso: false,
                        mensagemErro: 'Falha ao atualiza o Conta, id não encontrado.'
                    });
                }
                return res.json({
                    sucesso: true,
                    mensagemErro: 'Conta atualizado com sucesso.'
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
        |Descrição : deleta um conta do banco por id
        |Data      : 24/06/2020
        |Autor     : Gabriel Alcanata
    ********************************************************************************/

    async delete(request: Request, response: Response) {
        const { id_conta } = request.params;
        knex('conta').where('id_conta', id_conta).del()
            .then(success => {
                console.log(success);
                if (success == 1) {
                    return response.json({
                        sucesso: true,
                        mensagemErro: 'Conta deletado com sucesso!'
                    }).status(200);
                }
                return response.json({
                    sucesso: false,
                    mensagemErro: 'Falha ao deletar o Conta, id não encontrado'
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

export default Conta;