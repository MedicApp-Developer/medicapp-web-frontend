import React, { useContext, useEffect, useState } from 'react'
import DoctorInfo from './components/DoctorInfo';
import DoctorAccount from './components/DoctorsAccount';
import classNames from 'classnames';
import { href } from '../../../constants/extra';
import DashboardLayout from '../../../layout/DashboardLayout';
import UpdateDoctorProfile from './components/UpdateDoctorProfile';
import DoctorApi from '../../../api/Doctors';
import { RootContext } from '../../../contextApi';

function DoctorProfile() {
    const [doctor, setDoctor] = useState({});
    const [accountTabSelected, setAccountTabSelected] = useState(true);
    const { user } = useContext(RootContext);

    useEffect(() => {
        DoctorApi.getSingleDoctor(user.referenceId).then(res => {
            setDoctor(res.data.data);
            console.log("Doc => ", res.data.data);
        });
    }, []);

    return (
        <DashboardLayout>
            <div class="row nav-tab-link">
               <div class="col-md-12">
                  <ul class="nav justify-content-center">
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
                    <DoctorAccount doctor={doctor} />
                    : 
                    <DoctorInfo doctor={doctor} />
            }
            <UpdateDoctorProfile doctor={doctor} setDoctor={setDoctor} />
        </DashboardLayout>
    )
}

export default DoctorProfile
