import { ADD_PACKAGE, DELETE_PACKAGE, GET_PACKAGES, UPDATE_PACKAGE } from "../types/packageTypes";

const initialState = {
	packages: []
}

export const packagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PACKAGES:
			return {
				...state,
				packages: action.payload,
			};
		case DELETE_PACKAGE: {
			return {
				...state,
				packages: state.packages.filter(add => add._id !== action.payload)
			}
		}
		case UPDATE_PACKAGE: {
			return {
				...state,
				packages: state.packages.map(
					(pac, i) => pac._id === action.payload.id ? { ...pac, ...action.payload.data }
						: pac
				)
			}
		}
		case ADD_PACKAGE:
			return {
				...state,
				packages: [...state.packages, action.payload]
			}
		default:
			return state;
	}
};