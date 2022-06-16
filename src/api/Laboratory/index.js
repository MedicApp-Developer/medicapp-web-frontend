import axios from '../../axios';
import { LABORATORY_NAMESPACE, LAB_REQUEST_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const LaboratoryApi = {
    getAllLaboratories(pageNo, getAll, hospitalId) {
        return trackPromise(axios.get(`/${LABORATORY_NAMESPACE}?page=${pageNo}&getAll=${getAll ? true : false}&hospitalId=${hospitalId}`));
    },
    createLaboratory(data) {
        return trackPromise(axios.post(`${LABORATORY_NAMESPACE}`, data));
    },
    deleteLab(id){
        return trackPromise(axios.delete(`${LABORATORY_NAMESPACE}/${id}`));
    },
    searchLabs(pageNo, searchedText) {
        return trackPromise(axios.get(`${LABORATORY_NAMESPACE}/search/${searchedText}?page=${pageNo}`));
    },
    createLabRequest(data) {
        return trackPromise(axios.post(`${LAB_REQUEST_NAMESPACE}`, data));
    },
    updateLabRequest(id, values) {
        return trackPromise(axios.put(`${LAB_REQUEST_NAMESPACE}/${id}`, values));
    },
    updateLab(id, values) {
        return trackPromise(axios.put(`${LABORATORY_NAMESPACE}/${id}`, values));
    },
    getSingleLab(id) {
        return trackPromise(axios.get(`${LABORATORY_NAMESPACE}/${id}`));
    },
    removeProfilePicture(labId) {
        return trackPromise(axios.delete(`/${LABORATORY_NAMESPACE}/deleteProfileImage/${labId}`));
    },
    uploadProfilePic(id, data) {
        return trackPromise(axios.put(`/${LABORATORY_NAMESPACE}/uploadProfilePicture/${id}`, data));
    },
}

export default LaboratoryApi;