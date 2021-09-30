import { toast } from "react-toastify";
import PatientApi from "../../api/Patients";
import { ADD_PATIENT_BY_NURSE, CLEAR_SEARCH_RESULTS, DELETE_PATIENT, GET_PATIENTS, SELECT_PATIENT, SET_PAGE_NUMBER } from "../types/patientTypes";

export const getPatients = (pageNo) => async (dispatch, getState) => {
    try {
        const response = await PatientApi.getAllPatients(pageNo);

        dispatch({
            type: GET_PATIENTS,
            payload: response.data.data
        })
        return response;
    }catch(err) {
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
    }catch(err) {
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
    }catch(err) {
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
    }catch(err) {
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

// Simple Action Creator
// const getDoctor = () => ({
//     type: GET_DOCTORS,
//     payload: "Some Payload"
// })
