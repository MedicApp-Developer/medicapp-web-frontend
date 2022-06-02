import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../../layout/DashboardLayout'
import PLACEHOLDER_DOCTOR_IMAGE from '../../../../assets/images/doctor_placeholder.png'
import { href } from '../../../../constants/extra'
import PATIENT_IMAGE from '../../../../assets/images/patient.png'
import SetDoctorSchedule from './SetDoctorSchedule'
import { connect } from 'react-redux'
import AppointmentApi from '../../../../api/Appointment'
import { selectDoctor } from '../../../../store/actions/doctorActions'
import { useParams } from 'react-router-dom'
import classNames from 'classnames'
import moment from 'moment'

function DoctorInfo({ selectedDoctor, selectDoctor }) {

   const { id } = useParams()
   const [appointments, setAppointments] = useState([])
   const [patients, setPatients] = useState([])
   const [tabSelected, setTabSelected] = useState("Profile")

   useEffect(() => {
      selectDoctor(id)
      AppointmentApi.getDoctorAppointments(id).then(res => {
         setAppointments(res.data.data.appointments)
         setPatients(res?.data?.data?.appointments?.map(item => (item.patientId)))
      })
   }, [id, selectDoctor])
   console.log("appppp => ", appointments)
   return (
      <DashboardLayout>
         <div className="row nav-tab-link">
            <div className="col-md-12">
               <ul className="nav justify-content-center">
                  <li className="nav-item">
                     <a className={classNames('nav-link', { 'active': tabSelected === "Profile" })} href={href} onClick={(e) => { e.preventDefault(); setTabSelected("Profile") }}>Doctor Profile</a>
                  </li>
                  <li className="nav-item">
                     <a className={classNames('nav-link', { 'active': tabSelected === "Schedule" })} href={href} onClick={(e) => { e.preventDefault(); setTabSelected("Schedule") }}>Schedule</a>
                  </li>
               </ul>
            </div>
         </div>

         {tabSelected === "Schedule" ? (
            <SetDoctorSchedule />
         ) : (
            <>
               <div class="row align-items-center add-list">
                  <div class="col-6">
                     <h4>Doctor Profile</h4>
                  </div>
               </div>
               <div class="row doctor-profile">
                  <div class="col-md-4">
                     <div class="card profile-detail py-3">
                        <div class="card-body">
                           <div class="media">
                              <img class="avatar-lg mr-0" src={PLACEHOLDER_DOCTOR_IMAGE} alt="doctor" />
                              <div class="media-body">
                                 <h5 class="mt-3 mb-2">Dr. {selectedDoctor?.firstName + " " + selectedDoctor?.lastName}</h5>
                                 <p>{selectedDoctor?.specialityId?.map((item, index) => index === selectedDoctor?.specialityId.length - 1 ? item['name_en'] : item['name_en'] + ", ")}</p>
                                 <div class="contact-info">
                                    <a href={`mailto:${selectedDoctor?.email}`}><span className="icon-email"></span></a>
                                    <a href={`tel:${selectedDoctor?.mobile}`}><span className="icon-phone"></span></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="card patient-detail">
                        <div class="card-body">
                           <h5>Information: </h5>
                           <ul>
                              <li>
                                 <span>Speciality: </span>
                                 <p> {selectedDoctor?.specialityId?.map((item, index) => index === selectedDoctor?.specialityId.length - 1 ? item['name_en'] : item['name_en'] + ", ")}</p>
                              </li>
                              <li>
                                 <span>Experience: </span>
                                 <p> {selectedDoctor?.experience || "-"}</p>
                              </li>
                              <li>
                                 <span>Description: </span>
                                 <p> {selectedDoctor?.about}</p>
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
                                          {appointments.filter(app => app.patientId !== null)?.map(appointment => {
                                             console.log("SHoo app => ", appointment)
                                             return (
                                                <>
                                                   <td>
                                                      <span>Time</span>
                                                      <p>
                                                         <strong>
                                                            {`${moment(appointment.from).format("DD-MM-YY")} - ( ${moment(appointment.from).format('HH.mm')} - ${moment(appointment.to).format('HH.mm')} )`}
                                                         </strong>
                                                      </p>
                                                   </td>
                                                   <td>
                                                      <div class="media">
                                                         <img src={PATIENT_IMAGE} alt="patient" />
                                                         <div class="media-body">
                                                            <h5 class="mt-0">{appointment?.patientId?.firstName + " " + appointment?.patientId?.lastName}</h5>
                                                            <p>Patient</p>
                                                         </div>
                                                      </div>
                                                   </td>
                                                </>
                                             )
                                          })}
                                          {appointments?.length === 0 && (
                                             <p>No appointment found</p>
                                          )}
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
                                          Name & Email
                                       </th>
                                       <th>
                                          Blood Type
                                       </th>
                                       <th>
                                          Birthday
                                       </th>
                                       <th>
                                          Gender
                                       </th>
                                    </thead>
                                    <tbody>
                                       {patients.filter(patient => patient !== null)?.map((patient => (
                                          <tr>
                                             <td>
                                                <div class="media">
                                                   <img class="avatar-sm" src={PATIENT_IMAGE} alt="patient" />
                                                   <div class="media-body">
                                                      <h5 class="mt-0">{patient?.firstName + " " + patient?.lastName}</h5>
                                                      <p>{patient?.email}</p>
                                                   </div>
                                                </div>
                                             </td>
                                             <td>{patient?.bloodType}</td>
                                             <td>{patient?.birthday}</td>
                                             <td>{patient?.gender}</td>
                                          </tr>
                                       )))}
                                       {patients.length === 0 && (
                                          <p>No appointment found</p>
                                       )}
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </>
         )}
      </DashboardLayout>
   )
}

const mapStateToProps = state => ({
   selectedDoctor: state.doctors.selectedDoctor
})

const mapDispatchToProps = {
   selectDoctor
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorInfo)
