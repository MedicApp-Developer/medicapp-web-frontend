import axios from '../../axios';
import { LABORATORY_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const LaboratoryApi = {
    getAllLaboratories(pageNo) {
        return trackPromise(axios.get(`/${LABORATORY_NAMESPACE}?page=${pageNo}`));
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
}

export default LaboratoryApi;