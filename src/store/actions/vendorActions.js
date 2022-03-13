import { toast } from "react-toastify";
import VendorsApi from "../../api/Vendor";
import { ADD_VENDOR, DELETE_VENDOR, GET_VENDORS, UPDATE_VENDOR } from "../types/vendorTypes";

export const getVendors = () => async (dispatch, getState) => {
	try {
		const response = await VendorsApi.getAllVendors();

		dispatch({
			type: GET_VENDORS,
			payload: response.data.data
		})
		return response;
	} catch (err) {
		toast.error("Problem while getting vendors");
	}
}

export const deleteVendor = (id) => async (dispatch, getState) => {
	try {
		await VendorsApi.deleteVendor(id);

		dispatch({
			type: DELETE_VENDOR,
			payload: id
		});
		toast.success("Vendor deleted successfully");
	} catch (err) {
		toast.error(err.response.data.message);
	}
}

export const createVendor = (data) => async (dispatch, getState) => {
	try {
		const response = await VendorsApi.createVendor(data);

		dispatch({
			type: ADD_VENDOR,
			payload: response.data.data
		})
		toast.success("Vendor created successfully");
	} catch (err) {
		toast.error(err.response.data.message);
	}
}

export const updateVendor = (id, data) => async (dispatch, getState) => {
	try {
		await VendorsApi.updateVendor(id, data);
		dispatch({
			type: UPDATE_VENDOR,
			payload: {
				data,
				id
			}
		})
		toast.success("Vendor update successfully");
	} catch (err) {
		toast.error(err.response.data.message);
	}
}