import { toast } from "react-toastify";
import NurseApi from "../../api/Nurse"
import { ADD_NURSE, CLEAR_NURSE_SEARCH_RESULTS, DELETE_NURSE, GET_NURSES, SEARCH_NURSE, SET_NURSE_PAGE_NUMBER } from "../types/nurseTypes";

export const getNurses = (pageNo) => async (dispatch, getState) => {
    try {
        const response = await NurseApi.getAllNurses(pageNo);

        dispatch({
            type: GET_NURSES,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting nurses");
    }
}

export const addNurse = (data) => async (dispatch, getState) => {
    try {
        const response = await NurseApi.createNurse(data);

        dispatch({
            type: ADD_NURSE,
            payload: response.data.data
        });
        toast.success("Nurse Created Successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const deleteNurse = (id) => async (dispatch, getState) => {
    try {
        await NurseApi.deleteNurse(id);

        dispatch({
            type: DELETE_NURSE,
            payload: id
        });
        toast.success("Nurse deleted successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const searchNurse = (pageNo, searchedText) => async (dispatch, getState) => {
    try {
        const response = await NurseApi.searchNurses(pageNo, searchedText);
        if(response?.data?.data?.nurses?.length === 0){
            toast.error("No nurses found against this search");
        }
        dispatch({
            type: SEARCH_NURSE,
            payload: response.data.data
        });
        
        return response;
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const setPageNumber = (pageNo) => ({
    type: SET_NURSE_PAGE_NUMBER,
    payload: pageNo
})

export const clearSearchResults = () => ({
    type: CLEAR_NURSE_SEARCH_RESULTS
})