import axios from '../../axios';
import { CATEGORIES_NAMESPACE, HOSPITAL_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const HospitalApi = {
    getSingleHospital(id) {
        return trackPromise(axios.get(`/${HOSPITAL_NAMESPACE}/${id}`));
    },
    getAllHospitalServices() {
        return trackPromise(axios.get(`${HOSPITAL_NAMESPACE}/services/all`));
    },
    getAllHospitalCategories() {
        return trackPromise(axios.get(`${CATEGORIES_NAMESPACE}`));
    },
    updateHospitalProfile(hospitalId, newData) {
        return trackPromise(axios.put(`${HOSPITAL_NAMESPACE}/${hospitalId}`, newData));
    },
    uploadHospitalImage(id, data) {
        return trackPromise(axios.put(`${HOSPITAL_NAMESPACE}/uploadImage/${id}`, data));
    },
    searchHospitalByText(text) {
        return trackPromise(axios.get(`/${HOSPITAL_NAMESPACE}/search/${text}`));
    },
    filterHospitals(filters) {
        return trackPromise(axios.post(`${HOSPITAL_NAMESPACE}/filter`, filters));
    },
    getAllHospitals() {
        return trackPromise(axios.get(`${HOSPITAL_NAMESPACE}`));
    }
}

export default HospitalApi;