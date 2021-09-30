import { ADD_NURSE, CLEAR_NURSE_SEARCH_RESULTS, DELETE_NURSE, GET_NURSES, SEARCH_NURSE, SET_NURSE_PAGE_NUMBER } from "../types/nurseTypes";

const initialState = {
    nurses: [],
    numberOfPages: 0,
    pageNumber: 0,
    searchedText: "",
    searchedNurses: []
}

export const nurseReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_NURSES: 
            return { 
                ...state,
                nurses: action.payload.nurses, 
                numberOfPages: action.payload.totalPages 
            };
        case ADD_NURSE: 
            return {
                ...state, 
                nurses: [...state.nurses, action.payload]
            }
        case DELETE_NURSE: {
            return {
                ...state, 
                nurses: state.nurses.filter(nur => nur._id !== action.payload)
            }
        }
        case SEARCH_NURSE: {
            return {
                ...state,
                searchedNurses: action.payload.nurses,
                nurses: [],
                numberOfPages: action.payload.totalPages || state.numberOfPages,
                searchedText: action.payload.searchedText 
            }
        }
        case SET_NURSE_PAGE_NUMBER: {
            return {
                ...state,
                pageNumber: action.payload
            }
        }
        case CLEAR_NURSE_SEARCH_RESULTS: {
            return {
                ...state, 
                searchedNurses: [],
                searchedText: "",
                pageNumber: 0
            }
        }
        default: 
            return state;
    }
};