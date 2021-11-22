import { GET_SEARCHED_HOSPITALS } from "../../types/patient/searchedHospitalTypes";

const initialState = {
    searchedHospitals: []
}

export const searchedHospitalsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SEARCHED_HOSPITALS: 
            return { 
                ...state,
                searchedHospitals: action.payload,
            };
        default: 
            return state;
    }
};