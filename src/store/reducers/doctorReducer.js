import { ADD_DOCTOR, CLEAR_SEARCH_RESULTS, DELETE_DOCTOR, GET_DOCTORS, SEARCH_DOCTOR, SELECT_DOCTOR, SET_PAGE_NUMBER } from "../types/doctorTypes";

const initialState = {
    doctors: [],
    numberOfPages: 0,
    pageNumber: 0,
    searchedText: "",
    searchedDoctors: [],
    selectedDoctor: {}
}

export const doctorReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DOCTORS: 
            return { 
                ...state,
                doctors: action.payload.doctors,
                numberOfPages: action.payload.totalPages 
            };
        case ADD_DOCTOR: 
            return {
                ...state, 
                doctors: [...state.doctors, action.payload]
            }
        case DELETE_DOCTOR: {
            return {
                ...state, 
                doctors: state.doctors.filter(doc => doc._id !== action.payload)
            }
        }
        case SEARCH_DOCTOR: {
            return {
                ...state,
                searchedDoctors: action.payload.doctors,
                doctors: [],
                numberOfPages: action.payload.totalPages || state.numberOfPages,
                searchedText: action.payload.searchedText 
            }
        }
        case SET_PAGE_NUMBER: {
            return {
                ...state,
                pageNumber: action.payload
            }
        }
        case SELECT_DOCTOR: {
            return {
                ...state,
                selectedDoctor: action.payload
            }
        }
        case CLEAR_SEARCH_RESULTS: {
            return {
                ...state, 
                searchedDoctors: [],
                searchedText: "",
                pageNumber: 0
            }
        }
        default: 
            return state;
    }
};