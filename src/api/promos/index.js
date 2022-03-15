import axios from '../../axios';
import { PROMO_REQUEST_NAMESPACE } from '../../constants/namespaces';
import { trackPromise } from 'react-promise-tracker';

const PromoApi = {
    getAllPromos(pageNo) {
        return trackPromise(axios.get(`/${PROMO_REQUEST_NAMESPACE}?page=${pageNo}`));
    },
    getAllPromoVideosForPatient() {
        return trackPromise(axios.get(`/${PROMO_REQUEST_NAMESPACE}/all?getAll=${true}`));
    },
    deletePromo(id) {
        return trackPromise(axios.delete(`${PROMO_REQUEST_NAMESPACE}/${id}`));
    },
    createPromo(data) {
        return trackPromise(axios.post(`/${PROMO_REQUEST_NAMESPACE}`, data));
    },
    likePromo(id, patientId) {
        return trackPromise(axios.put(`/${PROMO_REQUEST_NAMESPACE}/like/${id}/${patientId}`));
    }
}

export default PromoApi;