import axios from '../../axios';
import { SPECIALITY_REQUEST_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const SpecialityApi = {
    getAllSpecialities(pageNo) {
        return trackPromise(axios.get(`/${SPECIALITY_REQUEST_NAMESPACE}?page=${pageNo}`));
    },
    deleteSpeciality(id){
        return trackPromise(axios.delete(`${SPECIALITY_REQUEST_NAMESPACE}/${id}`));
    },
    getSingleSpeciality(id) {
        return trackPromise(axios.get(`/${SPECIALITY_REQUEST_NAMESPACE}/${id}`));
    },
    createSpeciality(data) {
        return trackPromise(axios.post(`/${SPECIALITY_REQUEST_NAMESPACE}`, data));
    }
}

export default SpecialityApi;