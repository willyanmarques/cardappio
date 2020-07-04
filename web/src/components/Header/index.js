import React from 'react';

const Header = () => {
    return (
        <div className="dashboard-header">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <a className="navbar-brand" href="#">Cardappio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto navbar-right-top">
                        <li className="nav-item">
                            <div id="custom-search" className="top-search-bar">
                                <input className="form-control" type="text" placeholder="Search.." />
                            </div>
                        </li>
                        <li className="nav-item dropdown notification">
                            <a className="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><i className="fas fa-fw fa-bell"></i> <span
                                    className="indicator"></span></a>
                            <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                                <li>
                                    <div className="notification-title">Notificações</div>
                                    <div className="notification-list">
                                        <div className="list-group">
                                            <a href="#" className="list-group-item list-group-item-action active">
                                                <div className="notification-info">
                                                    <div className="notification-list-user-img"><img
                                                        src="../assets/images/avatar-2.jpg" alt=""
                                                        className="user-avatar-md rounded-circle" /></div>
                                                    <div className="notification-list-user-block"><span
                                                        className="notification-list-user-name">Jeremy
                                                            Rakestraw</span>accepted your invitation to join the team.
                                                        <div className="notification-date">2 min ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-footer"> <a href="#">View all notifications</a></div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown nav-user">
                            <a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img
                                    src="../assets/images/avatar-1.jpg" alt=""
                                    className="user-avatar-md rounded-circle" /></a>
                            <div className="dropdown-menu dropdown-menu-right nav-user-dropdown"
                                aria-labelledby="navbarDropdownMenuLink2">
                                <div className="nav-user-info">
                                    <h5 className="mb-0 text-white nav-user-name">
                                        John Abraham</h5>
                                    <span className="status"></span><span className="ml-2">Available</span>
                                </div>
                                <a className="dropdown-item" href="#"><i className="fas fa-user mr-2"></i>Account</a>
                                <a className="dropdown-item" href="#"><i className="fas fa-cog mr-2"></i>Setting</a>
                                <a className="dropdown-item" href="#"><i className="fas fa-power-off mr-2"></i>Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;