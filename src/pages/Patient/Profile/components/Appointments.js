import React from 'react'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png';

function Appointments() {
    return (
        <>
            <section class="user-dashboard">
                <div class="container">
                    <div class="row justify-content-center">
                    <div class="col-md-12 col-xl-10 pb-5">
                        <h4 class="mb-4">Upcoming</h4>
                        <div class="card lab-result">
                            <div class="card-body py-2">
                                <div class="row align-items-center">
                                <div class="col-md-12 col-lg-8">
                                    <ul>
                                        <li>
                                            <small class="d-block">Date & Time</small>
                                            10 March 2021, 03:00PM
                                        </li>
                                        <li class="media">
                                            <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                            <div class="media-body">
                                            <h5 class="mt-0 mb-1">Dr. Travis Martin</h5>
                                            <p>Dentist</p>
                                            </div>
                                        </li>
                                        <li>
                                            <small class="d-block">Hospital</small>
                                            NMC Hospital
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-12 col-lg-4 text-center text-md-right mt-3 mt-md-0">
                                    <span class="contact-info mr-4">
                                    <a class="mt-0" href="javascript:void(0)"><span class="fa fa-map"></span></a>
                                    <a class="mt-0" href="javascript:void(0)"><span class="icon-phone"></span></a>
                                    </span>
                                    <a href="javascript:void(0)" data-toggle="modal" data-target="#cancel" class="btn btn-danger px-3">CANCEL</a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <h4 class="mb-4 mt-5">History</h4>
                        <div class="card lab-result">
                            <div class="card-body py-2">
                                <div class="row align-items-center">
                                <div class="col-md-12 col-lg-8">
                                    <ul>
                                        <li>
                                            <small class="d-block">Date & Time</small>
                                            10 March 2021, 03:00PM
                                        </li>
                                        <li class="media">
                                            <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                            <div class="media-body">
                                            <h5 class="mt-0 mb-1">Dr. Travis Martin</h5>
                                            <p>Dentist</p>
                                            </div>
                                        </li>
                                        <li>
                                            <small class="d-block">Hospital</small>
                                            NMC Hospital
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
                        </div>
                        <div class="card lab-result">
                            <div class="card-body py-2">
                                <div class="row align-items-center">
                                <div class="col-md-12 col-lg-8">
                                    <ul>
                                        <li>
                                            <small class="d-block">Date & Time</small>
                                            10 March 2021, 03:00PM
                                        </li>
                                        <li class="media">
                                            <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                            <div class="media-body">
                                            <h5 class="mt-0 mb-1">Dr. Travis Martin</h5>
                                            <p>Dentist</p>
                                            </div>
                                        </li>
                                        <li>
                                            <small class="d-block">Hospital</small>
                                            NMC Hospital
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
                        </div>
                        <div class="card lab-result">
                            <div class="card-body py-2">
                                <div class="row align-items-center">
                                <div class="col-md-12 col-lg-8">
                                    <ul>
                                        <li>
                                            <small class="d-block">Date & Time</small>
                                            10 March 2021, 03:00PM
                                        </li>
                                        <li class="media">
                                            <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                            <div class="media-body">
                                            <h5 class="mt-0 mb-1">Dr. Travis Martin</h5>
                                            <p>Dentist</p>
                                            </div>
                                        </li>
                                        <li>
                                            <small class="d-block">Hospital</small>
                                            NMC Hospital
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
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Appointments
