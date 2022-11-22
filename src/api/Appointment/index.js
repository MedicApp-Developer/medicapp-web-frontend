import axios from '../../axios';
import { APPOINTMENT_NAMESPACE, LAB_REQUEST_NAMESPACE, SLOT_NAMESPACE } from '../../constants/namespaces';
import { trackPromise } from 'react-promise-tracker';

const AppointmentApi = {
    getHospitalAppointment(hospitalId) {
        return trackPromise(axios.get(`/${APPOINTMENT_NAMESPACE}/hospitalAppointments/${hospitalId}`));
    },
    getDoctorAppointments(doctorId, pageNo) {
        return trackPromise(axios.get(`/${APPOINTMENT_NAMESPACE}/doctorAppointments/${doctorId}?page=${pageNo}`));
    },
    getDoctorApprovedAppointments(doctorId, pageNo) {
        return trackPromise(axios.get(`/${APPOINTMENT_NAMESPACE}/doctorApprovedAppointments/${doctorId}?page=${pageNo}`));
    },
    deleteAppointment(id) {
        return trackPromise(axios.delete(`/${APPOINTMENT_NAMESPACE}/${id}`));
    },
    deletePatientAppointment(id, patientId) {
        return trackPromise(axios.delete(`/${APPOINTMENT_NAMESPACE}/${id}/${patientId}`));
    },
    getLabRequests(doctorId, pageNo, status) {
        return trackPromise(axios.get(`/${LAB_REQUEST_NAMESPACE}/${doctorId}?page=${pageNo}&status=${status}`));
    },
    getHospitalBookedAppointments(hospitalId, pageNo) {
        return trackPromise(axios.get(`/${APPOINTMENT_NAMESPACE}/hospitalBooked/${hospitalId}?page=${pageNo}`));
    },
    approvePatientAppointment(slotId, patientId) {
        return trackPromise(axios.get(`/${APPOINTMENT_NAMESPACE}/approvePatientAppointment/${slotId}/${patientId}`));
    },
    getSingleAppointment(appointmentId) {
        return trackPromise(axios.get(`/${APPOINTMENT_NAMESPACE}/${appointmentId}`));
    },
    // Updated Ones
    createAppointment(data) {
        return trackPromise(axios.post(`${APPOINTMENT_NAMESPACE}`, data));
    },
    cancelAppointment(slotId) {
        return trackPromise(axios.delete(`${APPOINTMENT_NAMESPACE}/cancel/${slotId}`));
    },

    // MEDICAPP
    createMedicappAppointment(data) {
        return trackPromise(axios.post(`${SLOT_NAMESPACE}/medicapp`, data));
    },
    getPatientMedicappBookedAppointment(id) {
        return trackPromise(axios.post(`${SLOT_NAMESPACE}/patient/booked/${id}`));
    },
    cancelMedicappAppointment(id) {
        return trackPromise(axios.delete(`${SLOT_NAMESPACE}/medicapp/${id}`))
    },
    getMedicappAppointments() {
        return trackPromise(axios.get(`${SLOT_NAMESPACE}/medicapp`))
    },
}

export default AppointmentApi;