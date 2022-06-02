import { toast } from "react-toastify";
import AppointmentApi from "../../api/Appointment";
import PatientApi from "../../api/Patients";
import { DEACTIVATE_ACCOUNT, ADD_PATIENT_BY_NURSE, DELETE_FAMILY_MEMBER, ADD_FAMILY_MEMBER, CLEAR_SEARCH_RESULTS, DELETE_PATIENT, GET_PATIENT, GET_PATIENTS, SELECT_PATIENT, SET_PATIENT_PAGE_NUMBER, DELETE_APPOINTMENT } from "../types/patientTypes";

export const getPatients = (pageNo) => async (dispatch, getState) => {
    try {
        const response = await PatientApi.getAllPatients(pageNo);

        dispatch({
            type: GET_PATIENTS,
            payload: response.data.data
        })
        return response;
    } catch (err) {
        toast.error("Problem while getting patients");
    }
}

export const deactivePatient = (id) => async (dispatch, getState) => {
    try {
        const response = await PatientApi.deactivePatient(id);
        
        dispatch({
            type: DEACTIVATE_ACCOUNT, 
            payload: response.data.data
        })

        return response.data.data;
    } catch (err) {
        toast.error("Problem while getting patients");
    }
}

export const deletePatientAppointment = (appointmentId, patientId) => async (dispatch, getState) => {
    try {
        const response = await AppointmentApi.deletePatientAppointment(appointmentId, patientId);

        dispatch({
            type: DELETE_APPOINTMENT,
            payload: response.data.data.upcommingAppointments
        })
        return response;
    } catch (err) {
        toast.error("Problem while deleting appointment");
    }
}

export const deleteFamilyMember = (memberId) => async (dispatch, getState) => {
    try {
        const response = await PatientApi.deleteFamilyMember(memberId);

        toast.success("Family Member Deleted Successfully")

        dispatch({
            type: DELETE_FAMILY_MEMBER,
            payload: memberId
        })
        return response;
    } catch (err) {
        toast.error("Problem while deleting family member");
    }
}

export const addFamilyMember = (data) => async (dispatch, getState) => {
    try {
        const response = await PatientApi.createFamilyMembers(data);

        toast.success("Family Member Added Successfully")

        dispatch({
            type: ADD_FAMILY_MEMBER,
            payload: response.data.data
        })
        return response;
    } catch (err) {
        toast.error("Problem while adding family member");
    }
}

export const getPatientAccountInfo = (patientId) => async (dispatch, getState) => {
    try {
        const response = await PatientApi.getPatientAccountInfo(patientId);

        dispatch({
            type: GET_PATIENT,
            payload: response.data.data
        })
        return response;
    } catch (err) {
        toast.error("Problem while getting patients");
    }
}

export const deletePatient = (id) => async (dispatch, getState) => {
    try {
        await PatientApi.deletePatient(id);

        dispatch({
            type: DELETE_PATIENT,
            payload: id
        });
        toast.success("Patient deleted successfully");
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

export const addPatientByNurse = (data) => async (dispatch, getState) => {
    try {
        const patient = await PatientApi.createPatientFromNurse(data);

        dispatch({
            type: ADD_PATIENT_BY_NURSE,
            payload: patient?.data?.data
        });
        toast.success("Patient created successfully");
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

export const updatePatientVitals = (id, data) => async (dispatch, getState) => {
    try {
        await PatientApi.updatePatient(id, data);

        dispatch({
            type: ADD_PATIENT_BY_NURSE,
            payload: {
                id,
                data
            }
        });
        toast.success("Patient created successfully");
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

export const selectPatient = (id) => async (dispatch, getState) => {
    try {
        const response = await PatientApi.getSinglePatient(id);

        dispatch({
            type: SELECT_PATIENT,
            payload: response.data.data
        });
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

export const setPageNumber = (pageNo) => ({
    type: SET_PATIENT_PAGE_NUMBER,
    payload: pageNo
})

export const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS
})

// Simple Action Creator
// const getDoctor = () => ({
//     type: GET_DOCTORS,
//     payload: "Some Payload"
// })
