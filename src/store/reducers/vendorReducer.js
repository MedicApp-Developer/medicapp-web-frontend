import { ADD_VENDOR, DELETE_VENDOR, GET_VENDORS, UPDATE_VENDOR } from "../types/vendorTypes";

const initialState = {
	vendors: []
}

export const vendorsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_VENDORS:
			return {
				...state,
				vendors: action.payload,
			};
		case DELETE_VENDOR: {
			return {
				...state,
				vendors: state.vendors.filter(add => add._id !== action.payload)
			}
		}
		case UPDATE_VENDOR: {
			return {
				...state,
				vendors: state.vendors.map(
					(vendor, i) => vendor._id === action.payload.id ? { ...vendor, ...action.payload.data }
						: vendor
				)
			}
		}
		case ADD_VENDOR:
			return {
				...state,
				vendors: [...state.vendors, action.payload]
			}
		default:
			return state;
	}
};