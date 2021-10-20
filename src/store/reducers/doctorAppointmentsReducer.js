import { GET_APPOINTMENTS, DELETE_APPOINTMENT, SET_PAGE_NUMBER } from "../types/doctorAppointments";

const initialState = {
    appointments: [],
    numberOfPages: 0,
    pageNumber: 0
}

export const doctorAppointmentReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_APPOINTMENTS: 
            return { 
                ...state,
                appointments: action.payload.appointments,
                numberOfPages: action.payload.totalPages 
            };
        case DELETE_APPOINTMENT: {
            return {
                ...state, 
                appointments: state.appointments.filter(appo => appo._id !== action.payload)
            }
        }
        case SET_PAGE_NUMBER: {
            return {
                ...state,
                pageNumber: action.payload
            }
        }
        default: 
            return state;
    }
};