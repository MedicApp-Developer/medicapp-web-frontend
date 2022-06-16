import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../../layout/DashboardLayout'
import PATIENT_IMAGE from '../../../../assets/images/patient.png'
import HEART_IMAGE from '../../../../assets/images/heart.png'
import TEMP_IMAGE from '../../../../assets/images/temp.png'
import GLOCOSE_IMAGE from '../../../../assets/images/glucose.png'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png'
import LAB_IMAGE from '../../../../assets/images/lab.png'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectPatient } from '../../../../store/actions/patientActions';
import PatientApi from '../../../../api/Patients'
import { LabResults } from '../../../../constants/lab'

function HospitalPatientInfo({ selectPatient, patients }) {

    const { id } = useParams();
    const [results, setResults] = useState([]);

    const { selectedPatient } = patients;

    useEffect(() => {
        console.log(selectedPatient);
        selectPatient(id);
        getLabResult();
    }, []);

    const getLabResult = () => {
        PatientApi.getPatientLabResults(id).then(res => {
            const labResultsTotal = []
            const apiResult = res.data.data;

            apiResult.map(item => {
                if (item.status === LabResults.COMPLETED) {
                    item.tests.map(innerItem => {
                        labResultsTotal.push(innerItem);
                    })
                }
            })

            setResults(labResultsTotal);
        })
    }

    return (
        <DashboardLayout>
            <div class="row align-items-center add-list">
                <div class="col-12">
                    <h4>Patient Profile</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card profile-detail py-3">
                        <div class="card-body">
                            <div class="media">
                                <img style={{ cursor: "pointer" }} className="patient-profile-large" src={selectedPatient?.image ? selectedPatient?.image : PATIENT_IMAGE} alt="patient" />
                                <div class="media-body">
                                    <h5 class="mt-3 mb-2">{selectedPatient.firstName + " " + selectedPatient.lastName}</h5>
                                    {/* TODO show age after calculating from birthday */}
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
                                    <span>Blood Type:</span> {selectedPatient?.bloodType ?? '-'}
                                </li>
                                <li>
                                    <span>Allergies:</span> {selectedPatient?.allergies?.length === 0 ? '-' : selectedPatient?.allergies?.map((allergy, index) => index === selectedPatient?.allergies?.length - 1 ? allergy : allergy + ', ')}
                                </li>
                                <li>
                                    <span>Diseases:</span> {selectedPatient?.diseases?.length === 0 ? '-' : selectedPatient?.diseases?.map((disease, index) => index === selectedPatient?.diseases?.length - 1 ? disease : disease + ', ')}
                                </li>
                                <li>
                                    <span>Height:</span> {selectedPatient?.height === null ? '-' : selectedPatient?.height + "m"}
                                </li>
                                <li>
                                    <span>Weight:</span> {selectedPatient?.weight === null ? '-' : selectedPatient?.weight + "kg"}
                                </li>
                                <li>
                                    <span>Patient ID:</span> {selectedPatient._id}
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
                                                    <img class="avatar-sm ml-3" src={doc?.image ? doc?.image : DOCTOR_IMAGE} alt="doctor" />
                                                    <div class="media-body">
                                                        <h5 class="mb-0">{doc.firstName + " " + doc.lastName}</h5>
                                                        {/* <p>{doc.specialityId}</p> */}
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
                                        {results?.map(item => (
                                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                                                <div class="media">
                                                    <span> <img style={{ width: "20px", height: "20px", borderRadius: "0px" }} src={LAB_IMAGE} alt="lab" /></span>
                                                    <div class="media-body">
                                                        <h5>{item.test}</h5>
                                                        <p>{item.result}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

const mapStateToProps = state => ({
    patients: state.patients
});

const mapDispatchToProps = {
    selectPatient
}

export default connect(mapStateToProps, mapDispatchToProps)(HospitalPatientInfo)
