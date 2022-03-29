import axios from '../../axios'
import { DOCTOR_NAMESPACE, SPECIALITY_REQUEST_NAMESPACE, SICKLEAVES_NAMESPACE } from '../../constants/namespaces'
import { trackPromise } from 'react-promise-tracker'

const DoctorApi = {
    getAllDoctors(pageNo, referenceId, getAll = undefined) {
        return trackPromise(axios.get(`/${DOCTOR_NAMESPACE}?page=${pageNo}&reference_id=${referenceId}&getAll=${getAll}`))
    },
    getAllPatientDoctors() {
        return trackPromise(axios.get(`/${DOCTOR_NAMESPACE}/all`))
    },
    createDoctor(data) {
        return trackPromise(axios.post(`${DOCTOR_NAMESPACE}`, data))
    },
    deleteDoctor(id) {
        return trackPromise(axios.delete(`${DOCTOR_NAMESPACE}/${id}`))
    },
    searchDoctors(pageNo, searchedText) {
        return trackPromise(axios.get(`${DOCTOR_NAMESPACE}/search/${searchedText}?page=${pageNo}`))
    },
    getSingleDoctor(id) {
        return trackPromise(axios.get(`${DOCTOR_NAMESPACE}/${id}`))
    },
    updateDoctor(id, values) {
        return trackPromise(axios.put(`${DOCTOR_NAMESPACE}/${id}`, values))
    },
    getAllSpecialities(pageNo) {
        return trackPromise(axios.get(`${SPECIALITY_REQUEST_NAMESPACE}?page=${pageNo}`))
    },
    searchDoctorBySpeciality(specialityId) {
        return trackPromise(axios.get(`${DOCTOR_NAMESPACE}/searchDoctorBySpeciality/${specialityId}`))
    },
    searchDoctorByText(text) {
        return trackPromise(axios.get(`${DOCTOR_NAMESPACE}/searchAll/${text}`))
    },
    uploadProfilePic(id, data) {
        return trackPromise(axios.put(`${DOCTOR_NAMESPACE}/uploadProfilePicture/${id}`, data))
    },
    filterDoctors(filters) {
        return trackPromise(axios.post(`${DOCTOR_NAMESPACE}/filter`, filters))
    },
    createSickLeave(data) {
        return trackPromise(axios.post(`${SICKLEAVES_NAMESPACE}`, data))
    }
}

export default DoctorApi