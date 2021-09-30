import { ADD_PATIENT_BY_NURSE, CLEAR_SEARCH_RESULTS, DELETE_PATIENT, GET_PATIENTS, SELECT_PATIENT, SET_PAGE_NUMBER, UPDATE_VITALS } from "../types/patientTypes";

const initialState = {
    patients: [],
    numberOfPages: 0,
    pageNumber: 0,
    searchedText: "",
    searchedPatients: [],
    selectedPatient: {}
}

export const patientReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PATIENTS: 
            return { 
                ...state,
                patients: action.payload.patients,
                numberOfPages: action.payload.totalPages 
            };
        case DELETE_PATIENT: {
            return {
                ...state, 
                patients: state.patients.filter(pat => pat._id !== action.payload)
            }
        }
        case ADD_PATIENT_BY_NURSE: {
            return {
                ...state, 
                patients: [...state.patients, action.payload]
            }
        }
        case UPDATE_VITALS: {
            return {
                ...state,
                patients: state.patients.map((patient) => patient._id === action.payload.id ? {...patient, ...action.payload.data} : patient ),
                selectedPatient: {...state.selectedPatient, ...action.payload.data}
            }
        }
        case SELECT_PATIENT: {
            return {
                ...state,
                selectedPatient: action.payload
            }
        }
        case SET_PAGE_NUMBER: {
            return {
                ...state,
                pageNumber: action.payload
            }
        }
        case CLEAR_SEARCH_RESULTS: {
            return {
                ...state, 
                searchedPatients: [],
                searchedText: "",
                pageNumber: 0
            }
        }
        default: 
            return state;
    }
};