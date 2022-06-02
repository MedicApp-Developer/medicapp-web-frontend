import { GET_APPOINTMENTS } from "../types/appointments";

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
        default: 
            return state;
    }
};