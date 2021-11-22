import { CLEAR_DOCTORS_SEARCHED, GET_SEARCHED_DOCTORS } from "../../types/patient/searchedDoctorTypes";

const initialState = {
    searchedDoctors: []
}

export const searchedDoctorsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SEARCHED_DOCTORS: 
            return { 
                ...state,
                searchedDoctors: action.payload,
            };
        case CLEAR_DOCTORS_SEARCHED: 
            return {
                ...state,
                searchedDoctors: []
            }
        default: 
            return state;
    }
};