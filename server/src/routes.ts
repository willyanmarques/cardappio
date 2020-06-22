import express from 'express';

/** Controllers **/
import PedidoStatus from './controller/PedidoStatus';

const pedidoStatus = new PedidoStatus();

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        name: 'Cardappio API',
        version: '0.0.1',
        developer: 'Marques, Willyan'
    })
});

/** Status do Pedido */
routes.get('/pedido-status/index', pedidoStatus.index);
routes.post('/pedido-status/create', pedidoStatus.create);
routes.get('/pedido-status/show/:id', pedidoStatus.show);
routes.put('/pedido-status/update', pedidoStatus.update);
routes.delete('/pedido-status/delete/:id', pedidoStatus.delete);

export default routes;