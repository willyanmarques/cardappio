import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="app-header header-shadow">
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
                <div className="app-header__content">
                    <div className="app-header-right">
                        <div className="header-btn-lg pr-0">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="btn-group">
                                            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                className="p-0 btn">
                                                <img width="42" className="rounded-circle" src={require('../../assets/images/avatars/1.jpg')}
                                                    alt="" />
                                                <i className="fa fa-angle-down ml-2 opacity-8"></i>
                                            </a>
                                            <div role="menu" aria-hidden="true"
                                                className="dropdown-menu dropdown-menu-right">
                                                <button type="button" className="dropdown-item">User
                                                Account</button>
                                                <button type="button" className="dropdown-item">Settings</button>
                                                <h6 className="dropdown-header">Header</h6>
                                                <button type="button" className="dropdown-item">Actions</button>
                                                <div className="dropdown-divider"></div>
                                                <button type="button" className="dropdown-item">Dividers</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content-left  ml-3 header-user-info">
                                        <div className="widget-heading">
                                            Itachi Uchiha
                                    </div>
                                        <div className="widget-subheading">
                                            Ninja da Folha
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;