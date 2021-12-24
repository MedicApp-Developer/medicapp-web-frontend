import axios from '../../axios';
import { SLOT_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const SlotApi = {
    createSlot(data) {
        return trackPromise(axios.post(`${SLOT_NAMESPACE}`, data));
    },
    getAllDoctorsSlots(doctorId) {
        return trackPromise(axios.post(`${SLOT_NAMESPACE}/all/doctor/${doctorId}`))
    }
}

export default SlotApi;