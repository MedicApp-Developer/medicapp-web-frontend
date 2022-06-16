import React from 'react'
import DOCTOR_IMAGE from '../../../../assets/images/doctor_placeholder.png'
import moment from 'moment'
import CancelAppointment from './CancelAppointment'
import { useState } from 'react'
import { href } from '../../../../constants/extra'
import SlotApi from '../../../../api/Slots'
import { saveAs } from 'file-saver'
import { useTranslation } from "react-i18next"
import VerifyCode from './VerifyCode'

function Appointments({ appointments }) {

    const [selectedAppointment, setSelectedAppointment] = useState(null)
    const { t } = useTranslation()

    let today = new Date()
    let yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)

    const history = appointments.filter(appointment => moment(appointment.to).isBefore(today))

    const upcomming = appointments.filter(appointment => moment(appointment.to).isSameOrAfter(today))

    const generateAppointmentSlip = (id) => {
        SlotApi.getAppointmentSlip(id).then(res => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
            saveAs(pdfBlob, 'Appointment Slip.pdf')
        })
    }

    return (
        <>
            <section class="user-dashboard">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-xl-12 pb-5">
                            <h4 class="mb-4">{t("upcoming")}</h4>
                            {upcomming?.map(item => (
                                <div class="card lab-result">
                                    <div class="card-body py-2">
                                        <div class="row align-items-center">
                                            <div class="col-md-12 col-lg-6">
                                                <ul>
                                                    <li>
                                                        <small class="d-block">{t("date")} & {t("time")}</small>
                                                        {`${moment(item.from).format("DD-MM-YY")} - ( ${moment(item.from).format('hh.mm a')} - ${moment(item.to).format('hh:mm a')} )`}
                                                    </li>
                                                    <li class="media">
                                                        {
                                                            item.doctorId ?
                                                                (
                                                                    <>
                                                                        <img class="rounded-circle" src={item?.doctorId?.image ? item?.doctorId?.image : DOCTOR_IMAGE} alt="doctor" />
                                                                        <div class="media-body">
                                                                            <small class="d-block">Dr. {item.doctorId.firstName + " " + item.doctorId.lastName}</small>
                                                                            <p>{item.doctorId?.specialityId?.name}</p>
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <div class="media-body">
                                                                            <small class="d-block">{t("appointment_type")}</small>
                                                                            <p>{item?.type.replace(/_/g, ' ')}</p>
                                                                        </div>
                                                                    </>
                                                                )
                                                        }

                                                    </li>
                                                    <li>
                                                        <small class="d-block" >{t("hospital")}</small>
                                                        {item?.doctorId ? (
                                                            item?.doctorId?.hospitalId?.name
                                                        ) : (
                                                            item?.hospitalId?.name
                                                        )}
                                                    </li>
                                                    <li>
                                                        <small class="d-block" >{t("family")}</small>
                                                        {item?.familyMemberId ? `${item?.familyMemberId?.firstName} ${item?.familyMemberId.lastName}` : t("mine")}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-md-12 col-lg-6 text-center text-md-right mt-3 mt-md-0">
                                                <a style={{ marginRight: '1rem' }} href={href} onClick={(e) => { e.preventDefault(); generateAppointmentSlip(item._id) }} class="btn btn-secondary px-3">{t("slip")}</a>
                                                <a style={{ marginRight: '1rem' }} href="javascript:void(0)" onClick={(e) => { e.preventDefault(); setSelectedAppointment(item) }} data-toggle="modal" data-target="#verifyCode" class="btn btn-primary px-3">{t("GET_POINTS")}</a>
                                                <a href="javascript:void(0)" onClick={(e) => { e.preventDefault(); setSelectedAppointment(item) }} data-toggle="modal" data-target="#cancel" class="btn btn-danger px-3">{t("CANCEL")}</a>
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
                                                        {t("no_upcoming_appointments")}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <h4 class="mb-4 mt-5">{t("history")}</h4>
                            {history.map(item => (
                                <div class="card lab-result">
                                    <div class="card-body py-2">
                                        <div class="row align-items-center">
                                            <div class="col-md-12 col-lg-6">
                                                <ul>
                                                    <li>
                                                        <small class="d-block">{t("date")} & {t("time")}</small>
                                                        {`${moment(item.from).format("DD-MM-YY")} - ( ${moment(item.from).format('hh:mm a')} - ${moment(item.to).format('hh:mm a')} )`}
                                                    </li>
                                                    <li class="media">
                                                        {
                                                            item.doctorId ?
                                                                (
                                                                    <>
                                                                        <img class="rounded-circle" src={item?.doctorId?.image ? item?.doctorId?.image : DOCTOR_IMAGE} alt="doctor" />
                                                                        <div class="media-body">
                                                                            <small class="d-block">Dr. {item.doctorId.firstName + " " + item.doctorId.lastName}</small>
                                                                            <p>{item.doctorId?.specialityId?.name}</p>
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <div class="media-body">
                                                                            <small class="d-block">{t("appointment_type")}</small>
                                                                            <p>{item?.type.replace(/_/g, ' ')}</p>
                                                                        </div>
                                                                    </>
                                                                )
                                                        }

                                                    </li>
                                                    <li>
                                                        <small class="d-block" >{t("hospital")}</small>
                                                        {item?.doctorId ? (
                                                            item?.doctorId?.hospitalId?.name
                                                        ) : (
                                                            item?.hospitalId?.name
                                                        )}
                                                    </li>
                                                    <li>
                                                        <small class="d-block" >{t("family")}</small>
                                                        {item?.familyMemberId ? `${item?.familyMemberId?.firstName} ${item?.familyMemberId.lastName}` : t("mine")}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-md-12 col-lg-6 text-center text-md-right mt-3 mt-md-0">
                                                <a style={{ marginRight: '0.5rem' }} href={href} onClick={(e) => { e.preventDefault(); generateAppointmentSlip(item._id) }} class="btn btn-secondary px-3">{t("slip")}</a>
                                                <a style={{ marginRight: '0.5rem' }} href="javascript:void(0)" onClick={(e) => { e.preventDefault(); setSelectedAppointment(item) }} data-toggle="modal" data-target="#verifyCode" class="btn btn-primary px-3">{t("GET_POINTS")}</a>
                                                <a href="javascript:void(0)" onClick={(e) => { e.preventDefault(); setSelectedAppointment(item) }} data-toggle="modal" data-target="#cancel" class="btn btn-secondary px-3">{t("DELETE")}</a>
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
                                                        {t("no_history_present")}
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
                <VerifyCode selectedAppointment={selectedAppointment} />
            </section>
        </>
    )
}

export default Appointments
