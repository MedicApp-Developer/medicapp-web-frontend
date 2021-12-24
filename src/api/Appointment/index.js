import axios from '../../axios';
import { APPOINTMENT_NAMESPACE, LAB_REQUEST_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const AppointmentApi = {
    getHospitalAppointment(hospitalId) {
        return trackPromise(axios.get(`/${APPOINTMENT_NAMESPACE}/hospitalAppointments/${hospitalId}`));
    },
    getDoctorAppointments(doctorId, pageNo) {
        return trackPromise(axios.get(`/${APPOINTMENT_NAMESPACE}/doctorAppointments/${doctorId}?page=${pageNo}`));
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


    // Updated Ones
    createAppointment(data) {
        return trackPromise(axios.post(`${APPOINTMENT_NAMESPACE}`, data));
    },
    cancelAppointment(slotId) {
        return trackPromise(axios.delete(`${APPOINTMENT_NAMESPACE}/cancel/${slotId}`));
    }
}

export default AppointmentApi;