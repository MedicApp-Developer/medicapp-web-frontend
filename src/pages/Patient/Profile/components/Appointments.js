import React from 'react'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png';
import moment from 'moment';
import CancelAppointment from './CancelAppointment';
import { useState } from 'react';

function Appointments({ appointments }) {

    const [selectedAppointment, setSelectedAppointment] = useState(null);
    console.log("appointments => ", appointments);
    let today = new Date();
    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const history = appointments.filter(appointment => moment(appointment.to).isBefore(today));

    const upcomming = appointments.filter(appointment => moment(appointment.to).isSameOrAfter(today));

    return (
        <>
            <section class="user-dashboard">
                <div class="container">
                    <div class="row justify-content-center">
                    <div class="col-md-12 col-xl-10 pb-5">
                        <h4 class="mb-4">Upcoming</h4>
                            {upcomming?.map(item => (
                                <div class="card lab-result">
                                <div class="card-body py-2">
                                    <div class="row align-items-center">
                                        <div class="col-md-12 col-lg-8">
                                            <ul>
                                                <li>
                                                    <small class="d-block">Date & Time</small>
                                                   {`${moment(item.from).format("DD-MM-YY")} - ( ${moment(item.from).format('HH.mm')} - ${moment(item.to).format('HH.mm')} )`}
                                                </li>
                                                <li class="media">
                                                    {
                                                        item.doctorId ?
                                                        (
                                                            <>
                                                                <img class="rounded-circle" src={item?.doctorId?.image ?? DOCTOR_IMAGE} alt="doctor" />
                                                                    <div class="media-body">
                                                                    <small class="d-block">Dr. {item.doctorId.firstName + " " + item.doctorId.lastName}</small>
                                                                    <p>{item.doctorId?.specialityId?.name}</p>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div class="media-body">
                                                                    <small class="d-block">Appointment Type</small>
                                                                    <p>{item?.type.replace(/_/g, ' ')}</p>
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    
                                                </li>
                                                <li>
                                                    <small class="d-block" >Hospital</small>
                                                    {item?.doctorId ? (
                                                        item?.doctorId?.hospitalId?.name
                                                    ): (
                                                        item?.hospitalId?.name
                                                    )}
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-12 col-lg-4 text-center text-md-right mt-3 mt-md-0">
                                            <span class="contact-info mr-4" style={{float: 'left'}}>
                                                <div style={{display: 'flex', flexDirection: "column", alignItems: 'baseline' }}>
                                                    <small class="d-block" style={{ float: 'left' }}>Family</small>
                                                <div>
                                                    { item?.familyMemberId ? `${item?.familyMemberId?.firstName} ${item?.familyMemberId.lastName}` : "Mine" }
                                                </div>
                                                </div>
                                                
                                            </span>
                                            <a href="javascript:void(0)" onClick={(e) => { e.preventDefault(); setSelectedAppointment(item) }} data-toggle="modal" data-target="#cancel" class="btn btn-danger px-3">CANCEL</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {upcomming.length === 0 && (
                                <div class="card lab-result">
                                <div class="card-body py-2">
                                    <div class="row align-items-center">
                                        <div class="col-md-12 col-lg-8">
                                            <ul>
                                                <li>
                                                    No Upcomming Appointments
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        <h4 class="mb-4 mt-5">History</h4>
                       {history.map(item => (
                                  <div class="card lab-result">
                                  <div class="card-body py-2">
                                      <div class="row align-items-center">
                                          <div class="col-md-12 col-lg-8">
                                              <ul>
                                                  <li>
                                                      <small class="d-block">Date & Time</small>
                                                     {`${moment(item.from).format("DD-MM-YY")} - ( ${moment(item.from).format('HH.mm')} - ${moment(item.to).format('HH.mm')} )`}
                                                  </li>
                                                  <li class="media">
                                                    {
                                                        item.doctorId ?
                                                        (
                                                            <>
                                                                <img class="rounded-circle" src={item?.doctorId?.image ?? DOCTOR_IMAGE} alt="doctor" />
                                                                    <div class="media-body">
                                                                    <small class="d-block">Dr. {item.doctorId.firstName + " " + item.doctorId.lastName}</small>
                                                                    <p>{item.doctorId?.specialityId?.name}</p>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div class="media-body">
                                                                    <small class="d-block">Appointment Type</small>
                                                                    <p>{item?.type.replace(/_/g, ' ')}</p>
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    
                                                </li>
                                                <li>
                                                    <small class="d-block" >Hospital</small>
                                                    {item?.doctorId ? (
                                                        item?.doctorId?.hospitalId?.name
                                                    ): (
                                                        item?.hospitalId?.name
                                                    )}
                                                </li>
                                              </ul>
                                          </div>
                                          <div class="col-md-12 col-lg-4 text-center text-md-right mt-3 mt-md-0">
                                              <span class="contact-info mr-4" style={{float: 'left'}}>
                                                  <div style={{display: 'flex', flexDirection: "column", alignItems: 'baseline' }}>
                                                      <small class="d-block" style={{ float: 'left' }}>Family</small>
                                                  <div>
                                                      { item?.familyMemberId ? `${item?.familyMemberId?.firstName} ${item?.familyMemberId.lastName}` : "Mine" }
                                                  </div>
                                                  </div>
                                                  
                                              </span>
                                              <a href="javascript:void(0)" onClick={(e) => { e.preventDefault(); setSelectedAppointment(item); }} data-toggle="modal" data-target="#cancel" class="btn btn-secondary px-3">DELETE</a>
                                          </div>
                                          </div>
                                      </div>
                          </div>
                            ))}
                            {history.length === 0 && (
                                <div class="card lab-result">
                                <div class="card-body py-2">
                                    <div class="row align-items-center">
                                        <div class="col-md-12 col-lg-8">
                                            <ul>
                                                <li>
                                                    No History Present
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    </div>
                <CancelAppointment selectedAppointment={selectedAppointment} />
            </section>
        </>
    )
}

export default Appointments
