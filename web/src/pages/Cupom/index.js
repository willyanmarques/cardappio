import React, { useEffect, useState } from 'react';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import api from '../../services/api';
import moment from 'moment';
import EllipsisText from "react-ellipsis-text";
import { FiEdit, FiTrash2, FiPlus, FiCheck, FiX } from 'react-icons/fi';

const Cupom = () => {

    const [cupons, setCupons] = useState([]);

    useEffect(() => {

        api.get('/cupom/index').then(res => {
            const response = res.data;
            const sucesso = response.sucesso;
            if (sucesso) {
                console.log(response);
                setCupons(response.data);
            }
        }).catch(err => {
            console.log('Erro ao carregar api de cupons');
        });

    }, []);

    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    {/* PAGINA CUPOM */}

                    <div className="container-fluid">
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h4 mb-0 text-gray-800">Cupons</h1>
                            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm">
                                <FiPlus /> Novo cupom
                            </a>
                        </div>

                        {/* <div className={`alert alert-danger ${cupons.length > 0 ? '' : 'd-none'}`} role="alert">
                            Ops, nenhum cupom encontrado até o momento!
                        </div> */}

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">
                                            Lista de cupons
                                        </h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Código</th>
                                                        <th scope="col">Descrição</th>
                                                        <th scope="col">Valor</th>
                                                        <th scope="col">Validade</th>
                                                        <th scope="col">Status</th>
                                                        <th className="text-center" scope="col">###</th>
                                                        <th className="text-center" scope="col">###</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        cupons.map((item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td>{item.codigo}</td>
                                                                    <td>
                                                                        <EllipsisText text={item.descricao} length={20} />
                                                                    </td>
                                                                    <td>{item.is_percentual == 1 ? `${item.valor}%` : `R$${item.valor}`}</td>
                                                                    <td>{moment(item.validade).format("DD/MM/YYYY")}</td>
                                                                    <td>{item.ativo == 1 ? <span className="badge badge-success">Ativo</span> : <span className="badge badge-danger">Inativo</span>}</td>
                                                                    <td className="text-center">
                                                                        <button
                                                                            className="btn btn-sm btn-danger btn-icon-split">
                                                                            <span className="icon text-white-50">
                                                                                <FiTrash2 color="#ffffff" />
                                                                            </span>
                                                                            <span className="text">Excluir</span>
                                                                        </button>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <button
                                                                            className="btn btn-sm btn-primary btn-icon-split"
                                                                            data-toggle="modal"
                                                                            data-target="#modalExemplo">
                                                                            <span className="icon text-white-50">
                                                                                <FiEdit color="#ffffff" />
                                                                            </span>
                                                                            <span className="text">Editar</span>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal */}
                    <div className="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Título do modal</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    conteudo do modal
                                </div>
                                <div className="modal-footer">
                                    <button 
                                    type="button" 
                                    className="btn btn-sm btn-secondary btn-icon-split" 
                                    data-dismiss="modal">
                                        <span className="icon text-white-50">
                                            <FiX color="#ffffff" />
                                        </span>
                                        <span className="text">Fechar</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-success btn-icon-split">
                                        <span className="icon text-white-50">
                                            <FiCheck color="#ffffff" />
                                        </span>
                                        <span className="text">Salvar</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FIM PAGINA CUPOM */}
                </div>
                <Footer />
            </div>
        </div >
    );
}
export default Cupom;