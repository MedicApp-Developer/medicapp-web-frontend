import React, { useEffect, useState, useContext } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout';
import UpdateHospitalProfile from './components/UpdateProfile';
import { href } from '../../../constants/extra';
import HospitalAccount from './components/HospitalAccount';
import HospitalInfo from './components/HospitalInfo';
import classNames from 'classnames';
import HospitalApi from '../../../api/Hospital';
import { RootContext } from '../../../contextApi/index';
import { toast } from 'react-toastify';
import moment from 'moment';

function HospitalProfile() {

    const [accountTabSelected, setAccountTabSelected] = useState(true);
    const [hospital, setHospital] = useState(null);
    const { user } = useContext(RootContext);

    useEffect(() => {
        if(user){
            HospitalApi.getSingleHospital(user.referenceId).then(res => {
                setHospital(res.data.data);
            }).catch(err => {
                toast.error('Problem while fetching hospital profile');
            })
        }
    }, [user]);

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
                    <HospitalAccount hospitalId={user.referenceId} hospital={hospital} />
                    : 
                    <HospitalInfo hospital={hospital} />
                }
                <UpdateHospitalProfile hospitalId={user.referenceId} hospital={hospital} />
            </DashboardLayout>
        </>
    )
}

export default HospitalProfile
