import express from 'express';

/** Controllers **/
import PedidoStatus from './controller/PedidoStatus';
import Entregador from './controller/Entregador';

const pedidoStatus = new PedidoStatus();
const entregador = new Entregador();

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        name: 'Cardappio API',
        version: '0.0.1',
        developer: 'Marques, Willyan'
    })
});

/*******************************************************************************
    |Descrição : Rotas para api de status do pedido
    |Data      : 24/06/2020
    |Autor     : Willyan Marques
********************************************************************************/

routes.get('/pedido-status/index', pedidoStatus.index);
routes.post('/pedido-status/create', pedidoStatus.create);
routes.get('/pedido-status/show/:id', pedidoStatus.show);
routes.put('/pedido-status/update', pedidoStatus.update);
routes.delete('/pedido-status/delete/:id', pedidoStatus.delete);

routes.get('/entregador/index', entregador.index);
routes.post('/entregador/create', entregador.create);
routes.get('/entregador/show/:id', entregador.show);
routes.put('/entregador/update', entregador.update);
routes.delete('/entregador/delete/:id', entregador.delete);

export default routes;