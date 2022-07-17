import { toast } from "react-toastify";
import InsurancesApi from "../../api/Insurances";
import { UPDATE_INSURANCE, ADD_INSURANCE, DELETE_INSURANCE, GET_INSURANCES, GET_PAGINATED_INSURANCES, SET_PAGE_NUMBER } from "../types/insuranceTypes";

export const getInsurances = () => async (dispatch, getState) => {
    try {
        const response = await InsurancesApi.getAllInsurances(undefined);
        console.log("Insurances resp => ", response);
        dispatch({
            type: GET_INSURANCES,
            payload: response.data.data
        })
        return response;
    } catch (err) {
        toast.error("Problem while getting insurances");
    }
}

export const getPaginatedInsurances = (pageNo) => async (dispatch, getState) => {
    try {
        const response = await InsurancesApi.getAllInsurances(pageNo);

        dispatch({
            type: GET_PAGINATED_INSURANCES,
            payload: response.data.data
        })
        return response;
    } catch (err) {
        toast.error("Problem while getting insurances");
    }
}

export const deleteInsurance = (id) => async (dispatch, getState) => {
    try {
        const response = await InsurancesApi.deleteInsurance(id);
        console.log("Delete Res =>", response);
        dispatch({
            type: DELETE_INSURANCE,
            payload: id
        });
        toast.success("Insurance deleted successfully");
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

export const createInsurance = (data) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_INSURANCES,
            payload: data
        })
        toast.success("Insurance created successfully");
    } catch (err) {
        console.log(err);
        //toast.error(err.response.data.message);
    }
}

export const updateInsurance = (id, data) => async (dispatch, getState) => {
    try {
        await InsurancesApi.updateInsurance(id, data);
        dispatch({
            type: UPDATE_INSURANCE,
            payload: {
                data, id
            }
        })
        toast.success("Insurance updated successfully");
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

export const setPageNumber = (pageNo) => ({
    type: SET_PAGE_NUMBER,
    payload: pageNo
})
