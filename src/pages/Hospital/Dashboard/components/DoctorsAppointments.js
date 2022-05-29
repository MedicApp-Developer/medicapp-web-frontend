import React, { useContext, useEffect } from 'react'
import PATIENT_IMAGE from '../../../../assets/images/patient.png'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png'
import { RootContext } from '../../../../contextApi'
import { connect } from 'react-redux'
import { getAppointments } from '../../../../store/actions/appointmentActions'
import moment from 'moment'

function DoctorsAppointments({ getAppointments, appointments }) {

    const { user } = useContext(RootContext)

    useEffect(() => {
        if (user?.referenceId) {
            getAppointments(user.referenceId)
        }
    }, [getAppointments, user.referenceId])

    return (
        <>
            <div class="scrollbar">
                <div class="table-responsive">
                    <table class="table mb-md-0">
                        <tbody>
                            {appointments.filter(app => app.patientId !== null)?.map(appointment => (
                                <tr>
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
                                            <img src={appointment?.doctorId?.image ? appointment?.doctorId?.image : DOCTOR_IMAGE} alt="doctor" />
                                            <div class="media-body">
                                                <h5 class="mt-0">Dr. {appointment?.doctorId?.firstName + " " + appointment?.doctorId?.lastName}</h5>
                                                <p>{appointment?.doctorId?.specialityId?.map((item, index) => index === appointment?.doctorId?.specialityId.length - 1 ? item['name_en'] : item['name_en'] + ", ")}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="media">
                                            <img src={appointment?.patientId?.image ? appointment?.patientId?.image : PATIENT_IMAGE} alt="patient" />
                                            <div class="media-body">
                                                <h5 class="mt-0">{appointment?.patientId.firstName + " " + appointment?.patientId.lastName}</h5>
                                                <p>Patient</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {appointments.length === 0 && (
                                <p>No appointment found</p>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    appointments: state.appointments.appointments
})

const mapDispatchToProps = {
    getAppointments
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsAppointments)
