import axios from '../../axios';
import { APPOINTMENT_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const AppointmentApi = {
    getHospitalAppointment(hospitalId) {
        return trackPromise(axios.get(`/${APPOINTMENT_NAMESPACE}/hospitalAppointments/${hospitalId}`));
    
    },
    getDoctorAppointments(doctorId) {
        return trackPromise(axios.get(`/${APPOINTMENT_NAMESPACE}/doctorAppointments/${doctorId}`));
    }
}

export default AppointmentApi;