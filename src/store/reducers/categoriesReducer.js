import { ADD_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES } from "../types/categoryTypes";

const initialState = {
    categories: []
}

export const categoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CATEGORIES: 
            return { 
                ...state,
                categories: action.payload,
            };
        case DELETE_CATEGORY: {
            return {
                ...state, 
                categories: state.categories.filter(cate => cate._id !== action.payload)
            }
        }
        case ADD_CATEGORY: 
            return {
                ...state, 
                categories: [...state.categories, action.payload]
            }
        default: 
            return state;
    }
};