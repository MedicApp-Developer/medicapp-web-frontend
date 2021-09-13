import React, { useState, useContext } from 'react'
import SideNav from '../SideNav';
import { RootContext } from '../../contextApi/index';
import { useHistory } from 'react-router-dom';
import { HOSPITAL_PROFILE_ROUTE, LAB_PROFILE_ROUTE, LOGIN_ROUTE, NURSE_PROFILE_ROUTE } from '../../constants/Redirects';
import { href } from '../../constants/extra';
import LOGO from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { HOSPITAL, LABORTORY, NURSE } from '../../constants/Roles';

function DashboardLayout({ children }) {

    const { user } = useContext(RootContext);
    const history = useHistory();

    const [toggle, setToggle] = useState(false);

    const onCloseClick = (e) => {
        e.preventDefault();
        setToggle(false);
    }

    const onOpenClick = (e) => {
        e.preventDefault();
        setToggle(true);
    }

    const onLogout = () => {
        localStorage.clear();
        history.push(LOGIN_ROUTE);
    }

    let redirectTo = null;

    switch(user?.role){
        case NURSE: redirectTo = NURSE_PROFILE_ROUTE; break;
        case HOSPITAL: redirectTo = HOSPITAL_PROFILE_ROUTE; break;
        case LABORTORY: redirectTo = LAB_PROFILE_ROUTE; break;
        default: redirectTo = "/";
    }

    return (
        <div id="wrapper" className={classNames({ 'toggled': toggle })}>
            <aside id="sidebar-wrapper" class="scrollbar">
                <a href={href} class="d-lg-none" ><i id="close" onClick={onCloseClick} class="icon-close"></i></a>
                <div class="text-center logo">
                    <a href={href}>
                        <img src={LOGO} alt="logo" />
                    </a>
                </div>
                <form class="form-inline search-form d-lg-none">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <span class="icon-search"></span>
                </form>
                <SideNav />
            </aside>
            <section id="content-wrapper" class="user-dashboard">
            <header>
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a href={href} class="d-lg-none" id="sidebar-toggle" onClick={onOpenClick}><i class="fa fa-bars"></i></a>
                        <form class="form-inline search-form d-none d-lg-block">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                            <span class="icon-search"></span>
                        </form>
                        <ul class="navbar-nav ml-auto align-items-center">
                            <li class="nav-item">
                                <div class="dropdown">
                                <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="icon-user"></span> {user?.name}
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <Link class="dropdown-item" to={redirectTo}>Profile</Link>
                                    <a class="dropdown-item" href={href} onClick={onLogout}>Logout</a>
                                </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </header>
                {children}
            </section>
        </div>
    )
}

export default DashboardLayout
