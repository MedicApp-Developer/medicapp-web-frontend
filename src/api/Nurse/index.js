import axios from '../../axios';
import { NURSE_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const NurseApi = {
    getAllNurses(pageNo) {
        return trackPromise(axios.get(`/${NURSE_NAMESPACE}?page=${pageNo}`));
    },
    createNurse(data) {
        return trackPromise(axios.post(`${NURSE_NAMESPACE}`, data));
    },
    deleteNurse(id){
        return trackPromise(axios.delete(`${NURSE_NAMESPACE}/${id}`));
    },
    getSingleNurse(id) {
        return trackPromise(axios.get(`${NURSE_NAMESPACE}/${id}`));
    },
    updateNurse(id, values) {
        return trackPromise(axios.put(`${NURSE_NAMESPACE}/${id}`, values));
    },
    searchNurses(pageNo, searchedText) {
        return trackPromise(axios.get(`${NURSE_NAMESPACE}/search/${searchedText}?page=${pageNo}`));
    },
}

export default NurseApi;