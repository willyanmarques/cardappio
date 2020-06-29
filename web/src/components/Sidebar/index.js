import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="nav-left-sidebar sidebar-dark">
            <div className="menu-list">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-divider">Menu</li>
                            <li className="nav-item">
                                <a className="nav-link"
                                    href="#"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    data-target="#submenu-2"
                                    aria-controls="submenu-2">
                                    <i className="fa fa-fw fa-rocket"></i>
                                    Empresa
                                </a>
                                <div id="submenu-2"
                                    className="collapse submenu">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Dashboard</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/cupons" className="nav-link">Cupons</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );

}

export default Sidebar;