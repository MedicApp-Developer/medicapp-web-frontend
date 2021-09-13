import React, { useContext } from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import PATIENT_IMAGE from '../../../assets/images/patient.png';
import { useHistory } from 'react-router-dom';
import { HOSPITAL_PATIENT_INFO_ROUTE, NURSE_PATIENT_INFO_ROUTE } from '../../../constants/Redirects';
import { RootContext } from '../../../contextApi';
import { NURSE } from '../../../constants/Roles';

function Patient() {

    const history = useHistory();
    const { user } = useContext(RootContext);

    const redirectTo = user.role === NURSE ? NURSE_PATIENT_INFO_ROUTE : HOSPITAL_PATIENT_INFO_ROUTE;

    return (
        <DashboardLayout>
            <div className="row align-items-center add-list">
               <div className="col-sm-12">
                  <h4>Patient List</h4>
               </div>
            </div>
            <div className="row list-block patient-list">
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 pointer" onClick={(e) => { history.push(redirectTo) } }>
                  <div className="card">
                     <div className="card-body">
                        <div className="media">
                           <img src={PATIENT_IMAGE} alt="patient" />
                           <div className="media-body">
                              <ul>
                                 <li>
                                    <h6>Antony Smith</h6>
                                    <p>3456889</p>
                                 </li>
                                 <li>
                                    <p>Age</p>
                                    <h6>28 years old</h6>
                                 </li>
                                 <li>
                                    <p>Birthday</p>
                                    <h6>01 February 1993</h6>
                                 </li>
                                 <li>
                                    <p>Diagnose</p>
                                    <h6>Diabetes</h6>
                                 </li>
                                 <li>
                                    <p>Insurance</p>
                                    <h6>Isurance Name</h6>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="dropdown">
                        <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="icon-dots"></span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a className="dropdown-item delete-item" href={href}>Delete</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <div className="media">
                           <img src={PATIENT_IMAGE} alt="patient" />
                           <div className="media-body">
                              <ul>
                                 <li>
                                    <h6>Antony Smith</h6>
                                    <p>3456889</p>
                                 </li>
                                 <li>
                                    <p>Age</p>
                                    <h6>28 years old</h6>
                                 </li>
                                 <li>
                                    <p>Birthday</p>
                                    <h6>01 February 1993</h6>
                                 </li>
                                 <li>
                                    <p>Diagnose</p>
                                    <h6>Diabetes</h6>
                                 </li>
                                 <li>
                                    <p>Insurance</p>
                                    <h6>Isurance Name</h6>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="dropdown">
                        <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="icon-dots"></span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a className="dropdown-item delete-item" href={href}>Delete</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <div className="media">
                           <img src={PATIENT_IMAGE} alt="patient" />
                           <div className="media-body">
                              <ul>
                                 <li>
                                    <h6>Antony Smith</h6>
                                    <p>3456889</p>
                                 </li>
                                 <li>
                                    <p>Age</p>
                                    <h6>28 years old</h6>
                                 </li>
                                 <li>
                                    <p>Birthday</p>
                                    <h6>01 February 1993</h6>
                                 </li>
                                 <li>
                                    <p>Diagnose</p>
                                    <h6>Diabetes</h6>
                                 </li>
                                 <li>
                                    <p>Insurance</p>
                                    <h6>Isurance Name</h6>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="dropdown">
                        <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="icon-dots"></span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a className="dropdown-item delete-item" href={href}>Delete</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <div className="media">
                           <img src={PATIENT_IMAGE} alt="patient" />
                           <div className="media-body">
                              <ul>
                                 <li>
                                    <h6>Antony Smith</h6>
                                    <p>3456889</p>
                                 </li>
                                 <li>
                                    <p>Age</p>
                                    <h6>28 years old</h6>
                                 </li>
                                 <li>
                                    <p>Birthday</p>
                                    <h6>01 February 1993</h6>
                                 </li>
                                 <li>
                                    <p>Diagnose</p>
                                    <h6>Diabetes</h6>
                                 </li>
                                 <li>
                                    <p>Insurance</p>
                                    <h6>Isurance Name</h6>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="dropdown">
                        <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="icon-dots"></span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a className="dropdown-item delete-item" href={href}>Delete</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <div className="media">
                           <img src={PATIENT_IMAGE} alt="patient" />
                           <div className="media-body">
                              <ul>
                                 <li>
                                    <h6>Antony Smith</h6>
                                    <p>3456889</p>
                                 </li>
                                 <li>
                                    <p>Age</p>
                                    <h6>28 years old</h6>
                                 </li>
                                 <li>
                                    <p>Birthday</p>
                                    <h6>01 February 1993</h6>
                                 </li>
                                 <li>
                                    <p>Diagnose</p>
                                    <h6>Diabetes</h6>
                                 </li>
                                 <li>
                                    <p>Insurance</p>
                                    <h6>Isurance Name</h6>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="dropdown">
                        <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="icon-dots"></span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a className="dropdown-item delete-item" href={href}>Delete</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <div className="media">
                           <img src={PATIENT_IMAGE} alt="patient" />
                           <div className="media-body">
                              <ul>
                                 <li>
                                    <h6>Antony Smith</h6>
                                    <p>3456889</p>
                                 </li>
                                 <li>
                                    <p>Age</p>
                                    <h6>28 years old</h6>
                                 </li>
                                 <li>
                                    <p>Birthday</p>
                                    <h6>01 February 1993</h6>
                                 </li>
                                 <li>
                                    <p>Diagnose</p>
                                    <h6>Diabetes</h6>
                                 </li>
                                 <li>
                                    <p>Insurance</p>
                                    <h6>Isurance Name</h6>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="dropdown">
                        <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="icon-dots"></span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a className="dropdown-item delete-item" href={href}>Delete</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <div className="media">
                           <img src={PATIENT_IMAGE} alt="patient" />
                           <div className="media-body">
                              <ul>
                                 <li>
                                    <h6>Antony Smith</h6>
                                    <p>3456889</p>
                                 </li>
                                 <li>
                                    <p>Age</p>
                                    <h6>28 years old</h6>
                                 </li>
                                 <li>
                                    <p>Birthday</p>
                                    <h6>01 February 1993</h6>
                                 </li>
                                 <li>
                                    <p>Diagnose</p>
                                    <h6>Diabetes</h6>
                                 </li>
                                 <li>
                                    <p>Insurance</p>
                                    <h6>Isurance Name</h6>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="dropdown">
                        <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="icon-dots"></span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a className="dropdown-item delete-item" href={href}>Delete</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <div className="media">
                           <img src={PATIENT_IMAGE} alt="patient" />
                           <div className="media-body">
                              <ul>
                                 <li>
                                    <h6>Antony Smith</h6>
                                    <p>3456889</p>
                                 </li>
                                 <li>
                                    <p>Age</p>
                                    <h6>28 years old</h6>
                                 </li>
                                 <li>
                                    <p>Birthday</p>
                                    <h6>01 February 1993</h6>
                                 </li>
                                 <li>
                                    <p>Diagnose</p>
                                    <h6>Diabetes</h6>
                                 </li>
                                 <li>
                                    <p>Insurance</p>
                                    <h6>Isurance Name</h6>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="dropdown">
                        <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="icon-dots"></span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a className="dropdown-item delete-item" href={href}>Delete</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <nav>
                     <ul className="pagination justify-content-center align-items-center my-md-2">
                        <li className="page-item"><a href={href}>Prev</a></li>
                        <li className="page-item active"><a className="page-link" href={href}>1</a></li>
                        <li className="page-item"><a className="page-link" href={href}>2</a></li>
                        <li className="page-item"><a className="page-link" href={href}>3</a></li>
                        <li className="page-item"><a className="page-link" href={href}>4</a></li>
                        <li className="page-item"><a href={href}>Next</a></li>
                     </ul>
                  </nav>
               </div>
            </div>
        </DashboardLayout>
    )
}

export default Patient
