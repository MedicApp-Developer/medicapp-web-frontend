import axios from '../../axios';
import { REWARD_NAMESPACE, VENDOR_NAMESPACE, PACKAGE_TYPE_NAMESPACE } from '../../constants/namespaces';
import { trackPromise } from 'react-promise-tracker';

const VendorApi = {
	getAllVendors() {
		return trackPromise(axios.get(`/${VENDOR_NAMESPACE}`));
	},
	deleteVendor(id) {
		return trackPromise(axios.delete(`${VENDOR_NAMESPACE}/${id}`));
	},
	getSingleVendor(id) {
		return trackPromise(axios.get(`/${VENDOR_NAMESPACE}/${id}`));
	},
	createVendor(data) {
		return trackPromise(axios.post(`/${VENDOR_NAMESPACE}`, data));
	},
	updateVendor(id, data) {
		return trackPromise(axios.put(`/${VENDOR_NAMESPACE}/${id}`, data));
	},
	getVendorPackage(id) {
		return trackPromise(axios.get(`/${REWARD_NAMESPACE}/vendor/${id}`));
	},
	uploadVendorImage(id, data) {
		return trackPromise(axios.put(`${VENDOR_NAMESPACE}/uploadImage/${id}`, data));
	},
	createPackageCategory(data) {
		return trackPromise(axios.post(`/${PACKAGE_TYPE_NAMESPACE}`, data));
	},
	getAllPackageCategories() {
		return trackPromise(axios.get(`/${PACKAGE_TYPE_NAMESPACE}`));
	},
	updatePackageCategory(id, data) {
		return trackPromise(axios.put(`/${PACKAGE_TYPE_NAMESPACE}/${id}`, data));
	},
	deletePackageType(id) {
		return trackPromise(axios.delete(`/${PACKAGE_TYPE_NAMESPACE}/${id}`));
	},
}

export default VendorApi;