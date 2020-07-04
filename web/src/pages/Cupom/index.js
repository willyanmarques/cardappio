import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import EllipsisText from "react-ellipsis-text";
import { FiEdit, FiTrash, FiCheck, FiPlus } from 'react-icons/fi';
import moment from 'moment';
import { useForm } from "react-hook-form";
import api from '../../services/api';

const Cupom = () => {

    const [listaCupons, setListsCupons] = useState([]);
    const [msgErroListarCupons, setMsgErroListarCupons] = useState({});
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const { codigoCupom, valorCupom, tipoValorCupom, tipoDescontoCupom, descricaoCupom, validadeCupom } = data;
        const cupom = {
            codigo: codigoCupom,
            descricao: descricaoCupom,
            valor: parseFloat(valorCupom),
            is_percentual: parseInt(tipoValorCupom),
            tipo: tipoDescontoCupom,
            validade: validadeCupom,
            ativo: 1
        }
        console.log(cupom);
        api.post('/cupom/create', cupom).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })

    }

    useEffect(() => {
        api.get('/cupom/index').then(res => {
            const response = res.data;
            const sucesso = response.sucesso;
            if (sucesso) {
                console.log(response);
                setListsCupons(response.data);
            }
        }).catch(err => {
            console.log(err);
        });

    }, []);

    return (
        <div className="dashboard-main-wrapper">
            <Header />
            <Sidebar />
            <div className="dashboard-wrapper">
                <div className="container-fluid dashboard-content">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            {/* <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                <a href="#" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </a>
                            </div> */}
                            <div className="card">
                                <div className="card-header d-sm-flex align-items-center justify-content-between mb-3">
                                    <h5 className="mb-0">Lista de cupons</h5>
                                    <button
                                        href="#"
                                        className="btn btn-xs btn-success"
                                        data-toggle="modal"
                                        data-target="#modalCriarCupom">
                                        Novo cupom
                                </button>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="bg-light">
                                                <tr className="border-0">
                                                    <th className="border-0">#</th>
                                                    <th className="border-0">Código</th>
                                                    <th className="border-0">Descrição</th>
                                                    <th className="border-0">Tipo</th>
                                                    <th className="border-0">Valor</th>
                                                    <th className="border-0">Validade</th>
                                                    <th className="border-0 text-center">Status</th>
                                                    <th className="border-0 text-center">####</th>
                                                    <th className="border-0 text-center">####</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    listaCupons.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>{item.codigo}</td>
                                                                <td>
                                                                    <EllipsisText text={item.descricao} length={15} />
                                                                </td>
                                                                <td>{item.tipo}</td>
                                                                <td>{item.is_percentual == 1 ? `${item.valor}%` : `R$${item.valor}`}</td>
                                                                <td>{moment(item.validade).format("DD/MM/YYYY")}</td>
                                                                <td className="text-center">
                                                                    {
                                                                        item.ativo == 1
                                                                            ? <button className="btn btn-xs btn-success" title="Cliquei para inativar">Ativo</button>
                                                                            : <button className="btn btn-xs btn-danger" title="Cliquei para ativar">Inativo</button>
                                                                    }
                                                                </td>
                                                                <td className="text-center">
                                                                    <button className="btn btn-xs btn-primary" title="Editar">
                                                                        <FiEdit /> Editar
                                                                    </button>
                                                                </td>
                                                                <td className="text-center">
                                                                    <button className="btn btn-xs btn-danger" title="Excluir">
                                                                        <FiTrash /> Excluir
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

                {/* MODAL CRIAR CUPOM */}
                <div className="modal fade" id="modalCriarCupom" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Cadastro de cupom</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Código</label>
                                            <input ref={register({ required: true })} type="text" className="form-control" name="codigoCupom" placeholder="Ex: SUPER10" />
                                            {errors.codigoCupom && <small className="form-text text-danger">Campo obrigatório!</small>}
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Valor</label>
                                            <input ref={register({ required: true })} type="number" className="form-control" name="valorCupom" placeholder="Ex: 10" />
                                            {errors.valorCupom && <small className="form-text text-danger">Campo obrigatório!</small>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label>validade do cupom</label>
                                            <input ref={register({ required: true })} type="date" className="form-control" name="validadeCupom" />
                                            {errors.validadeCupom && <small className="form-text text-danger">Campo obrigatório!</small>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Tipo de valor</label>
                                            <select ref={register({ required: true })} name="tipoValorCupom" className="form-control">
                                                <option value="">Escolher...</option>
                                                <option value="1">Percentual</option>
                                                <option value="0">Real</option>
                                            </select>
                                            {errors.tipoValorCupom && <small className="form-text text-danger">Campo obrigatório!</small>}
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Tipo de desconto</label>
                                            <select ref={register({ required: true })} name="tipoDescontoCupom" className="form-control">
                                                <option value="">Escolher...</option>
                                                <option value="Frete">Desconto no frete</option>
                                                <option value="Total">Desconto no total da compra</option>
                                            </select>
                                            {errors.tipoDescontoCupom && <small className="form-text text-danger">Campo obrigatório!</small>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label>Descrição do cupom</label>
                                            <textarea
                                                ref={register({ required: true })}
                                                className="form-control"
                                                placeholder="Ex: Ganhe 10% de desconto na sua compra!"
                                                name="descricaoCupom" rows="3"></textarea>
                                            {errors.descricaoCupom && <small className="form-text text-danger">Campo obrigatório!</small>}
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-secondary btn-icon-split"
                                            data-dismiss="modal">
                                            {/* <span className="icon text-white-50">
                                                <FiX color="#ffffff" />
                                            </span> */}
                                            <span className="text">Fechar</span>
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-sm btn-success btn-icon-split">
                                            {/* <span className="icon text-white-50">
                                                <FiCheck color="#ffffff" />
                                            </span> */}
                                            <span className="text">Criar Cupom</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FIM MODAL CRIAR CUPOM */}

                {/* MODAL EDITAR CUPOM */}
                <div className="modal fade" id="modalExcluirCupom" tabindex="-1" role="dialog" aria-labelledby="modalExcluirCupom" aria-hidden="true">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <a href="#" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </a>
                            </div>
                            <div className="modal-body">
                                <p>Deseja realmente excluir o cupom: <b>FRETE11</b> ?</p>
                            </div>
                            <div className="modal-footer">
                                {/* <a href="#" className="btn btn-secondary" data-dismiss="modal">Close</a> */}
                                <a href="#" className="btn btn-primary">Save changes</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FIM MODAL EDITAR CUPOM */}
                <Footer />
            </div>
        </div>
    );

}

export default Cupom;