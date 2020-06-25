import express from 'express';

/** Controllers **/
import PedidoStatus from './controller/PedidoStatus';
import Conta from './controller/Conta';
import Produto from './controller/Produto';
import Categoria from './controller/Categoria';
import Cupom from './controller/Cupom';

const pedidoStatus = new PedidoStatus();
const conta = new Conta();
const produto = new Produto();
const categoria = new Categoria();
const cupom = new Cupom();


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
routes.get('/pedido-status/show/:id_pedido_status', pedidoStatus.show);
routes.put('/pedido-status/update', pedidoStatus.update);
routes.delete('/pedido-status/delete/:id_pedido_status', pedidoStatus.delete);

/*******************************************************************************
    |Descrição : Rotas para api de Conta
    |Data      : 24/06/2020
    |Autor     : Gabriel Alcantara
********************************************************************************/

routes.get('/conta/index', conta.index);
routes.post('/conta/create', conta.create);
routes.get('/conta/show/:id_conta', conta.show);
routes.put('/conta/update', conta.update);
routes.delete('/conta/delete/:id_conta', conta.delete);

/*******************************************************************************
    |Descrição : Rotas para api de Produto
    |Data      : 24/06/2020
    |Autor     : Gabriel Alcantara
********************************************************************************/

routes.get('/produto/index', produto.index);
routes.post('/produto/create', produto.create);
routes.get('/produto/show/:id_produto', produto.show);
routes.put('/produto/update', produto.update);
routes.delete('/produto/delete/:id_produto', produto.delete);


/*******************************************************************************
    |Descrição : Rotas para api de categorias
    |Data      : 24/06/2020
    |Autor     : Willyan Marques
********************************************************************************/

routes.get('/categoria/index', categoria.index);
routes.post('/categoria/create', categoria.create);
routes.get('/categoria/show/:id_categoria', categoria.show);
routes.put('/categoria/update', categoria.update);
routes.delete('/categoria/delete/:id_categoria', categoria.delete);

/*******************************************************************************
    |Descrição : Rotas para api de cupons
    |Data      : 24/06/2020
    |Autor     : Willyan Marques
********************************************************************************/

routes.get('/cupom/index', cupom.index);
routes.post('/cupom/create', cupom.create);
routes.get('/cupom/show/:id_cupom', cupom.show);
routes.put('/cupom/update', cupom.update);
routes.delete('/cupom/delete/:id_cupom', cupom.delete);

export default routes;