import React, { useContext, useState } from 'react'
import PATIENT_IMAGE from '../../../../assets/images/patient.png'
import HEART_IMAGE from '../../../../assets/images/heart.png'
import TEMP_IMAGE from '../../../../assets/images/temp.png'
import GLOCOSE_IMAGE from '../../../../assets/images/glucose.png'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png'
import VIEW_QR_IMAGE from '../../../../assets/images/view-qr.png'
import LAB_IMAGE from '../../../../assets/images/lab.png'
import { getAge } from '../../../../Utills/functions'
import moment from 'moment'
import GenerateQrCode from './GenerateQrCode'
import { href } from '../../../../constants/extra'
import CancelAppointment from './CancelAppointment'
import UpdateProfile from './UpdateProfile'
import { useTranslation } from "react-i18next"
import { RootContext } from '../../../../contextApi'

function MedicalProfile({ patient }) {
    const { t } = useTranslation()
    const { user } = useContext(RootContext);
    const [selectedResult, setSelectedResult] = useState(null)
    const [selectedAAppointment, setSelectedAppointment] = useState({})

    return (
        <>
            <section class="user-dashboard patient-account">
                <div class="container">
                    <div class="row align-items-center add-list">
                        <div class="col-12">
                            <h4>{t("current_medical_record")}</h4>
                        </div>
                    </div>
                    <div class="row pb-5">
                        <div class="col-md-4">
                            <div class="card profile-detail py-3">
                                <div class="card-body">
                                    <div class="media">
                                        <img class="avatar-lg mr-0" src={PATIENT_IMAGE} alt="patient" />
                                        <div class="media-body">
                                            <h5 class="mt-3 mb-2">{patient?.patient?.firstName + " " + patient?.patient?.lastName}</h5>
                                            <h6>{t("age")}: {getAge(patient?.patient?.birthday)}</h6>
                                            <a href="javascript:void(0)" data-toggle="modal" data-target="#updateVitals" class="btn btn-primary px-3 py-1">{t("update")}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card patient-detail">
                                <div class="card-body">
                                    <h5>{t("information")}:</h5>
                                    <ul>
                                        <li>
                                            <span>{t("gender")}:</span> {patient?.patient?.gender}
                                        </li>
                                        <li>
                                            <span>{t("blood_type")}:</span> {patient?.patient?.bloodType}
                                        </li>
                                        <li>
                                            <span>{t("allergies")}:</span> {patient?.patient?.allergies ?? "TODO"}
                                        </li>
                                        <li>
                                            <span>{t("diseases")}:</span> {patient?.patient?.diseases ?? "TODO"}
                                        </li>
                                        <li>
                                            <span>{t("height")}:</span> {patient?.patient?.height + "m"}
                                        </li>
                                        <li>
                                            <span>{t("weight")}:</span> {patient?.patient?.weight + "kg"}
                                        </li>
                                        <li>
                                            <span>{t("patient_ID")}:</span> {patient?.patient?._id}
                                        </li>
                                        <li>
                                            <span>{t("points")}:</span> {user?.points}
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
                                            <p>{t("heart_rate")}</p>
                                            <h4>{patient?.patient?.heartRate}bpm</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <img src={TEMP_IMAGE} alt="temp" />
                                            <p>{t("body_temperature")}</p>
                                            <h4>{patient?.patient?.temprature} <sup>o</sup>c</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <img src={GLOCOSE_IMAGE} alt="glucose" />
                                            <p>{t("glucose")}</p>
                                            <h4>{patient?.patient?.glucose} <span>mg/dl</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card lab-result">
                                        <div class="card-body">
                                            <h5>{t("upcoming_appointment")}</h5>
                                            {patient?.upcommingAppointments?.map(appointment => (
                                                <div class="row align-items-center">
                                                    <div class="col-md-12 col-lg-8 pr-0">
                                                        <ul>
                                                            <li>
                                                                <small class="d-block">{t("date")} &amp; {t("time")}</small>
                                                                {appointment?.time}
                                                            </li>
                                                            <li class="media">
                                                                <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                                                <div class="media-body">
                                                                    <h5 class="mt-0 mb-1">Dr. {appointment?.doctorId?.firstName + " " + appointment?.doctorId?.lastName}</h5>
                                                                    <p>{appointment?.doctorId?.specialityId?.name}</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <small class="d-block">{t("hospital")}</small>
                                                                {appointment?.hospitalId?.name}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-12 col-lg-4 text-center text-md-right mt-3 mt-md-0">
                                                        <a href="javascript:void(0)" onClick={(e) => { e.preventDefault(); setSelectedAppointment(appointment) }} data-toggle="modal" data-target="#cancel" class="btn btn-danger px-3">{t("CANCEL")}</a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-lg-6 pr-lg-1">
                                    <div class="card lab-results">
                                        <div class="card-body">
                                            <h5 class="mb-0">{t("lab_results")}</h5>
                                            <div class="row">
                                                {patient?.labResults?.map(labResult => (
                                                    <div class="col-sm-12 col-md-6">
                                                        <div class="media">
                                                            <span> <img src={LAB_IMAGE} style={{ width: "20px", height: "20px", borderRadius: "0px" }} alt="lab" /></span>
                                                            <div class="media-body">
                                                                <h5>{labResult?.tests?.map(item => item.test + ", ")}</h5>
                                                                <p>{moment(labResult?.date).format('LL')}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-6">
                                    <div class="card lab-results pb-1">
                                        <div class="card-body pb-4">
                                            <h5 class="mb-0">{t("QR_Prescriprion")}</h5>
                                            <div class="row">
                                                {patient?.qrPrescriptions?.map(prescription => (
                                                    <div class="col-md-12">
                                                        <div class="media">
                                                            <span class="bg-danger"> <img src={VIEW_QR_IMAGE} style={{ width: "20px", height: "20px", borderRadius: "0px" }} alt="view-qr" /></span>
                                                            <div class="media-body">
                                                                <h5>{prescription?.doctorId?.firstName + " " + prescription?.doctorId?.lastName}</h5>
                                                                <p>{moment(prescription?.date).format('LL')}</p>
                                                            </div>
                                                            <a href={href} data-toggle="modal" data-target="#qrCode" onClick={(e) => { e.preventDefault(); setSelectedResult(prescription) }} class="btn btn-primary px-3 py-1">{t("view")}</a>
                                                        </div>
                                                    </div>
                                                ))}
                                                <GenerateQrCode selectedResult={selectedResult} setSelectedResult={setSelectedResult} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CancelAppointment selectedAppointment={selectedAAppointment} />
                <UpdateProfile patient={patient.patient} />
            </section>
        </>
    )
}

export default MedicalProfile
