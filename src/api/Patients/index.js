import axios from '../../axios'
import { FAMILY_NAMESPACE, PATIENT_NAMESPACE, SICKLEAVES_NAMESPACE } from '../../constants/namespaces'
import { trackPromise } from 'react-promise-tracker'

const PatientApi = {
    getAllPatients(pageNo) {
        return trackPromise(axios.get(`/${PATIENT_NAMESPACE}?page=${pageNo}`))
    },
    deletePatient(id) {
        return trackPromise(axios.delete(`${PATIENT_NAMESPACE}/${id}`))
    },
    getSinglePatient(id) {
        return trackPromise(axios.get(`/${PATIENT_NAMESPACE}/${id}`))
    },
    createPatientFromNurse(data) {
        return trackPromise(axios.post(`/${PATIENT_NAMESPACE}/createNursePatient`, data))
    },
    updatePatient(id, data) {
        return trackPromise(axios.put(`/${PATIENT_NAMESPACE}/${id}`, data))
    },
    registerPatient(data) {
        return trackPromise(axios.post(`/${PATIENT_NAMESPACE}`, data))
    },
    getPatientAccountInfo(patientId) {
        return trackPromise(axios.get(`/${PATIENT_NAMESPACE}/profile/${patientId}`))
    },
    createFamilyMembers(data) {
        return trackPromise(axios.post(`/${FAMILY_NAMESPACE}`, data))
    },
    deleteFamilyMember(id) {
        return trackPromise(axios.delete(`${FAMILY_NAMESPACE}/${id}`))
    },
    getPatientSickLeaves(id) {
        return trackPromise(axios.get(`${SICKLEAVES_NAMESPACE}/getSickLeaves/${id}`))
    },
    downloadSickLeave(id) {
        return trackPromise(axios.get(`${SICKLEAVES_NAMESPACE}/downloadSickLeave/${id}`, { responseType: 'blob' }))
    }
}

export default PatientApi