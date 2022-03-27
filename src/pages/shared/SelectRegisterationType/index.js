import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import LOGO from '../../../assets/images/logo.png';
import PATIENT_LOGO from '../../../assets/images/medical.png';
import HOSPITAL_LOGO from '../../../assets/images/resgister-hospital.png';
import { HOSPITAL_REGISTERATION_ROUTE, LOGIN_ROUTE, PATIENT_REGISTERATION_ROUTE } from '../../../constants/Redirects';

function SelectRegisterationType() {
    const history = useHistory();
    return (
        <section class="user-account select-user">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 action-icon">
                        <Link to={LOGIN_ROUTE}><span class="icon-angle-left"></span></Link>
                        {/* <Link to={LOGIN_ROUTE}><span class="icon-close"></span></Link> */}
                    </div>
                </div>
                <div class="row align-items-center text-center">
                    <div class="col-md-12">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <img class="logo" src={LOGO} alt="logo" />
                            </div>
                            <div class="col-6 col-sm-5 col-md-3 col-lg-3 col-xl-2 pr-2 pr-md-3" onClick={() => { history.push(PATIENT_REGISTERATION_ROUTE) }}>
                                <div class="card py-2">
                                    <div class="card-body">
                                        <img src={PATIENT_LOGO} alt="patient" />
                                    </div>
                                </div>
                                <h6 class="mt-3">Patient</h6>
                            </div>
                            <div class="col-6 col-sm-5 col-md-3 col-lg-3 col-xl-2 pl-3 pl-md-2" onClick={() => { history.push(HOSPITAL_REGISTERATION_ROUTE) }}>
                                <div class="card py-2">
                                    <div class="card-body">
                                        <img src={HOSPITAL_LOGO} alt="hospital" />
                                    </div>
                                </div>
                                <h6 class="mt-3">Hospital</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SelectRegisterationType
