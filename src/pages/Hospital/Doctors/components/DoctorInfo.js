import React from 'react'
import DashboardLayout from '../../../../layout/DashboardLayout'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png'
import { href } from '../../../../constants/extra'
import PATIENT_IMAGE from '../../../../assets/images/patient.png'
import SetDoctorSchedule from './SetDoctorSchedule'

function DoctorInfo() {
    return (
        <DashboardLayout>
            <div class="row align-items-center add-list">
               <div class="col-6">
                  <h4>Doctor Profile</h4>
               </div>
               <div class="col-6 text-right">
                  <a href={href} data-toggle="modal" data-target="#setSchedule" class="btn btn-primary px-3">+ SET SCHEDULE</a>
               </div>
            </div>
            <div class="row doctor-profile">
               <div class="col-md-4">
                  <div class="card profile-detail py-3">
                     <div class="card-body">
                        <div class="media">
                           <img class="avatar-lg mr-0" src={DOCTOR_IMAGE} alt="doctor" />
                           <div class="media-body">
                              <h5 class="mt-3 mb-2">Dr. Daniel Smith</h5>
                              <h6>Dentist</h6>
                              <div class="contact-info">
                                 <a href={href}><span class="icon-email"></span></a>
                                 <a href={href}><span class="icon-phone"></span></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="card patient-detail">
                     <div class="card-body">
                        <h5>Weekly Schedule:</h5>
                        <div class="row my-3">
                           <div class="col-sm-6 col-lg-12 col-xl-6">
                              <span><strong>Monday:</strong>
                              <small class="d-block">10:00AM - 03:00PM</small></span>
                           </div>
                           <div class="col-sm-6 col-lg-12 col-xl-6">
                              <span><strong>Tuesday:</strong>
                              <small class="d-block">10:00AM - 03:00PM</small></span>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-sm-6 col-lg-12 col-xl-6">
                              <span><strong>Wenesday:</strong>
                              <small class="d-block">10:00AM - 03:00PM</small></span>
                           </div>
                           <div class="col-sm-6 col-lg-12 col-xl-6">
                              <span><strong>Thursday:</strong>
                              <small class="d-block">10:00AM - 03:00PM</small></span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="card patient-detail">
                     <div class="card-body">
                        <h5>Information:</h5>
                        <ul>
                           <li>
                              <span>Speciality:</span> 
                              <p>Dentistry, Cardiology Neurology, Psychology</p>
                           </li>
                           <li>
                              <span>Experience:</span>
                              <p> 5 years</p>
                           </li>
                           <li>
                              <span>Description:</span> 
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli. Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-md-8">
                  <div class="card">
                     <div class="card-body">
                        <h4>Doctors Appointments</h4>
                        <div class="scrollbar" style={{ height: "120px" }}>
                           <div class="table-responsive">
                              <table class="table mb-md-0">
                                 <tbody>
                                    <tr>
                                       <td>
                                          <span>Time</span>
                                          <p><strong>03:00PM</strong></p>
                                       </td>
                                       <td>
                                          <div class="media">
                                             <img src={PATIENT_IMAGE} alt="patient" />
                                             <div class="media-body">
                                                <h5 class="mt-0">Antony Smith</h5>
                                                <p>Patient</p>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <span>Time</span>
                                          <p><strong>03:00PM</strong></p>
                                       </td>
                                       <td>
                                          <div class="media">
                                             <img src={PATIENT_IMAGE} alt="patient" />
                                             <div class="media-body">
                                                <h5 class="mt-0">Antony Smith</h5>
                                                <p>Patient</p>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <span>Time</span>
                                          <p><strong>03:00PM</strong></p>
                                       </td>
                                       <td>
                                          <div class="media">
                                             <img src={PATIENT_IMAGE} alt="patient" />
                                             <div class="media-body">
                                                <h5 class="mt-0">Antony Smith</h5>
                                                <p>Patient</p>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <span>Time</span>
                                          <p><strong>03:00PM</strong></p>
                                       </td>
                                       <td>
                                          <div class="media">
                                             <img src={PATIENT_IMAGE} alt="patient" />
                                             <div class="media-body">
                                                <h5 class="mt-0">Antony Smith</h5>
                                                <p>Patient</p>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-body">
                        <h4>Patient List</h4>
                        <div class="scrollbar" style={{ height: "360px" }}>
                           <div class="table-responsive">
                              <table class="table mb-md-0">
                                 <thead>
                                    <th>
                                       Name & Patient No.
                                    </th>
                                    <th>
                                       Age
                                    </th>
                                    <th>
                                       Birthday
                                    </th>
                                    <th>
                                       Insurance
                                    </th>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="media">
                                             <img class="avatar-sm" src={PATIENT_IMAGE} alt="patient"/>
                                             <div class="media-body">
                                                <h5 class="mt-0">Antony Smith</h5>
                                                <p>3456889</p>
                                             </div>
                                          </div>
                                       </td>
                                       <td>28</td>
                                       <td>01 February 1993</td>
                                       <td>Isurance Name</td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div class="media">
                                             <img class="avatar-sm" src={PATIENT_IMAGE} alt="patient" />
                                             <div class="media-body">
                                                <h5 class="mt-0">Antony Smith</h5>
                                                <p>3456889</p>
                                             </div>
                                          </div>
                                       </td>
                                       <td>28</td>
                                       <td>01 February 1993</td>
                                       <td>Isurance Name</td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div class="media">
                                             <img class="avatar-sm" src={PATIENT_IMAGE} alt="patient" />
                                             <div class="media-body">
                                                <h5 class="mt-0">Antony Smith</h5>
                                                <p>3456889</p>
                                             </div>
                                          </div>
                                       </td>
                                       <td>28</td>
                                       <td>01 February 1993</td>
                                       <td>Isurance Name</td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div class="media">
                                             <img class="avatar-sm" src={PATIENT_IMAGE} alt="patient" />
                                             <div class="media-body">
                                                <h5 class="mt-0">Antony Smith</h5>
                                                <p>3456889</p>
                                             </div>
                                          </div>
                                       </td>
                                       <td>28</td>
                                       <td>01 February 1993</td>
                                       <td>Isurance Name</td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div class="media">
                                             <img class="avatar-sm" src={PATIENT_IMAGE} alt="patient" />
                                             <div class="media-body">
                                                <h5 class="mt-0">Antony Smith</h5>
                                                <p>3456889</p>
                                             </div>
                                          </div>
                                       </td>
                                       <td>28</td>
                                       <td>01 February 1993</td>
                                       <td>Isurance Name</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <SetDoctorSchedule />
        </DashboardLayout>
    )
}

export default DoctorInfo
