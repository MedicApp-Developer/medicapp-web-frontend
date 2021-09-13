import axios from '../../axios';
import { DOCTOR_NAMESPACE } from '../../constants/namespaces';

const DoctorApi = {
    getAllDoctors() {
        return axios.get(`/${DOCTOR_NAMESPACE}`);
    },
    createDoctor(data) {
        return axios.post(`${DOCTOR_NAMESPACE}`, data);
    },
    deleteDoctor(id){
        return axios.delete(`${DOCTOR_NAMESPACE}/${id}`);
    }
}

export default DoctorApi;