import { ADD_SPECIALITY, DELETE_SPECIALITY, GET_SPECIALITIES, GET_PAGINATED_SPECIALITIES, SET_PAGE_NUMBER } from "../types/specialityTypes";

const initialState = {
    specialities: [],
    paginatedSpecialities: [],
    numberOfPages: 0,
    pageNumber: 0
}

export const specialitiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SPECIALITIES: 
            return { 
                ...state,
                specialities: action.payload,
            };
        case GET_PAGINATED_SPECIALITIES: 
            return { 
                ...state,
                paginatedSpecialities: action.payload.specialities,
                numberOfPages: action.payload.totalPages 
            };
        case SET_PAGE_NUMBER: {
            return {
                ...state,
                pageNumber: action.payload
            }
        }
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