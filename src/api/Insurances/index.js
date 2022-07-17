import axios from '../../axios';
import { INSURANCE_REQUEST_NAMESPACE } from '../../constants/namespaces';
import { trackPromise } from 'react-promise-tracker';

const InsurancesApi = {
    getAllInsurances() {
        return trackPromise(axios.get(`/${INSURANCE_REQUEST_NAMESPACE}`));
    },
    deleteInsurance(id) {
        return trackPromise(axios.delete(`${INSURANCE_REQUEST_NAMESPACE}/${id}`));
    },
    getSingleInsurance(id) {
        return trackPromise(axios.get(`/${INSURANCE_REQUEST_NAMESPACE}/${id}`));
    },
    createInsurance(data) {
        return trackPromise(axios.post(`/${INSURANCE_REQUEST_NAMESPACE}`, data));
    },
    updateInsurance(id, data) {
        return trackPromise(axios.put(`/${INSURANCE_REQUEST_NAMESPACE}/${id}`, data));
    }
}

export default InsurancesApi;