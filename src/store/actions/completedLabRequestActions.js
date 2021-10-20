import { toast } from "react-toastify";
import AppointmentApi from "../../api/Appointment"
import { GET_LAB_COMPLETED_REQUESTS, DELETE_COMPLETED_REQUEST , SET_PAGE_NUMBER } from "../types/completedLabRequests"

export const getCompletedLabRequests = (doctorId, pageNo) => async (dispatch, getState) => {
    try {
        const response = await AppointmentApi.getLabRequests(doctorId, pageNo, "completed");

        dispatch({
            type: GET_LAB_COMPLETED_REQUESTS,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting requests");
    }
}

export const deleteCompletedRequest = (id) => async (dispatch, getState) => {
    try {
        await AppointmentApi.deleteAppointment(id);

        dispatch({
            type: DELETE_COMPLETED_REQUEST,
            payload: id
        });
        toast.success("Lab request deleted successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const setPageNumber = (pageNo) => ({
    type: SET_PAGE_NUMBER,
    payload: pageNo
})
