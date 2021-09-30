import axios from '../../axios';
import { DOCTOR_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const DoctorApi = {
    getAllDoctors(pageNo) {
        return trackPromise(axios.get(`/${DOCTOR_NAMESPACE}?page=${pageNo}`));
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
    }
}

export default DoctorApi;