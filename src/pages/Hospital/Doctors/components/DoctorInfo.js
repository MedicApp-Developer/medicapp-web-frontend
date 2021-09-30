import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../../layout/DashboardLayout'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png'
import { href } from '../../../../constants/extra'
import PATIENT_IMAGE from '../../../../assets/images/patient.png'
import SetDoctorSchedule from './SetDoctorSchedule'
import { connect } from 'react-redux'
import AppointmentApi from '../../../../api/Appointment';
import { selectDoctor } from '../../../../store/actions/doctorActions';
import { useParams } from 'react-router-dom';

function DoctorInfo({ selectedDoctor, selectDoctor }) {

   const { id } = useParams();
   const [appointments, setAppointments] = useState([]);
   const [patients, setPatients] = useState([]);

   useEffect(() => {
      selectDoctor(id);
      AppointmentApi.getDoctorAppointments(id).then(res => {
         setAppointments(res.data.data);
         setPatients(res?.data?.data?.map(item => ( item.patientId )))
      });
   }, [id, selectDoctor]);

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
                              <h5 class="mt-3 mb-2">Dr. {selectedDoctor?.firstName + " " + selectedDoctor?.lastName}</h5>
                              <h6>Dentist</h6>
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
                        <h5>Weekly Schedule:</h5>
                        <div class="row my-3">
                           {selectedDoctor?.schedule?.monday?.startTime && selectedDoctor?.schedule?.monday?.endTime && (
                              <div class="col-sm-6 col-lg-12 col-xl-6">
                                 <span><strong>Monday:</strong>
                                 <small class="d-block">{selectedDoctor?.schedule?.monday?.startTime}  - {selectedDoctor?.schedule?.monday?.endTime} </small></span>
                              </div>
                           )}
                           
                           {selectedDoctor?.schedule?.tuesday?.startTime && selectedDoctor?.schedule?.tuesday?.endTime && (
                              <div class="col-sm-6 col-lg-12 col-xl-6">
                                 <span><strong>Tuesday:</strong>
                                 <small class="d-block">{selectedDoctor?.schedule?.tuesday?.startTime}  - {selectedDoctor?.schedule?.tuesday?.endTime} </small></span>
                              </div>
                           )}

                           {selectedDoctor?.schedule?.wednesday?.startTime && selectedDoctor?.schedule?.wednesday?.endTime && (
                              <div class="col-sm-6 col-lg-12 col-xl-6">
                                 <span><strong>Wednesday:</strong>
                                 <small class="d-block">{selectedDoctor?.schedule?.wednesday?.startTime}  - {selectedDoctor?.schedule?.wednesday?.endTime} </small></span>
                              </div>
                           )}

                           {selectedDoctor?.schedule?.thursday?.startTime && selectedDoctor?.schedule?.thursday?.endTime && (
                              <div class="col-sm-6 col-lg-12 col-xl-6">
                                 <span><strong>Thursday:</strong>
                                 <small class="d-block">{selectedDoctor?.schedule?.thursday?.startTime}  - {selectedDoctor?.schedule?.thursday?.endTime} </small></span>
                              </div>
                           )}

                           {selectedDoctor?.schedule?.friday?.startTime && selectedDoctor?.schedule?.friday?.endTime && (
                              <div class="col-sm-6 col-lg-12 col-xl-6">
                                 <span><strong>Friday:</strong>
                                 <small class="d-block">{selectedDoctor?.schedule?.friday?.startTime}  - {selectedDoctor?.schedule?.friday?.endTime} </small></span>
                              </div>
                           )}

                           {selectedDoctor?.schedule?.satureday?.startTime && selectedDoctor?.schedule?.satureday?.endTime && (
                              <div class="col-sm-6 col-lg-12 col-xl-6">
                                 <span><strong>Satureday:</strong>
                                 <small class="d-block">{selectedDoctor?.schedule?.satureday?.startTime}  - {selectedDoctor?.schedule?.satureday?.endTime} </small></span>
                              </div>
                           )}

                           {selectedDoctor?.schedule?.sunday?.startTime && selectedDoctor?.schedule?.sunday?.endTime && (
                              <div class="col-sm-6 col-lg-12 col-xl-6">
                                 <span><strong>Sunday:</strong>
                                 <small class="d-block">{selectedDoctor?.schedule?.sunday?.startTime}  - {selectedDoctor?.schedule?.sunday?.endTime} </small></span>
                              </div>
                           )}
                           
                        </div>
                     </div>
                  </div>
                  <div class="card patient-detail">
                     <div class="card-body">
                        <h5>Information:</h5>
                        <ul>
                           <li>
                              <span>Speciality:</span> 
                              <p>{selectedDoctor?.speciality}</p>
                           </li>
                           <li>
                              <span>Experience:</span>
                              <p> {selectedDoctor?.experience || "-"}</p>
                           </li>
                           <li>
                              <span>Description:</span> 
                              <p>{selectedDoctor?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing eli. Lorem ipsum dolor sit amet, consectetur adipiscing eli"}</p>
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
                                       {appointments?.map(appointment => (
                                          <>
                                             <td>
                                                <span>Time</span>
                                                <p><strong>{appointment.time}</strong></p>
                                             </td>
                                             <td>
                                                <div class="media">
                                                   <img src={PATIENT_IMAGE} alt="patient" />
                                                   <div class="media-body">
                                                      <h5 class="mt-0">{appointment?.patientId?.name}</h5>
                                                      <p>Patient</p>
                                                   </div>
                                                </div>
                                             </td>
                                          </>
                                       ))}
                                       {appointments.length === 0 && (
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
                                    {patients?.map((patient => (
                                       <tr>
                                          <td>
                                             <div class="media">
                                                <img class="avatar-sm" src={PATIENT_IMAGE} alt="patient"/>
                                                <div class="media-body">
                                                   <h5 class="mt-0">{patient.firstName + " " + patient.lastName}</h5>
                                                   <p>{patient.email}</p>
                                                </div>
                                             </div>
                                          </td>
                                          <td>{patient.bloodType}</td>
                                          <td>{patient.birthday}</td>
                                          <td>{patient.gender}</td>
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
            <SetDoctorSchedule />
        </DashboardLayout>
    )
}

const mapStateToProps = state => ({
   selectedDoctor: state.doctors.selectedDoctor
});

const mapDispatchToProps = {
   selectDoctor
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorInfo);
