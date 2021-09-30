import axios from '../../axios';
import { HOSPITAL_NAMESPACE, USERS_NAMESPACE } from '../../constants/namespaces';
import { trackPromise} from 'react-promise-tracker';

const AuthApi = {
    login(credentials) {
        return trackPromise(axios.post(`/${USERS_NAMESPACE}/login`, credentials))
    },
    registerHospital(formData) {
        return trackPromise(axios.post(`/${HOSPITAL_NAMESPACE}`, formData));
    }
}

export default AuthApi;