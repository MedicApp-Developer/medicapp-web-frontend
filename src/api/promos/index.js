import axios from '../../axios';
import { PROMO_REQUEST_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const PromoApi = {
    getAllPromos(pageNo) {
        return trackPromise(axios.get(`/${PROMO_REQUEST_NAMESPACE}?page=${pageNo}`));
    },
    deletePromo(id){
        return trackPromise(axios.delete(`${PROMO_REQUEST_NAMESPACE}/${id}`));
    },
    createPromo(data) {
        return trackPromise(axios.post(`/${PROMO_REQUEST_NAMESPACE}`, data));
    }
}

export default PromoApi;