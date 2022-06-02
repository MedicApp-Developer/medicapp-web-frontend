import axios from '../../axios';
import { REWARD_NAMESPACE } from '../../constants/namespaces';
import { trackPromise } from 'react-promise-tracker';

const RewardsApi = {
	getPatientRewards(patientId) {
		return trackPromise(axios.get(`/${REWARD_NAMESPACE}/${patientId}`));
	},
	subscribePackage(data) {
		return trackPromise(axios.post(`/${REWARD_NAMESPACE}`, data));
	},
	unsubscribePackage(id) {
		return trackPromise(axios.delete(`/${REWARD_NAMESPACE}/${id}`));
	},
	approvePackage(id) {
		return trackPromise(axios.put(`/${REWARD_NAMESPACE}/${id}`));
	}
}

export default RewardsApi;