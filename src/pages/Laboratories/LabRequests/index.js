import React from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import DOCTOR_IMAGE from '../../../assets/images/doctor.png';
import PATIENT_IMAGE from '../../../assets/images/patient.png';

function LabRequests() {
    return (
        <DashboardLayout>
            <div className="row align-items-center add-list">
               <div className="col-12">
                  <h4>Lab Request</h4>
               </div>
            </div>
            <div className="row">
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <h5 className="mb-1"><strong>Test</strong></h5>
                        <p>Blood Test</p>
                        <div className="media mb-3">
                           <img className="avatar-sm" src={PATIENT_IMAGE} alt="patient" />
                           <div className="media-body">
                               <p>Patient Name</p>
                              <h5 className="mt-0">Antony Smith</h5>
                             
                           </div>
                        </div>
                        <div className="media">
                           <img className="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                           <div className="media-body">
                              <h5 className="mt-0">Dr. Travis Martin</h5>
                              <p>Dentist</p>
                           </div>
                        </div>
                        <div className="text-center mt-4">
                           <a href={href} className="btn btn-primary px-3 py-2">Send Results</a>
                        </div>
                     </div>
                     
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <h5 className="mb-1"><strong>Test</strong></h5>
                        <p>Blood Test</p>
                        <div className="media mb-3">
                           <img className="avatar-sm" src={PATIENT_IMAGE} alt="patient" />
                           <div className="media-body">
                               <p>Patient Name</p>
                              <h5 className="mt-0">Antony Smith</h5>
                             
                           </div>
                        </div>
                        <div className="media">
                           <img className="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                           <div className="media-body">
                              <h5 className="mt-0">Dr. Travis Martin</h5>
                              <p>Dentist</p>
                           </div>
                        </div>
                        <div className="text-center mt-4">
                           <a href={href} className="btn btn-primary px-3 py-2">Send Results</a>
                        </div>
                     </div>
                     
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <h5 className="mb-1"><strong>Test</strong></h5>
                        <p>Blood Test</p>
                        <div className="media mb-3">
                           <img className="avatar-sm" src={PATIENT_IMAGE} alt="patient"/>
                           <div className="media-body">
                               <p>Patient Name</p>
                              <h5 className="mt-0">Antony Smith</h5>
                             
                           </div>
                        </div>
                        <div className="media">
                           <img className="avatar-sm" src={DOCTOR_IMAGE} alt="doctor"/>
                           <div className="media-body">
                              <h5 className="mt-0">Dr. Travis Martin</h5>
                              <p>Dentist</p>
                           </div>
                        </div>
                        <div className="text-center mt-4">
                           <a href={href} className="btn btn-primary px-3 py-2">Send Results</a>
                        </div>
                     </div>
                     
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <h5 className="mb-1"><strong>Test</strong></h5>
                        <p>Blood Test</p>
                        <div className="media mb-3">
                           <img className="avatar-sm" src={PATIENT_IMAGE} alt="patient"/>
                           <div className="media-body">
                               <p>Patient Name</p>
                              <h5 className="mt-0">Antony Smith</h5>
                             
                           </div>
                        </div>
                        <div className="media">
                           <im className="mb-1"g className="avatar-sm" src={DOCTOR_IMAGE} alt="doctor"/>
                           <div className="media-body">
                              <h5 className="mt-0">Dr. Travis Martin</h5>
                              <p>Dentist</p>
                           </div>
                        </div>
                        <div className="text-center mt-4">
                           <a href={href} className="btn btn-primary px-3 py-2">Send Results</a>
                        </div>
                     </div>
                     
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <h5 className="mb-1"><strong>Test</strong></h5>
                        <p>Blood Test</p>
                        <div className="media mb-3">
                           <img className="avatar-sm" src={PATIENT_IMAGE} alt="patient"/>
                           <div className="media-body">
                               <p>Patient Name</p>
                              <h5 className="mt-0">Antony Smith</h5>
                             
                           </div>
                        </div>
                        <div className="media">
                           <img className="avatar-sm" src={DOCTOR_IMAGE} alt="doctor"/>
                           <div className="media-body">
                              <h5 className="mt-0">Dr. Travis Martin</h5>
                              <p>Dentist</p>
                           </div>
                        </div>
                        <div className="text-center mt-4">
                           <a href={href} className="btn btn-primary px-3 py-2">Send Results</a>
                        </div>
                     </div>
                     
                  </div>
               </div>

               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <h5 className="mb-1"><strong>Test</strong></h5>
                        <p>Blood Test</p>
                        <div className="media mb-3">
                           <img className="avatar-sm" src={PATIENT_IMAGE} alt="patient"/>
                           <div className="media-body">
                               <p>Patient Name</p>
                              <h5 className="mt-0">Antony Smith</h5>
                             
                           </div>
                        </div>
                        <div className="media">
                           <img className="avatar-sm" src={DOCTOR_IMAGE} alt="doctor"/>
                           <div className="media-body">
                              <h5 className="mt-0">Dr. Travis Martin</h5>
                              <p>Dentist</p>
                           </div>
                        </div>
                        <div className="text-center mt-4">
                           <a href={href} className="btn btn-primary px-3 py-2">Send Results</a>
                        </div>
                     </div>
                     
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <h5 className="mb-1"><strong>Test</strong></h5>
                        <p>Blood Test</p>
                        <div className="media mb-3">
                           <img className="avatar-sm" src={PATIENT_IMAGE} alt="patient"/>
                           <div className="media-body">
                               <p>Patient Name</p>
                              <h5 className="mt-0">Antony Smith</h5>
                             
                           </div>
                        </div>
                        <div className="media">
                           <img className="avatar-sm" src={DOCTOR_IMAGE} alt="doctor"/>
                           <div className="media-body">
                              <h5 className="mt-0">Dr. Travis Martin</h5>
                              <p>Dentist</p>
                           </div>
                        </div>
                        <div className="text-center mt-4">
                           <a href={href} className="btn btn-primary px-3 py-2">Send Results</a>
                        </div>
                     </div>
                     
                  </div>
               </div>
               <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="card">
                     <div className="card-body">
                        <h5 className="mb-1"><strong>Test</strong></h5>
                        <p>Blood Test</p>
                        <div className="media mb-3">
                           <img className="avatar-sm" src={PATIENT_IMAGE} alt="patient"/>
                           <div className="media-body">
                               <p>Patient Name</p>
                              <h5 className="mt-0">Antony Smith</h5>
                             
                           </div>
                        </div>
                        <div className="media">
                           <img className="avatar-sm" src={DOCTOR_IMAGE} alt="doctor"/>
                           <div className="media-body">
                              <h5 className="mt-0">Dr. Travis Martin</h5>
                              <p>Dentist</p>
                           </div>
                        </div>
                        <div className="text-center mt-4">
                           <a href={href} className="btn btn-primary px-3 py-2">Send Results</a>
                        </div>
                     </div>
                     
                  </div>
               </div>
               
            </div>
            <div className="row">
               <div className="col-md-12">
                  <nav>
                     <ul className="pagination justify-content-center align-items-center my-md-2">
                        <li className="page-item"><a href="#">Prev</a></li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a href="#">Next</a></li>
                     </ul>
                  </nav>
               </div>
            </div>
        </DashboardLayout>
    )
}

export default LabRequests
