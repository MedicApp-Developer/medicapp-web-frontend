import { toast } from "react-toastify";
import CategoriesApi from "../../api/Categories";
import { ADD_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES } from "../types/categoryTypes";

export const getCategories = () => async (dispatch, getState) => {
    try {
        const response = await CategoriesApi.getAllCategories();

        dispatch({
            type: GET_CATEGORIES,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting categories");
    }
}

export const deleteCategory = (id) => async (dispatch, getState) => {
    try {
        await CategoriesApi.deleteCategory(id);

        dispatch({
            type: DELETE_CATEGORY,
            payload: id
        });
        toast.success("Category deleted successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const createCategory = (data) => async (dispatch, getState) => {
    try {
        await CategoriesApi.createCategory(data);
        dispatch({
            type: ADD_CATEGORY,
            payload: data
        })
        toast.success("Category created successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}
