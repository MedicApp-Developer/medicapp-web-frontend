import React, { useContext } from 'react'
import { getRoutes } from '../../Utills/SideNavItems'
import { Link, useHistory } from 'react-router-dom';
import { RootContext } from "../../contextApi/index";
import { LOGIN_ROUTE } from '../../constants/Redirects';

function TopNav() {

    const { selectedNav, setSelectedNav, user } = useContext(RootContext);

    const history = useHistory();
    const href = ""

    const onNavClick = (item) => {
        setSelectedNav(item.name);
        history.push(item.route);
    }

    const onLogout = () => {
        localStorage.clear();
        // history.push(LOGIN_ROUTE);
        window.location.reload();
    }

    console.log("User => ", user);
    
    const newRoutes = getRoutes(user?.role).length > 0 && getRoutes(user?.role)?.filter((item) => item.name !== "Home");

    return (
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            {newRoutes.map((item, index) => (
                <li class={`nav-item ${selectedNav === item.name && "active"}`} key={index} onClick={onNavClick.bind(this, item)}>
                    <a class="nav-link" href={href} onClick={(e) => e.preventDefault()}>{item.name}</a>
                </li>
            ))}
            {user && Object.values(user).length > 0 ? (
                <li class="nav-item" style={{paddingTop: "2.5%"}}>
                    <div className="dropdown">
                        <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="icon-user"></span> {user?.firstName + " " + user?.lastName}
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/patient/profile">Profile</Link>
                            <a className="dropdown-item" href={href} onClick={onLogout}>Logout</a>
                        </div>
                    </div>
                </li>
            ) : (
                <li class="nav-item">
                    <Link to="/select-registeration-type" class="nav-link btn btn-primary px-4 py-2">Register</Link>
                </li>
            )}
            </ul>
        </div>
    )
}

export default TopNav
