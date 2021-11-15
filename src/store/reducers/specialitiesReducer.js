import { ADD_SPECIALITY, DELETE_SPECIALITY, GET_SPECIALITIES } from "../types/specialityTypes";

const initialState = {
    specialities: []
}

export const specialitiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SPECIALITIES: 
            return { 
                ...state,
                specialities: action.payload,
            };
        case DELETE_SPECIALITY: {
            return {
                ...state, 
                specialities: state.specialities.filter(spec => spec._id !== action.payload)
            }
        }
        case ADD_SPECIALITY: 
            return {
                ...state, 
                specialities: [...state.specialities, action.payload]
            }
        default: 
            return state;
    }
};