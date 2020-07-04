import { Request, Response } from 'express';
import knex from '../../database/connection';

class Pedido {

    async index(req: Request, res: Response ){
        const pedido = await knex('pedido').select('*');
        if (pedido.length > 0) {
            return res.json({
                sucesso: true,
                mensagemErro: 'Sucesso!',
                data: pedido
            });
        }
        return res.status(400).json({
            sucesso: false,
            mensagemErro: 'Nenhum pedido encontado.',
            data: []
        });
    }

    async show (req: Request, res: Response){
        const {id_pedido} = req.params;
        const pedido = await knex('pedido').select('*').where('id_pedido', id_pedido).first();
        if (!pedido) {
            return res.status(400).json({
                sucesso: false,
                mensagemErro: 'Nenhum pedido encontado.',
                data: []
            });
        }
                return res.json({
                    sucesso: true,
                    mensagemErro: 'Sucesso!',
                    data: pedido
                });
    }

    async create (req: Request, res: Response){
      const {conta_id,entregador_id,cupom_id,endereco,pedido_status_id,observacao} = req.body;
      await knex ('pedido').insert({conta_id,entregador_id,cupom_id,endereco,pedido_status_id,observacao})
      .then(insert =>{
          console.log(insert);
          if(!insert){
            return res.status(400).json({
                sucesso:false,
                mensagemErro: 'Falha ao Cadastrar o entregador.',
                data: {} 
            });
          }
          const id = insert[0];
          return res.json({
              sucesso: true,
              mensagemErro: 'Entregador criado com sucesso!',
                      data: {
                          id,
                           
                      }
  
          });
      })
      .catch(error => {
        return res.json({
            sucesso: false,
            mensagemErro: `Error! ${error.sqlMessage}`,
            sql: {
                query: error.sql
            }
        }).status(500);
    });

    const {id_produto,pedido_id,valor_produto,quantidade} = req.body;
    await knex('pedido_item').insert({id_produto,pedido_id,valor_produto,quantidade})
    .then(insert =>{
        console.log(insert);
        if(!insert){
          return res.status(400).json({
              sucesso:false,
              mensagemErro: 'Falha ao Cadastrar o entregador.',
              data: {} 
          });
        }
        const id = insert[0];
        return res.json({
            sucesso: true,
            mensagemErro: 'Entregador criado com sucesso!',
                    data: {
                        id,
                         
                    }

        });
    })
    .catch(error => {
      return res.json({
          sucesso: false,
          mensagemErro: `Error! ${error.sqlMessage}`,
          sql: {
              query: error.sql
          }
      }).status(500);
  });

    }

}

export default Pedido;