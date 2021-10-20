import { DELETE_REQUEST, GET_LAB_REQUESTS, SET_PAGE_NUMBER } from "../types/pendingLabRequests";

const initialState = {
    pendinglabRequests: [],
    numberOfPages: 0,
    pageNumber: 0
}

export const pendingLabRequestReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LAB_REQUESTS: 
            return { 
                ...state,
                pendinglabRequests: action.payload.labResults,
                numberOfPages: action.payload.totalPages 
            };
        case DELETE_REQUEST: {
            return {
                ...state, 
                pendinglabRequests: state.pendinglabRequests.filter(req => req._id !== action.payload)
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