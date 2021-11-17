import React, { useContext } from 'react'
import { getRoutes } from '../../Utills/SideNavItems'
import { Link, useHistory } from 'react-router-dom';
import { RootContext } from "../../contextApi/index";

function TopNav() {

    const { selectedNav, setSelectedNav, user } = useContext(RootContext);

    const history = useHistory();
    const href = ""

    const onNavClick = (item) => {
        setSelectedNav(item.name);
        history.push(item.route);
    }
    
    const newRoutes = getRoutes(user?.role).length > 0 && getRoutes(user?.role)?.filter((item) => item.name !== "Home");

    return (
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            {newRoutes.map((item, index) => (
                <li class={`nav-item ${selectedNav === item.name && "active"}`} key={index} onClick={onNavClick.bind(this, item)}>
                    <a class="nav-link" href={href} onClick={(e) => e.preventDefault()}>{item.name}</a>
                </li>
            ))}
                <li class="nav-item">
                    <Link to="/register-patient" class="nav-link btn btn-primary px-4 py-2" href="javascript:void(0)">Register</Link>
                </li>
            </ul>
        </div>
    )
}

export default TopNav
