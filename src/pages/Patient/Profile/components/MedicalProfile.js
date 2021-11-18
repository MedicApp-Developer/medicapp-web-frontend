import React from 'react'
import PATIENT_IMAGE from '../../../../assets/images/patient.png';
import HEART_IMAGE from '../../../../assets/images/heart.png';
import TEMP_IMAGE from '../../../../assets/images/temp.png';
import GLOCOSE_IMAGE from '../../../../assets/images/glucose.png'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png';
import VIEW_QR_IMAGE from '../../../../assets/images/view-qr.png';
import LAB_IMAGE from '../../../../assets/images/lab.png';

function MedicalProfile() {
    return (
        <>
            <section class="user-dashboard patient-account">
                <div class="container">
                    <div class="row align-items-center add-list">
                    <div class="col-12">
                        <h4>Current Medical Record</h4>
                    </div>
                    </div>
                    <div class="row pb-5">
                    <div class="col-md-4">
                        <div class="card profile-detail py-3">
                            <div class="card-body">
                                <div class="media">
                                <img class="avatar-lg mr-0" src={PATIENT_IMAGE} alt="patient" />
                                <div class="media-body">
                                    <h5 class="mt-3 mb-2">Anthony Miles</h5>
                                    <h6>Age: 36</h6>
                                    <a href="javascript:void(0)" data-toggle="modal" data-target="#updateInformation" class="btn btn-primary px-3 py-1">Update</a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card patient-detail">
                            <div class="card-body">
                                <h5>Information:</h5>
                                <ul>
                                <li>
                                    <span>Gender:</span> Male
                                </li>
                                <li>
                                    <span>Blood Type:</span> 0+ (Positive)
                                </li>
                                <li>
                                    <span>Allergies:</span> Milk, Penicilin
                                </li>
                                <li>
                                    <span>Diseases:</span> Diabetes, Blood Disorders
                                </li>
                                <li>
                                    <span>Height:</span> 1.78m
                                </li>
                                <li>
                                    <span>Weight:</span> 65kg
                                </li>
                                <li>
                                    <span>Patient ID:</span> 456767
                                </li>
                                <li>
                                    <span>Last Visit:</span> 10 Aug 2021
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="row heart-rate">
                            <div class="col-sm-4 col-md-4">
                                <div class="card">
                                <div class="card-body">
                                    <img class="my-2" src={HEART_IMAGE} alt="heart" />
                                    <p>Heart Rate</p>
                                    <h4>80bpm</h4>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-md-4">
                                <div class="card">
                                <div class="card-body">
                                    <img src={TEMP_IMAGE} alt="temp" />
                                    <p>Body Temperature</p>
                                    <h4>35.6 <sup>o</sup>c</h4>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-md-4">
                                <div class="card">
                                <div class="card-body">
                                    <img src={GLOCOSE_IMAGE} alt="glucose" />
                                    <p>Glucose</p>
                                    <h4>100 <span>mg/dl</span></h4>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card lab-result">
                                <div class="card-body">
                                    <h5>Upcoming Appointment</h5>
                                    <div class="row align-items-center">
                                        <div class="col-md-12 col-lg-8 pr-0">
                                            <ul>
                                            <li>
                                                <small class="d-block">Date &amp; Time</small>
                                                10 March 2021
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
                                            <span class="contact-info mr-3">
                                            <a class="mt-0" href="javascript:void(0)"><span class="fa fa-map"></span></a>
                                            <a class="mt-0" href="javascript:void(0)"><span class="icon-phone"></span></a>
                                            </span>
                                            <a href="javascript:void(0)" class="btn btn-danger px-3">CANCEL</a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-lg-6 pr-lg-1">
                                <div class="card lab-results">
                                <div class="card-body">
                                    <h5 class="mb-0">Lab Results</h5>
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6">
                                            <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab" /></span>
                                            <div class="media-body">
                                                <h5>Blood Test</h5>
                                                <p>20 August 2021</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6">
                                            <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab" /></span>
                                            <div class="media-body">
                                                <h5>Body CT-Scan</h5>
                                                <p>20 August 2021</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6">
                                            <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab" /></span>
                                            <div class="media-body">
                                                <h5>Body CT-Scan</h5>
                                                <p>20 August 2021</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6">
                                            <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab" /></span>
                                            <div class="media-body">
                                                <h5>Fasting Blood Sugar</h5>
                                                <p>20 August 2021</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6">
                                            <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab" /></span>
                                            <div class="media-body">
                                                <h5>CBC</h5>
                                                <p>20 August 2021</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6">
                                            <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab" /></span>
                                            <div class="media-body">
                                                <h5>CBC</h5>
                                                <p>20 August 2021</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-6">
                                <div class="card lab-results pb-1">
                                <div class="card-body pb-4">
                                    <h5 class="mb-0">QR Prescriprion</h5>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="media">
                                            <span class="bg-danger"> <img src={VIEW_QR_IMAGE} alt="view-qr" /></span>
                                            <div class="media-body">
                                                <h5>Blood Test</h5>
                                                <p>20 August 2021</p>
                                            </div>
                                            <a href="javascript:void(0)" class="btn btn-primary px-3 py-1">View</a>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="media">
                                            <span class="bg-danger"> <img src={VIEW_QR_IMAGE} alt="view-qr" /></span>
                                            <div class="media-body">
                                                <h5>Blood Test</h5>
                                                <p>20 August 2021</p>
                                            </div>
                                            <a href="javascript:void(0)" class="btn btn-primary px-3 py-1">View</a>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="media">
                                            <span class="bg-danger"> <img src={VIEW_QR_IMAGE} alt="view-qr" /></span>
                                            <div class="media-body">
                                                <h5>Blood Test</h5>
                                                <p>20 August 2021</p>
                                            </div>
                                            <a href="javascript:void(0)" class="btn btn-primary px-3 py-1">View</a>
                                            </div>
                                        </div>
                                    </div>
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

export default MedicalProfile
