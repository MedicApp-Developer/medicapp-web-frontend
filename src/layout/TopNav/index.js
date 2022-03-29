import React, { useContext } from 'react'
import { getRoutes } from '../../Utills/SideNavItems'
import { Link, useHistory } from 'react-router-dom'
import { RootContext } from "../../contextApi/index"
import { useTranslation } from "react-i18next"

function TopNav() {
    const { i18n, t } = useTranslation()

    const { selectedNav, setSelectedNav, user } = useContext(RootContext)

    const history = useHistory()
    const href = ""

    const onNavClick = (item) => {
        setSelectedNav(item.name)
        history.push(item.route)
    }

    const onLogout = () => {
        localStorage.clear()
        history.push("/login");
        // window.location.reload()
    }

    const newRoutes = getRoutes(user?.role || "PATIENT").length > 0 && getRoutes(user?.role || "PATIENT")?.filter((item) => item.name !== "Home")

    return (
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                {newRoutes.map((item, index) => (
                    <li class={`nav-item ${selectedNav === item.name && "active"}`} key={index} onClick={onNavClick.bind(this, item)}>
                        <a class="nav-link" href={href} onClick={(e) => e.preventDefault()}>{i18n.language === "ar" ? item.name_ar : item.name_en}</a>
                    </li>
                ))}
                {user && Object.values(user).length > 0 ? (
                    <li class="nav-item" style={{ paddingTop: "2.5%" }}>
                        <div className="dropdown">
                            <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="icon-user"></span> {user?.firstName + " " + user?.lastName}
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <Link className="dropdown-item" to="/profile">{t("profile")}</Link>
                                <a className="dropdown-item" href={href} onClick={onLogout}>{t("logout")}</a>
                            </div>
                        </div>
                    </li>
                ) : (
                    <>
                        <li class="nav-item">
                            <Link to="/login" class="nav-link btn btn-primary px-4 py-2">{t("login")}</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/select-registeration-type" class="nav-link btn btn-primary px-4 py-2">{t("register")}</Link>
                        </li>
                    </>

                )}
            </ul>
        </div>
    )
}

export default TopNav
