import { toast } from "react-toastify";
import HospitalApi from "../../../api/Hospital";
import { GET_SEARCHED_HOSPITALS } from "../../types/patient/searchedHospitalTypes";

export const searchHospitalByText = (text) => async (dispatch, getState) => {
    try {
        const response = await HospitalApi.searchHospitalByText(text);

        dispatch({
            type: GET_SEARCHED_HOSPITALS,
            payload: response.data.data
        })
        return response;
    }catch(err) {
        toast.error("Problem while getting hospitals");
    }
}