import { toast } from "react-toastify";
import PackagesApi from "../../api/Packages";
import { ADD_PACKAGE, DELETE_PACKAGE, GET_PACKAGES, UPDATE_PACKAGE } from "../types/packageTypes";

export const getPackages = (id) => async (dispatch, getState) => {
	try {
		const response = await PackagesApi.getVendorPackages(id);

		dispatch({
			type: GET_PACKAGES,
			payload: response.data.data
		})
		return response;
	} catch (err) {
		toast.error("Problem while getting packages");
	}
}

export const deletePackage = (id) => async (dispatch, getState) => {
	try {
		await PackagesApi.deletePackage(id);

		dispatch({
			type: DELETE_PACKAGE,
			payload: id
		});
		toast.success("Package deleted successfully");
	} catch (err) {
		toast.error(err.response.data.message);
	}
}

export const createPackage = (data) => async (dispatch, getState) => {
	try {
		const response = await PackagesApi.createPackage(data);

		dispatch({
			type: ADD_PACKAGE,
			payload: response.data.data
		})
		toast.success("Package created successfully");
	} catch (err) {
		toast.error(err.response.data.message);
	}
}

export const updatePackage = (id, data) => async (dispatch, getState) => {
	try {
		const response = await PackagesApi.updatePackage(id, data);
		dispatch({
			type: UPDATE_PACKAGE,
			payload: {
				data: response.data.data,
				id
			}
		})
		toast.success("Package update successfully");
	} catch (err) {
		toast.error(err.response.data.message);
	}
}