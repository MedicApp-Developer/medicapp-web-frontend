import axios from '../../axios';
import { PACKAGE_NAMESPACE, REWARD_NAMESPACE } from '../../constants/namespaces';
import { trackPromise } from 'react-promise-tracker';

const PackagesApi = {
	getAllPackages() {
		return trackPromise(axios.get(`/${REWARD_NAMESPACE}`));
	},
	deletePackage(id) {
		return trackPromise(axios.delete(`${PACKAGE_NAMESPACE}/${id}`));
	},
	getSinglePackage(id) {
		return trackPromise(axios.get(`/${PACKAGE_NAMESPACE}/${id}`));
	},
	createPackage(data) {
		return trackPromise(axios.post(`/${PACKAGE_NAMESPACE}`, data));
	},
	updatePackage(id, data) {
		return trackPromise(axios.put(`/${PACKAGE_NAMESPACE}/${id}`, data));
	},
	getVendorPackages(id) {
		return trackPromise(axios.get(`/${PACKAGE_NAMESPACE}/vendor/${id}`));
	}
}

export default PackagesApi;