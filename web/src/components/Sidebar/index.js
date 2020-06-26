import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowDown, FiHome } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                {/* <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-book"></i>
                </div> */}
                <div className="sidebar-brand-text mx-3">Cardappio <sup>v.1</sup></div>
            </a>

            <div className="sidebar-heading">
                Menu
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
                    aria-controls="collapseTwo">
                    <span>Empresa</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">MENU DA EMPRESA</h6>
                        <Link to="/" className="collapse-item">Dashboard</Link>
                        <Link to="/cupons" className="collapse-item">Cupons</Link>
                    </div>
                </div>
            </li>

            {/* Divider  */}
            {/* <hr className="sidebar-divider d-none d-md-block" /> */}

            {/* Sidebar Toggler (Sidebar)  */}
            {/* <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div> */}

        </ul>
    );
}

export default Sidebar;