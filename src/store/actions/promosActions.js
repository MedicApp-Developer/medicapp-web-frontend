import { toast } from "react-toastify";
import PatientApi from "../../api/Patients";
import PromoApi from "../../api/promos";
import { CREATE_PROMO, DELETE_PROMO, GET_PROMOS, SET_PAGE_NUMBER } from "../types/promos";

export const getPromos = (pageNo) => async (dispatch, getState) => {
    try {
        const response = await PromoApi.getAllPromos(pageNo);

        dispatch({
            type: GET_PROMOS,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting promos");
    }
}

export const deletePromo = (id) => async (dispatch, getState) => {
    try {
        await PromoApi.deletePromo(id);

        dispatch({
            type: DELETE_PROMO,
            payload: id
        });
        toast.success("Promo deleted successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const createPromo = (data) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_PROMOS,
            payload: data
        })
        toast.success("Promo created successfully");
    }catch(err) {
        toast.error(err.response.data.message);
    }
}

export const setPageNumber = (pageNo) => ({
    type: SET_PAGE_NUMBER,
    payload: pageNo
})
