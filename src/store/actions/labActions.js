import { toast } from "react-toastify";
import LaboratoryApi from "../../api/Laboratory";
import { ADD_LAB, CLEAR_SEARCH_RESULTS, DELETE_LAB, GET_LABS, SEARCH_LAB, SET_PAGE_NUMBER } from "../types/labTypes"

export const getLabs = (pageNo, hospitalId) => async (dispatch, getState) => {
    try {
        const response = await LaboratoryApi.getAllLaboratories(pageNo, false, hospitalId);

        dispatch({
            type: GET_LABS,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting Laboratories");
    }
}

export const addLab = (data) => async (dispatch, getState) => {
    try {
        const response = await LaboratoryApi.createLaboratory(data);
        dispatch({
            type: ADD_LAB,
            payload: response.data.data
        });
        toast.success("Laboratory Created Successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const deleteLab = (id) => async (dispatch, getState) => {
    try {
        await LaboratoryApi.deleteLab(id);

        dispatch({
            type: DELETE_LAB,
            payload: id
        });
        toast.success("Laboratory deleted successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const searchLab = (pageNo, searchedText) => async (dispatch, getState) => {
    try {
        const response = await LaboratoryApi.searchLabs(pageNo, searchedText);
        if(response?.data?.data?.labs?.length === 0){
            toast.error("No doctors found against this search");
        }
        dispatch({
            type: SEARCH_LAB,
            payload: response.data.data
        });
        
        return response;
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const setPageNumber = (pageNo) => ({
    type: SET_PAGE_NUMBER,
    payload: pageNo
})

export const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS
})