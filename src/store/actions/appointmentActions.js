import { toast } from "react-toastify";
import AppointmentApi from "../../api/Appointment";
import { GET_APPOINTMENTS, ADD_APPOINTMENTS } from "../types/appointments";

export const getAppointments = (hospitalId) => async (dispatch, getState) => {
    try {
        const response = await AppointmentApi.getHospitalAppointment(hospitalId);
        dispatch({
            type: GET_APPOINTMENTS,
            payload: response.data.data
        })
        return response;
    } catch (err) {
        toast.error("Problem while getting appointments");
    }
}

export const addAppointment = (data) => async (dispatch, getState) => {
    dispatch({
        type: ADD_APPOINTMENTS,
        payload: data
    })
}