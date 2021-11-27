import React from 'react'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png';
import moment from 'moment';
import CancelAppointment from './CancelAppointment';
import { useState } from 'react';

function Appointments({ appointments }) {

    const [selectedAppointment, setSelectedAppointment] = useState(null);

    let today = new Date();
    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const history = appointments.filter(appointment => moment(today).isAfter(new Date(appointment.date), 'day'));

    const upcomming = appointments.filter(appointment => moment(new Date(appointment.date)).isAfter(yesterday));

    return (
        <>
            <section class="user-dashboard">
                <div class="container">
                    <div class="row justify-content-center">
                    <div class="col-md-12 col-xl-10 pb-5">
                        <h4 class="mb-4">Upcoming</h4>
                        <div class="card lab-result">
                            {upcomming?.map(item => (
                                <div class="card-body py-2">
                                    <div class="row align-items-center">
                                        <div class="col-md-12 col-lg-8">
                                            <ul>
                                                <li>
                                                    <small class="d-block">Date & Time</small>
                                                    {`${moment(item.date).format('LL')} - ( ${item.time} )`}
                                                </li>
                                                <li class="media">
                                                    <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                                    <div class="media-body">
                                                    <h5 class="mt-0 mb-1">Dr. {item.doctorId.firstName + " " + item.doctorId.lastName}</h5>
                                                    <p>{item.doctorId?.specialityId?.name}</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <small class="d-block">Hospital</small>
                                                    {item?.doctorId?.hospitalId?.name}
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-12 col-lg-4 text-center text-md-right mt-3 mt-md-0">
                                            <span class="contact-info mr-4">
                                            <a class="mt-0" href="javascript:void(0)"><span class="fa fa-map"></span></a>
                                            <a class="mt-0" href="javascript:void(0)"><span class="icon-phone"></span></a>
                                            </span>
                                            <a href="javascript:void(0)" onClick={(e) => { e.preventDefault(); setSelectedAppointment(item) }} data-toggle="modal" data-target="#cancel" class="btn btn-danger px-3">CANCEL</a>
                                        </div>
                                        </div>
                                    </div>
                            ))}
                        </div>
                        <h4 class="mb-4 mt-5">History</h4>
                        <div class="card lab-result">
                            {history.map(item => (
                                <div class="card-body py-2">
                                    <div class="row align-items-center">
                                        <div class="col-md-12 col-lg-8">
                                            <ul>
                                                <li>
                                                    <small class="d-block">Date & Time</small>
                                                    {`${moment(item.date).format('LL')} - (${ item.time })`}
                                                </li>
                                                <li class="media">
                                                    <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                                    <div class="media-body">
                                                    <h5 class="mt-0 mb-1">Dr. {item.doctorId.firstName + " " + item.doctorId.lastName}</h5>
                                                    <p>{item.doctorId?.specialityId?.name}</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <small class="d-block">Hospital</small>
                                                    {item?.doctorId?.hospitalId?.name}
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-12 col-lg-4 text-center text-md-right mt-3 mt-md-0">
                                            <span class="contact-info mr-4">
                                            <a class="mt-0" href="javascript:void(0)"><span class="fa fa-map"></span></a>
                                            <a class="mt-0" href="javascript:void(0)"><span class="icon-phone"></span></a>
                                            </span>
                                            <a href="javascript:void(0)" data-toggle="modal" data-target="#view-report" class="btn btn-primary px-3 py-1">View</a>
                                        </div>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
                <CancelAppointment selectedAppointment={selectedAppointment} />
            </section>
        </>
    )
}

export default Appointments
