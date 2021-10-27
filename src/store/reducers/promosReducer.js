import { CREATE_PROMO, DELETE_PROMO, GET_PROMOS, SET_PAGE_NUMBER } from "../types/promos";

const initialState = {
    promos: [],
    numberOfPages: 0,
    pageNumber: 0
}

export const promoReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROMOS: 
            return { 
                ...state,
                promos: action.payload.videos,
                numberOfPages: action.payload.totalPages 
            };
        case DELETE_PROMO: {
            return {
                ...state, 
                promos: state.promos.filter(promo => promo._id !== action.payload)
            }
        }
        case SET_PAGE_NUMBER: {
            return {
                ...state,
                pageNumber: action.payload
            }
        }
        case CREATE_PROMO: {
            return {
                ...state, 
                promos: [...state.promos, action.payload]
            }
        }
        default: 
            return state;
    }
};