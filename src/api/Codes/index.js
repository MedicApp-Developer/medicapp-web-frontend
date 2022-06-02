import axios from '../../axios';
import { CODES_NAMESPACE } from '../../constants/namespaces';
import { trackPromise } from 'react-promise-tracker';

const CodesApi = {
	getAllHospitalCodes(hospitalId) {
		return trackPromise(axios.get(`/${CODES_NAMESPACE}/getHospitalCodes/${hospitalId}`));
	},
	verifyCode(data) {
		return trackPromise(axios.post(`/${CODES_NAMESPACE}/verifyCode`, data));
	},
}

export default CodesApi;