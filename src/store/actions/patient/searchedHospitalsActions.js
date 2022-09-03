import { toast } from "react-toastify";
import HospitalApi from "../../../api/Hospital";
import { ADDONS_FILTER, CATEGORIES_FILTER, CLEAR_FILTERS_ONLY, CLEAR_HOSPITALS_SEARCHED, GET_SEARCHED_HOSPITALS, HOSPITAL_TYPES_FILTER } from "../../types/patient/searchedHospitalTypes";

export const filterHospitals = (filters) => async (dispatch, getState) => {
    const prevUser = (window.localStorage.getItem('user') && JSON.parse(window.localStorage.getItem('user'))) || ""
    try {
        const response = await HospitalApi.filterHospitals(filters);
        var hospitals = response.data.data
        if (prevUser !== "") {
            console.log("1");
            if (prevUser.insurances && prevUser.insurances.length !== 0) {
                let insuranceSupportingHospitals = response.data.data.filter((hos) => {
                    if (hos.insurances.length !== 0) {
                        var include = false;
                        hos.insurances.forEach(i1 => {
                            for (let i2 of prevUser.insurances) {
                                if (i1._id === i2._id) {
                                    include = true;
                                    break
                                }
                            }

                        })
                        return include
                    } else {
                        return false
                    }
                })
                let insuranceNotSupportingHospitals = response.data.data.filter((hos) => {
                    if (hos.insurances.length !== 0) {
                        var include = false;
                        for (let i1 of hos.insurances) {
                            for (let i2 of prevUser.insurances) {
                                if (i1._id !== i2._id) {
                                    include = false;
                                } else {
                                    include = true
                                    break
                                }
                            }
                            if (include === true) { break }
                        }
                        return !include
                    } else {
                        return true
                    }
                })
                hospitals = insuranceSupportingHospitals.concat(insuranceNotSupportingHospitals)
            }
        }
        dispatch({
            type: GET_SEARCHED_HOSPITALS,
            payload: hospitals
        })
        return response;
    } catch (err) {
        toast.error("Problem while getting hospitals");
    }
}

export const searchHospitalByText = (text) => async (dispatch, getState) => {
    const prevUser = (window.localStorage.getItem('user') && JSON.parse(window.localStorage.getItem('user'))) || ""
    try {
        const response = await HospitalApi.searchHospitalByText(text);
        var hospitals = response.data.data
        if (prevUser !== "") {
            console.log("2");
            if (prevUser.insurances && prevUser.insurances.length !== 0) {
                let insuranceSupportingHospitals = response.data.data.filter((hos) => {
                    if (hos.insurances.length !== 0) {
                        var include = false;
                        hos.insurances.forEach(i1 => {
                            for (let i2 of prevUser.insurances) {
                                if (i1._id === i2._id) {
                                    include = true;
                                    break
                                }
                            }

                        })
                        return include
                    } else {
                        return false
                    }
                })
                let insuranceNotSupportingHospitals = response.data.data.filter((hos) => {
                    if (hos.insurances.length !== 0) {
                        var include = false;
                        for (let i1 of hos.insurances) {
                            for (let i2 of prevUser.insurances) {
                                if (i1._id !== i2._id) {
                                    include = false;
                                } else {
                                    include = true
                                    break
                                }
                            }
                            if (include === true) { break }
                        }
                        return !include
                    } else {
                        return true
                    }
                })
                hospitals = insuranceSupportingHospitals.concat(insuranceNotSupportingHospitals)
            }
        }
        dispatch({
            type: CLEAR_HOSPITALS_SEARCHED,
            payload: hospitals
        })
        return response;
    } catch (err) {
        toast.error("Problem while getting hospitals");
    }
}

export const clearHospitalSearch = () => async (dispatch, getState) => {
    const prevUser = (window.localStorage.getItem('user') && JSON.parse(window.localStorage.getItem('user'))) || ""

    try {

        const response = await HospitalApi.getAllHospitals();
        var hospitals = response.data.data
        if (prevUser !== "") {
            console.log("3");
            if (prevUser.insurances && prevUser.insurances.length !== 0) {
                let insuranceSupportingHospitals = response.data.data.filter((hos) => {
                    if (hos.insurances.length !== 0) {
                        var include = false;
                        hos.insurances.forEach(i1 => {
                            for (let i2 of prevUser.insurances) {
                                if (i1._id === i2._id) {
                                    include = true;
                                    break
                                }
                            }

                        })
                        return include
                    } else {
                        return false
                    }
                })
                let insuranceNotSupportingHospitals = response.data.data.filter((hos) => {
                    if (hos.insurances.length !== 0) {
                        var include = false;
                        for (let i1 of hos.insurances) {
                            for (let i2 of prevUser.insurances) {
                                if (i1._id !== i2._id) {
                                    include = false;
                                } else {
                                    include = true
                                    break
                                }
                            }
                            if (include === true) { break }
                        }
                        return !include
                    } else {
                        return true
                    }
                })
                hospitals = insuranceSupportingHospitals.concat(insuranceNotSupportingHospitals)
            }
        }

        dispatch({
            type: CLEAR_HOSPITALS_SEARCHED,
            payload: hospitals
        })
        return response;
    } catch (err) {
        toast.error("Problem while getting hospitals");
    }
}

export const categoriesFilter = (filters) => ({
    type: CATEGORIES_FILTER,
    payload: filters
})

export const hospitalTypesFilter = (filters) => ({
    type: HOSPITAL_TYPES_FILTER,
    payload: filters
})

export const addonsFilter = (filters) => ({
    type: ADDONS_FILTER,
    payload: filters
})

export const clearHospitalsFiltersOnly = () => ({
    type: CLEAR_FILTERS_ONLY
})