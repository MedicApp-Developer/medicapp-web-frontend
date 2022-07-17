import { ADD_INSURANCE, DELETE_INSURANCE, GET_INSURANCES, GET_PAGINATED_INSURANCES, SET_PAGE_NUMBER } from "../types/insuranceTypes";

const initialState = {
    insurances: [],
    paginatedInsurances: [],
    numberOfPages: 0,
    pageNumber: 0
}

export const insurancesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INSURANCES:
            return {
                ...state,
                insurances: action.payload,
            };
        case GET_PAGINATED_INSURANCES:
            return {
                ...state,
                paginatedInsurances: action.payload.insurances,
                numberOfPages: action.payload.totalPages
            };
        case SET_PAGE_NUMBER: {
            return {
                ...state,
                pageNumber: action.payload
            }
        }
        case DELETE_INSURANCE: {
            return {
                ...state,
                insurances: state.insurances.filter(spec => spec._id !== action.payload)
            }
        }
        case ADD_INSURANCE:
            console.log("Payload", action.payload);
            return {
                ...state,
                insurances: [...state.insurances, action.payload]
            }
        default:
            return state;
    }
};