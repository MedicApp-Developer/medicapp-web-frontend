import axios from '../../axios';
import { DOCTOR_NAMESPACE, SPECIALITY_REQUEST_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const DoctorApi = {
    getAllDoctors(pageNo, referenceId) {
        return trackPromise(axios.get(`/${DOCTOR_NAMESPACE}?page=${pageNo}&reference_id=${referenceId}`));
    },
    createDoctor(data) {
        return trackPromise(axios.post(`${DOCTOR_NAMESPACE}`, data));
    },
    deleteDoctor(id){
        return trackPromise(axios.delete(`${DOCTOR_NAMESPACE}/${id}`));
    },
    searchDoctors(pageNo, searchedText) {
        return trackPromise(axios.get(`${DOCTOR_NAMESPACE}/search/${searchedText}?page=${pageNo}`));
    },
    getSingleDoctor(id) {
        return trackPromise(axios.get(`${DOCTOR_NAMESPACE}/${id}`));
    },
    updateDoctor(id, values) {
        return trackPromise(axios.put(`${DOCTOR_NAMESPACE}/${id}`, values));
    },
    getAllSpecialities() {
        return trackPromise(axios.get(`${SPECIALITY_REQUEST_NAMESPACE}`));
    }
}

export default DoctorApi;