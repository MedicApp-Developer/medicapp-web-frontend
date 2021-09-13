import axios from '../../axios';
import { NURSE_NAMESPACE } from '../../constants/namespaces';

const NurseApi = {
    getAllNurses() {
        return axios.get(`/${NURSE_NAMESPACE}`);
    },
    createNurse(data) {
        return axios.post(`${NURSE_NAMESPACE}`, data);
    },
    deleteNurse(id){
        return axios.delete(`${NURSE_NAMESPACE}/${id}`);
    }
}

export default NurseApi;