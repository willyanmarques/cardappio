import { Request, Response } from 'express';
import knex from '../../database/connection';
import Knex from 'knex';

class Entregador {

async index (req: Request, res:Response){
    const itens = await knex('entregador').select('*');
    if(!itens){
        return res.status(400).json({
            sucesso: false,
            mensagemErro: 'Falha ao listar status do pedido.',
            data: [] 
        });
    }
    return res.json({
    sucesso: true,
    mensagemErro: 'Sucesso!',
    data: itens
});
} 
async show(req: Request, res: Response) {
    const { id } = req.params;
    const item = await knex('entregador').select('*').where('id_entregador', id).first();
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

async create(request: Request, response:Response ){
    const{ nome, sobrenome, telefone, whatsapp } = request.body;
    await knex('entregador').insert({nome, sobrenome, telefone, whatsapp})
    .then(insert => {
        console.log(insert);
        if(!insert){
            return response.status(400).json({
                sucesso:false,
                mensagemErro: 'Falha ao Cadastrar o entregador.',
                data: {} 
            });
        }
        const id = insert[0];
        return response.json({
            sucesso: true,
            mensagemErro: 'Entregador criado com sucesso!',
                    data: {
                        id,
                        nome,  
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
    const {id, nome, sobrenome, telefone, whatsapp } = req.body;
    console.log(req.body);
    await knex('entregador')
        .where('id_entregador', id)
        .update({ nome ,sobrenome , telefone, whatsapp})
        .then(function (resp) {
            console.log(resp);
            if (resp <= 0) {
                return res.json({
                    sucesso: false,
                    mensagemErro: 'Falha ao atualiza o entregador, id não encontrado.'
                });
            }
            return res.json({
                sucesso: true,
                mensagemErro: 'Entregador atualizado com sucesso.'
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

async delete(request: Request, response: Response) {
    const { id } = request.params;
    knex('entregador').where('id_entregador', id).del()
        .then(success => {
            console.log(success);
            if (success == 1) {
                return response.json({
                    sucesso: true,
                    mensagemErro: 'Entregador deletado com sucesso!'
                }).status(200);
            }
            return response.json({
                sucesso: false,
                mensagemErro: 'Falha ao deletar o entregador, id não encontrado'
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

export default Entregador;