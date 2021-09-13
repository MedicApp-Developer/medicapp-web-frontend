import axios from '../../axios';
import { LABORATORY_NAMESPACE } from '../../constants/namespaces';

const LaboratoryApi = {
    getAllLaboratories() {
        return axios.get(`/${LABORATORY_NAMESPACE}`);
    },
    createLaboratory(data) {
        return axios.post(`${LABORATORY_NAMESPACE}`, data);
    },
    deleteLab(id){
        return axios.delete(`${LABORATORY_NAMESPACE}/${id}`);
    }
}

export default LaboratoryApi;