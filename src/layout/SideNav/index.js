import React, { useContext } from 'react'
import { getRoutes } from '../../Utills/SideNavItems'
import { useHistory } from 'react-router-dom';
import { RootContext } from "../../contextApi/index";
import { HOSPITAL } from '../../constants/Roles';

function SideNav() {

    const { selectedNav, setSelectedNav, user } = useContext(RootContext);

    const history = useHistory();
    const href = ""

    const onNavClick = (item) => {
        setSelectedNav(item.name);
        history.push(item.route);
    }

    let navLinks = getRoutes(user?.role).length > 0 && getRoutes(user?.role);
    
    if(user.role === HOSPITAL && user.PCRDPI === false) {
        navLinks = navLinks.filter(function(item) {
            if (item["name"] === "PCR Test" || item["name"] === "PCR Vaccination") {
                return false;
              }
                return true;
          });
    }

    return (
        <ul class="sidebar-nav">
            {navLinks.map((item, index) => (
                <li class={selectedNav === item.name && "active"} key={index} onClick={onNavClick.bind(this, item)}>
                    <a href={href} onClick={(e) => e.preventDefault()}><span class={item.icon}></span> {item.name}</a>
                </li>
            ))}
        </ul>
    )
}

export default SideNav
