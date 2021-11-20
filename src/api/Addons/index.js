import axios from '../../axios';
import { HOSPITAL_ADDON_SERVICES_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const AddonsApi = {
    getAllAddons() {
        return trackPromise(axios.get(`/${HOSPITAL_ADDON_SERVICES_NAMESPACE}/all`));
    },
    deleteAddon(id){
        return trackPromise(axios.delete(`${HOSPITAL_ADDON_SERVICES_NAMESPACE}/${id}`));
    },
    getSingleAddon(id) {
        return trackPromise(axios.get(`/${HOSPITAL_ADDON_SERVICES_NAMESPACE}/${id}`));
    },
    createAddon(data) {
        return trackPromise(axios.post(`/${HOSPITAL_ADDON_SERVICES_NAMESPACE}`, data));
    }
}

export default AddonsApi;