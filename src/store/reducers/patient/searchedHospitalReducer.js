import { ADDONS_FILTER, CATEGORIES_FILTER, CLEAR_FILTERS_ONLY, CLEAR_HOSPITALS_SEARCHED, GET_SEARCHED_HOSPITALS, HOSPITAL_TYPES_FILTER } from "../../types/patient/searchedHospitalTypes";

const initialState = {
    searchedHospitals: [],
    filters: {
        checkedCategories: [],
        hospitalTypes: [],
        checkedAddons: []
    }
}

export const searchedHospitalsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SEARCHED_HOSPITALS: 
            return { 
                ...state,
                searchedHospitals: action.payload,
            };
        case HOSPITAL_TYPES_FILTER: 
            return {
                ...state,
                filters: {
                    ...state.filters, 
                    hospitalTypes: action.payload
                }
            }
        case CATEGORIES_FILTER: 
            return {
                ...state,
                filters: {
                    ...state.filters, 
                    checkedCategories: action.payload
                }
            }
        case ADDONS_FILTER: 
            return {
                ...state,
                filters: {
                    ...state.filters, 
                    checkedAddons: action.payload
                }
            }
        case CLEAR_HOSPITALS_SEARCHED: 
            return {
                ...state,
                searchedHospitals: action.payload,
                filters: {
                    checkedCategories: [],
                    hospitalTypes: [],
                    checkedAddons: []
                }
            }
        case CLEAR_FILTERS_ONLY: 
            return {
                ...state,
                filters: {
                    checkedCategories: [],
                    hospitalTypes: [],
                    checkedAddons: []
                }
            }
        default: 
            return state;
    }
};