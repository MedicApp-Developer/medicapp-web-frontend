import { toast } from "react-toastify";
import SpecialityApi from "../../api/Specialities";
import { ADD_SPECIALITY, DELETE_SPECIALITY, GET_SPECIALITIES } from "../types/specialityTypes";

export const getSpecialities = () => async (dispatch, getState) => {
    try {
        const response = await SpecialityApi.getAllSpecialities();

        dispatch({
            type: GET_SPECIALITIES,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting specialities");
    }
}

export const deleteSpeciality = (id) => async (dispatch, getState) => {
    try {
        await SpecialityApi.deleteSpeciality(id);

        dispatch({
            type: DELETE_SPECIALITY,
            payload: id
        });
        toast.success("Speciality deleted successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const createSpeciality = (data) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_SPECIALITIES,
            payload: data
        })
        toast.success("Speciality created successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}
