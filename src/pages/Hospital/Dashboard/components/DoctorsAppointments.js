import React, { useContext, useEffect } from 'react'
import PATIENT_IMAGE from '../../../../assets/images/patient.png';
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png';
import { RootContext } from '../../../../contextApi';
import { connect } from 'react-redux';
import { getAppointments } from '../../../../store/actions/appointmentActions';

function DoctorsAppointments({ getAppointments, appointments }) {

    const { user } = useContext(RootContext);

    useEffect(() => {
        if(user?.referenceId){
            getAppointments(user.referenceId);
        }
    }, [getAppointments, user.referenceId]);

    return (
        <>
           <div class="scrollbar">
                            <div class="table-responsive">
                                <table class="table mb-md-0">
                                    <tbody>
                                        {appointments?.map(appointment => (
                                            <tr>
                                            <td>
                                                <span>Time</span>
                                                <p><strong>{appointment?.time}</strong></p>
                                            </td>
                                            <td>
                                                <div class="media">
                                                    <img src={DOCTOR_IMAGE} alt="doctor"/>
                                                    <div class="media-body">
                                                        <h5 class="mt-0">Dr. {appointment?.doctorId?.firstName + " " + appointment?.doctorId?.lastName}</h5>
                                                        <p>Dentist</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="media">
                                                    <img src={PATIENT_IMAGE} alt="patient"/>
                                                    <div class="media-body">
                                                        <h5 class="mt-0">Mr/Mrs. {appointment?.patientId.firstName + " " + appointment?.patientId.lastName}</h5>
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
});

const mapDispatchToProps = {
    getAppointments
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsAppointments);
