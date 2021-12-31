import { toast } from "react-toastify";
import AppointmentApi from "../../api/Appointment"
import { GET_LAB_REQUESTS, DELETE_REQUEST , SET_DOCTOR_PENDING_LAB_REQUESTS_PAGE_NUMBER } from "../types/pendingLabRequests"

export const getPendingLabRequests = (doctorId, pageNo) => async (dispatch, getState) => {
    try {
        const response = await AppointmentApi.getLabRequests(doctorId, pageNo, "pending");

        dispatch({
            type: GET_LAB_REQUESTS,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting requests");
    }
}

export const deletePendingRequest = (id) => async (dispatch, getState) => {
    try {
        await AppointmentApi.deleteAppointment(id);

        dispatch({
            type: DELETE_REQUEST,
            payload: id
        });
        toast.success("Lab request deleted successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const setPageNumber = (pageNo) => ({
    type: SET_DOCTOR_PENDING_LAB_REQUESTS_PAGE_NUMBER,
    payload: pageNo
})
