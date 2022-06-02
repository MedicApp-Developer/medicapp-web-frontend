import { CLEAR_DOCTORS_SEARCHED, GET_SEARCHED_DOCTORS, SPECIALITIES_FILTER, GENDERS_FILTER, NATIONALITIES_FILTER, LANGUAGE_FILTER, HOSPITAL_TYPES_FILTER, SEARCH_DOCTOR_BY_TEXT, CLEAR_FILTERS_ONLY } from "../../types/patient/searchedDoctorTypes";

const initialState = {
    searchedDoctors: [],
    filters: {
        checkedSpecialities: [],
        hospitalTypes: [],
        checkedLanguages: [],
        checkedNationalities: [],
        checkedGenders: []
    }
}

export const searchedDoctorsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SEARCHED_DOCTORS: 
            return { 
                ...state,
                searchedDoctors: action.payload,
            };
            break;
        case HOSPITAL_TYPES_FILTER: 
            return {
                ...state,
                filters: {
                    ...state.filters, 
                    hospitalTypes: action.payload
                }
            }
            break;
        case GENDERS_FILTER: 
            return {
                ...state,
                filters: {
                    ...state.filters, 
                    checkedGenders: action.payload
                }
            }
            break;
        case NATIONALITIES_FILTER: 
            return {
                ...state,
                filters: {
                    ...state.filters, 
                    checkedNationalities: action.payload
                }
            }
            break;
        case SPECIALITIES_FILTER: 
            return {
                ...state,
                filters: {
                    ...state.filters, 
                    checkedSpecialities: action.payload
                }
            }
            break;
        case LANGUAGE_FILTER: 
            return {
                ...state,
                filters: {
                    ...state.filters, 
                    checkedLanguages: action.payload
                }
            }
            break;
        case CLEAR_DOCTORS_SEARCHED: 
            return {
                ...state,
                searchedDoctors: action.payload,
                filters: {
                    checkedGenders: [],
                    checkedLanguages: [],
                    checkedNationalities: [],
                    checkedSpecialities: [],
                    hospitalTypes: []
                }
            }
            break;
        case CLEAR_FILTERS_ONLY: 
            return {
                ...state,
                filters: {
                    checkedGenders: [],
                    checkedLanguages: [],
                    checkedNationalities: [],
                    checkedSpecialities: [],
                    hospitalTypes: []
                }
            }
        default: 
            return state;
    }
};