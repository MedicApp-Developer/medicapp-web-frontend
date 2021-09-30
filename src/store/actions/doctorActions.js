import { toast } from "react-toastify";
import DoctorApi from "../../api/Doctors"
import { ADD_DOCTOR, CLEAR_SEARCH_RESULTS, DELETE_DOCTOR, GET_DOCTORS, SEARCH_DOCTOR, SELECT_DOCTOR, SET_PAGE_NUMBER } from "../types/doctorTypes"

export const getDoctors = (pageNo) => async (dispatch, getState) => {
    try {
        const response = await DoctorApi.getAllDoctors(pageNo);

        dispatch({
            type: GET_DOCTORS,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting doctors");
    }
}

export const addDoctor = (data) => async (dispatch, getState) => {
    try {
        const response = await DoctorApi.createDoctor(data);

        dispatch({
            type: ADD_DOCTOR,
            payload: response.data.data
        });
        toast.success("Doctor Created Successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const deleteDoctor = (id) => async (dispatch, getState) => {
    try {
        await DoctorApi.deleteDoctor(id);

        dispatch({
            type: DELETE_DOCTOR,
            payload: id
        });
        toast.success("Doctor deleted successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const searchDoctor = (pageNo, searchedText) => async (dispatch, getState) => {
    try {
        const response = await DoctorApi.searchDoctors(pageNo, searchedText);
        if(response?.data?.data?.doctors?.length === 0){
            toast.error("No doctors found against this search");
        }
        dispatch({
            type: SEARCH_DOCTOR,
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

export const selectDoctor = (id) => async (dispatch, getState) => {
    try {
        const response = await DoctorApi.getSingleDoctor(id);

        dispatch({
            type: SELECT_DOCTOR,
            payload: response.data.data
        });
    }catch(err) {
        toast.error(err.response.data.message);
    }
}