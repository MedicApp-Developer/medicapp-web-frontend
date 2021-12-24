import React, { useEffect } from 'react'
import { href } from '../../../../constants/extra'
import DashboardLayout from '../../../../layout/DashboardLayout'
import PATIENT_IMAGE from '../../../../assets/images/patient.png';
import HEART_IMAGE from '../../../../assets/images/heart.png'
import TEMP_IMAGE from '../../../../assets/images/temp.png'
import GLOCOSE_IMAGE from '../../../../assets/images/glucose.png'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png'
import LAB_IMAGE from '../../../../assets/images/lab.png'
import { selectPatient } from '../../../../store/actions/patientActions';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import UpdateVitals from './UpdateVitals';

function NursePatientInfo({ selectPatient, selectedPatient }) {

    const { id } = useParams();

    useEffect(() => {
        selectPatient(id);
    }, [id, selectPatient]);

    return (
        <DashboardLayout>
            <div class="row align-items-center add-list">
            <div class="col-6">
               <h4>Patient Profile</h4>
            </div>
            <div class="col-6 text-right">
               <a href={href} data-toggle="modal" data-target="#updateVitals" class="btn btn-primary px-3">Update Vitals</a>
            </div>
         </div>
                <div class="row">
                    <div class="col-md-4">
                    <div class="card profile-detail py-3">
                        <div class="card-body">
                            <div class="media">
                                <img class="avatar-lg mr-0" src={PATIENT_IMAGE} alt="patient"/>
                                <div class="media-body">
                                <h5 class="mt-3 mb-2">{selectedPatient.firstName + " " + selectedPatient.lastName}</h5>
                                <h6>birthday: {selectedPatient.birthday}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card patient-detail">
                        <div class="card-body">
                            <h5>Information:</h5>
                            <ul>
                                <li>
                                <span>Gender:</span> {selectedPatient.gender}
                                </li>
                                <li>
                                <span>Blood Type:</span> {selectedPatient.bloodType}
                                </li>
                                <li>
                                <span>Allergies:</span> {selectedPatient.allergies?.join(",")}
                                </li>
                                <li>
                                <span>Diseases:</span> {selectedPatient?.diseases || "-"}
                                </li>
                                <li>
                                <span>Height:</span> {selectedPatient.height}m
                                </li>
                                <li>
                                <span>Weight:</span> {selectedPatient.weight}kg
                                </li>
                                <li>
                                <span>Patient ID:</span> {selectedPatient._id}
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
                                <h4>{selectedPatient?.heartRate}bpm</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-4">
                            <div class="card">
                                <div class="card-body">
                                <img src={TEMP_IMAGE} alt="temp" />
                                <p>Body Temperature</p>
                                <h4>{selectedPatient?.temprature} <sup>o</sup>c</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-4">
                            <div class="card">
                                <div class="card-body">
                                <img src={GLOCOSE_IMAGE} alt="glucose" />
                                <p>Glucose</p>
                                <h4>{selectedPatient?.glucose} <span>mg/dl</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body">
                                <h4>Doctors</h4>
                                <div class="row">
                                    {selectedPatient?.doctors?.map((doc) => (
                                        <div class="col-sm-4">
                                            <div class="media">
                                                <img class="avatar-sm" src={DOCTOR_IMAGE} class="ml-3" alt="doctor" />
                                                <div class="media-body">
                                                <h5 class="mb-0">{doc.firstName + " " + doc.lastName}</h5>
                                                <p>Dentist</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card lab-results">
                                <div class="card-body">
                                <h4 class="mb-0">Lab Results</h4>
                                <div class="row">
                                    <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                        <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab" /></span>
                                            <div class="media-body">
                                            <h5>Blood Test</h5>
                                            <p>20 August 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                        <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab"/></span>
                                            <div class="media-body">
                                            <h5>Body CT-Scan</h5>
                                            <p>20 August 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                        <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab"/></span>
                                            <div class="media-body">
                                            <h5>Body CT-Scan</h5>
                                            <p>20 August 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                        <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab"/></span>
                                            <div class="media-body">
                                            <h5>Fasting Blood Sugar</h5>
                                            <p>20 August 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                        <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab"/></span>
                                            <div class="media-body">
                                            <h5>CBC</h5>
                                            <p>20 August 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                        <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab"/></span>
                                            <div class="media-body">
                                            <h5>CBC</h5>
                                            <p>20 August 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                        <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab"/></span>
                                            <div class="media-body">
                                            <h5>Liver Function Test</h5>
                                            <p>20 August 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                        <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab"/></span>
                                            <div class="media-body">
                                            <h5>USG Abdomen Pelvis</h5>
                                            <p>20 August 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                        <div class="media">
                                            <span> <img src={LAB_IMAGE} alt="lab"/></span>
                                            <div class="media-body">
                                            <h5>USG Abdomen Pelvis</h5>
                                            <p>20 August 2021</p>
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
            {/* Update Vitals */}
            <UpdateVitals />
        </DashboardLayout>
    )
}

const mapStateToProps = state => ({
    selectedPatient: state.patients.selectedPatient
});

const mapDispatchToProps = {
    selectPatient
}

export default connect(mapStateToProps, mapDispatchToProps)(NursePatientInfo)