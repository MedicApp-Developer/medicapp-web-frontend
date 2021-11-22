import { toast } from "react-toastify";
import DoctorApi from "../../../api/Doctors";
import { GET_SEARCHED_DOCTORS, CLEAR_DOCTORS_SEARCHED } from "../../types/patient/searchedDoctorTypes";

export const searchDoctors = (specialityId) => async (dispatch, getState) => {
    try {
        const response = await DoctorApi.searchDoctorBySpeciality(specialityId);

        dispatch({
            type: GET_SEARCHED_DOCTORS,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting doctors");
    }
}

export const searchDoctorsByText = (text) => async (dispatch, getState) => {
    try {
        const response = await DoctorApi.searchDoctorByText(text);

        dispatch({
            type: GET_SEARCHED_DOCTORS,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting doctors");
    }
}

export const clearDoctorSearch = () => ({
    type: CLEAR_DOCTORS_SEARCHED
})

