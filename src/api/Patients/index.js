import axios from '../../axios';
import { PATIENT_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const PatientApi = {
    getAllPatients(pageNo) {
        return trackPromise(axios.get(`/${PATIENT_NAMESPACE}?page=${pageNo}`));
    },
    deletePatient(id){
        return trackPromise(axios.delete(`${PATIENT_NAMESPACE}/${id}`));
    },
    getSinglePatient(id) {
        return trackPromise(axios.get(`/${PATIENT_NAMESPACE}/${id}`));
    },
    createPatientFromNurse(data) {
        return trackPromise(axios.post(`/${PATIENT_NAMESPACE}/createNursePatient`, data));
    },
    updatePatient(id, data) {
        return trackPromise(axios.put(`/${PATIENT_NAMESPACE}/${id}`, data));
    }
}

export default PatientApi;