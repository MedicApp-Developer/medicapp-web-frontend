import React, { useContext, useEffect } from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import PATIENT_IMAGE from '../../../assets/images/patient.png';
import { useHistory } from 'react-router-dom';
import { HOSPITAL_PATIENT_INFO_ROUTE, NURSE_PATIENT_INFO_ROUTE, DOCTOR_PATIENT_INFO_ROUTE } from '../../../constants/Redirects';
import { RootContext } from '../../../contextApi';
import { DOCTOR, HOSPITAL, NURSE } from '../../../constants/Roles';
import { getPatients, deletePatient, setPageNumber } from '../../../store/actions/patientActions';
import { connect } from 'react-redux';
import AddPatient from './components/AddPatient';
import { getPagesArray } from '../../../Utills/functions';
import classNames from 'classnames';

function Patient({ patients, getPatients, deletePatient, setPageNumber }) {

   const history = useHistory();
   const { user } = useContext(RootContext);

   const { pageNumber, numberOfPages, patients: allPatients } = patients && patients;

   useEffect(() => {
      getPatients(pageNumber || 0);
   }, [getPatients, pageNumber]);

   const deletePatientHandler = (id) => {
      deletePatient(id);
   }

   let redirectTo = null;

   switch (user.role) {
      case NURSE: redirectTo = NURSE_PATIENT_INFO_ROUTE; break;
      case HOSPITAL: redirectTo = HOSPITAL_PATIENT_INFO_ROUTE; break;
      case DOCTOR: redirectTo = DOCTOR_PATIENT_INFO_ROUTE; break;
      default: redirectTo = HOSPITAL_PATIENT_INFO_ROUTE;
   }

   const pages = getPagesArray(numberOfPages);

   return (
      <DashboardLayout>
         <div class="row align-items-center add-list">
            <div class="col-6">
               <h4>Patient List</h4>
            </div>
            {user.role === NURSE && (
               <div class="col-6 text-right">
                  <a href="javascript:void(0)" data-toggle="modal" data-target="#addPatient" class="btn btn-primary px-3">+ ADD PATIENT</a>
               </div>
            )}
         </div>
         <div className="row list-block patient-list">
            {allPatients?.map(patient => (
               <div key={patient?._id} className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <div className="media">
                           <img src={patient?.image ? patient?.image : PATIENT_IMAGE} className="pointer" alt="patient" onClick={(e) => { history.push(redirectTo + `/${patient._id}`) }} />
                           <div className="media-body">
                              <ul>
                                 <li>
                                    <h6>Name</h6>
                                    <p>{patient?.firstName + " " + patient?.lastName}</p>
                                 </li>
                                 <li>
                                    {/* TODO: Calculate Age from birthday */}
                                    <h6>Birthday</h6>
                                    <p>{patient?.birthday}</p>
                                 </li>
                                 <li>
                                    <h6>Gender</h6>
                                    <p>{patient?.gender}</p>
                                 </li>
                                 <li>
                                    <h6>location</h6>
                                    <p>{patient?.location}</p>
                                 </li>
                                 <li>
                                    <h6>Email</h6>
                                    <p>{patient?.email}</p>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     {user?.role !== DOCTOR && (
                        <div className="dropdown">
                           <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span className="icon-dots"></span>
                           </a>
                           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item delete-item" href={href} onClick={(e) => { e.preventDefault(); deletePatientHandler(patient?._id) }}>Delete</a>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            ))}
         </div>
         <div className="row">
            <div className="col-md-12">
               {allPatients?.length > 0 ? (
                  <nav>
                     <ul className="pagination justify-content-center align-items-center my-md-2">
                        <li className="page-item" style={{ pointerEvents: +pageNumber <= 0 && "none" }}><a href={href} onClick={(e) => { e.preventDefault(); setPageNumber(pageNumber - 1) }}>Prev</a></li>
                        {pages.map((pageIndex) => (
                           <li className={classNames("page-item", { "active": +pageIndex === pageNumber })} key={pageIndex} onClick={() => setPageNumber(pageIndex)}><a className="page-link" href={href} onClick={(e) => e.preventDefault()}>{pageIndex + 1}</a></li>
                        ))}
                        <li className="page-item" style={{ pointerEvents: +pageNumber === +numberOfPages - 1 && "none" }}><a href={href} onClick={(e) => { e.preventDefault(); setPageNumber(pageNumber + 1) }}>Next</a></li>
                     </ul>
                  </nav>
               ) : (
                  <p>No patients Found</p>
               )}

            </div>
         </div>
         {/* Add Patient By Nurse */}
         {user.role === NURSE && (
            <>
               <AddPatient />
            </>
         )}
      </DashboardLayout>
   )
}

const mapStateToProps = state => ({
   patients: state.patients
})

const mapDispatchToProps = {
   getPatients,
   deletePatient,
   setPageNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(Patient);
