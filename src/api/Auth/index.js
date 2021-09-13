import axios from '../../axios';
import { HOSPITAL_NAMESPACE, USERS_NAMESPACE } from '../../constants/namespaces';

const AuthApi = {
    login(credentials) {
        return axios.post(`/${USERS_NAMESPACE}/login`, credentials)
    },
    registerHospital(formData) {
        return axios.post(`/${HOSPITAL_NAMESPACE}`, formData);
    }
}

export default AuthApi;