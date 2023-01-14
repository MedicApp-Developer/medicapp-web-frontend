import { GET_APPOINTMENTS, ADD_APPOINTMENTS } from "../types/appointments";

const initialState = {
    appointments: []
}

export const appointmentReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_APPOINTMENTS: 
            return { 
                ...state,
                appointments: action.payload
            };
        case ADD_APPOINTMENTS: 
            return {
                ...state,
                appointments: [...state.appointments, action.payload]
            }
        default: 
            return state;
    }
};