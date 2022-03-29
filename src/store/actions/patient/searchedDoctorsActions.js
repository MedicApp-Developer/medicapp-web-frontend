import { toast } from "react-toastify";
import DoctorApi from "../../../api/Doctors";
import { GET_SEARCHED_DOCTORS, CLEAR_DOCTORS_SEARCHED, SPECIALITIES_FILTER, LANGUAGE_FILTER, NATIONALITIES_FILTER, GENDERS_FILTER, HOSPITAL_TYPES_FILTER, CLEAR_FILTERS_ONLY } from "../../types/patient/searchedDoctorTypes";

export const filterDoctors = (filters) => async (dispatch, getState) => {
    try {
        const response = await DoctorApi.filterDoctors(filters);

        dispatch({
            type: GET_SEARCHED_DOCTORS,
            payload: response.data.data
        })
        return response;
    } catch (err) {
        toast.error("Problem while getting doctors");
    }
}

export const searchDoctorsByText = (text) => async (dispatch, getState) => {
    try {
        const response = await DoctorApi.searchDoctorByText(text);

        dispatch({
            type: CLEAR_DOCTORS_SEARCHED,
            payload: response.data.data
        })
        return response;
    } catch (err) {
        toast.error("Problem while getting doctors");
    }
}

export const clearDoctorSearch = () => async (dispatch, getState) => {
    try {
        const response = await DoctorApi.getAllPatientDoctors();

        dispatch({
            type: CLEAR_DOCTORS_SEARCHED,
            payload: response.data.data.doctors
        })
        return response;
    } catch (err) {
        toast.error("Problem while getting doctors");
    }
}

export const specialityFilter = (filters) => ({
    type: SPECIALITIES_FILTER,
    payload: filters
})

export const languageFilter = (filters) => ({
    type: LANGUAGE_FILTER,
    payload: filters
})

export const nationalityFilter = (filters) => ({
    type: NATIONALITIES_FILTER,
    payload: filters
})

export const genderFilter = (filters) => ({
    type: GENDERS_FILTER,
    payload: filters
})

export const hospitalTypesFilter = (filters) => ({
    type: HOSPITAL_TYPES_FILTER,
    payload: filters
})

export const clearDoctorsFiltersOnly = () => ({
    type: CLEAR_FILTERS_ONLY
})
