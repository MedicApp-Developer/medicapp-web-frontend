import { DELETE_COMPLETED_REQUEST, GET_LAB_COMPLETED_REQUESTS, SET_PAGE_NUMBER } from "../types/completedLabRequests";

const initialState = {
    completedlabRequests: [],
    numberOfPages: 0,
    pageNumber: 0
}

export const completedLabRequestReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LAB_COMPLETED_REQUESTS: 
            return { 
                ...state,
                completedlabRequests: action.payload.labResults,
                numberOfPages: action.payload.totalPages 
            };
        case DELETE_COMPLETED_REQUEST: {
            return {
                ...state, 
                completedlabRequests: state.completedlabRequests.filter(req => req._id !== action.payload)
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