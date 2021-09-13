import React, { useState } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout';
import UpdateHospitalProfile from './components/UpdateProfile';
import { href } from '../../../constants/extra';
import HospitalAccount from './components/HospitalAccount';
import HospitalInfo from './components/HospitalInfo';
import classNames from 'classnames';

function HospitalProfile() {

    const [accountTabSelected, setAccountTabSelected] = useState(true)

    return (
        <>
            <DashboardLayout>
                <div className="row nav-tab-link">
                <div className="col-md-12">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className={classNames('nav-link', { 'active': !accountTabSelected })} href={href} onClick={(e) => {e.preventDefault(); setAccountTabSelected(false)}}>Hospital Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className={classNames('nav-link', { 'active': accountTabSelected })} href={href} onClick={(e) => { e.preventDefault(); setAccountTabSelected(true)}}>Account</a>
                        </li>
                    </ul>
                </div>
                </div>
                {accountTabSelected ? 
                    <HospitalAccount />
                    : 
                    <HospitalInfo />
                }
                <UpdateHospitalProfile />
            </DashboardLayout>
        </>
    )
}

export default HospitalProfile
