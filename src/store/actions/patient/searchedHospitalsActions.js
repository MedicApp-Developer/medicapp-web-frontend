import { toast } from "react-toastify";
import HospitalApi from "../../../api/Hospital";
import { ADDONS_FILTER, CATEGORIES_FILTER, CLEAR_FILTERS_ONLY, CLEAR_HOSPITALS_SEARCHED, GET_SEARCHED_HOSPITALS, HOSPITAL_TYPES_FILTER } from "../../types/patient/searchedHospitalTypes";

export const filterHospitals = (filters) => async (dispatch, getState) => {
    try {
        const response = await HospitalApi.filterHospitals(filters);

        dispatch({
            type: GET_SEARCHED_HOSPITALS,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting hospitals");
    }
}

export const searchHospitalByText = (text) => async (dispatch, getState) => {
    try {
        const response = await HospitalApi.searchHospitalByText(text);

        dispatch({
            type: CLEAR_HOSPITALS_SEARCHED,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting hospitals");
    }
}

export const clearHospitalSearch = () => async (dispatch, getState) => {
    try {
        const response = await HospitalApi.getAllHospitals();

        dispatch({
            type: CLEAR_HOSPITALS_SEARCHED,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting hospitals");
    }
}

export const categoriesFilter = (filters) => ({
    type: CATEGORIES_FILTER,
    payload: filters
})

export const hospitalTypesFilter = (filters) => ({
    type: HOSPITAL_TYPES_FILTER,
    payload: filters
})

export const addonsFilter = (filters) => ({
    type: ADDONS_FILTER,
    payload: filters
})

export const clearHospitalsFiltersOnly = () => ({
    type: CLEAR_FILTERS_ONLY
})