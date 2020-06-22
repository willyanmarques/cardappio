import React from 'react';

const Sidebar = () => {
    return (
        <div className="app-sidebar sidebar-shadow">
            <div className="app-header__logo">
                <div className="logo-src"></div>
                <div className="header__pane ml-auto">
                    <div>
                        <button type="button" className="hamburger close-sidebar-btn hamburger--elastic"
                            data-class="closed-sidebar">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="app-header__mobile-menu">
                <div>
                    <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div className="app-header__menu">
                <span>
                    <button type="button"
                        className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                        <span className="btn-icon-wrapper">
                            <i className="fa fa-ellipsis-v fa-w-6"></i>
                        </span>
                    </button>
                </span>
            </div>
            <div className="scrollbar-sidebar">
                <div className="app-sidebar__inner">
                    <ul className="vertical-nav-menu">
                        <li className="app-sidebar__heading">Empresa</li>
                        <li>
                            <a href="#">
                                <i className="metismenu-icon pe-7s-car"></i>
                                Components
                            <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                            </a>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="metismenu-icon">
                                        </i>Tabs
                                </a>
                                </li>
                                <li>
                                    <a href="components-scrollable-elements.html">
                                        <i className="metismenu-icon">
                                        </i>Scrollable
                                </a>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="app-sidebar__heading">Pedidos</li>
                        <li>
                            <a href="dashboard-boxes.html">
                                <i className="metismenu-icon pe-7s-display2"></i>
                            Item
                        </a>
                        </li>
                        <li className="app-sidebar__heading">Produtos</li>
                        <li>
                            <a href="dashboard-boxes.html">
                                <i className="metismenu-icon pe-7s-display2"></i>
                            Item
                        </a>
                        </li>
                        <li className="app-sidebar__heading">Grupos</li>
                        <li>
                            <a href="forms-controls.html">
                                <i className="metismenu-icon pe-7s-mouse">
                                </i>Forms Controls
                        </a>
                        </li>
                        <li className="app-sidebar__heading">Entregadores</li>
                        <li>
                            <a href="charts-chartjs.html">
                                <i className="metismenu-icon pe-7s-graph2">
                                </i>ChartJS
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;