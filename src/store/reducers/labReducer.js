import { ADD_LAB, CLEAR_SEARCH_RESULTS, DELETE_LAB, GET_LABS, SEARCH_LAB, SET_PAGE_NUMBER } from "../types/labTypes";

const initialState = {
    labs: [],
    numberOfPages: 0,
    pageNumber: 0,
    searchedText: "",
    searchedLabs: []
}

export const labReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LABS: 
            return { 
                ...state,
                labs: action.payload.labs || [],
                numberOfPages: action.payload.totalPages
            };
        case ADD_LAB: 
            return {
                ...state, 
                labs: [...state.labs, action.payload]
            }
        case DELETE_LAB: {
            return {
                ...state, 
                labs: state.labs.filter(lab => lab._id !== action.payload)
            }
        }
        case SEARCH_LAB: {
            return {
                ...state,
                searchedLabs: action.payload.labs,
                labs: [],
                numberOfPages: action.payload.totalPages || state.numberOfPages,
                searchedText: action.payload.searchedText 
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
                searchedLabs: [],
                searchedText: "",
                pageNumber: 0
            }
        }
        default: 
            return state;
    }
};