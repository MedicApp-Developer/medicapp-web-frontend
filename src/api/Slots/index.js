import axios from '../../axios'
import { SLOT_NAMESPACE } from '../../constants/namespaces'
import { trackPromise } from 'react-promise-tracker'

const SlotApi = {
    createSlot(data) {
        return trackPromise(axios.post(`${SLOT_NAMESPACE}`, data))
    },
    deleteSlot(id) {
        return trackPromise(axios.delete(`${SLOT_NAMESPACE}/delete/${id}`))
    },
    getAllDoctorsSlots(doctorId) {
        return trackPromise(axios.post(`${SLOT_NAMESPACE}/all/doctor/${doctorId}`))
    },
    getApprovedDoctorsSlots(doctorId) {
        return trackPromise(axios.get(`${SLOT_NAMESPACE}/approved/doctor/${doctorId}`))
    },
    getHospitalPCRTestSlots(hospitalId) {
        return trackPromise(axios.post(`${SLOT_NAMESPACE}/PCRTests/hospital/${hospitalId}`))
    },
    getHospitalPCRVaccinationSlots(hospitalId) {
        return trackPromise(axios.post(`${SLOT_NAMESPACE}/PCRVaccination/hospital/${hospitalId}`))
    },
    getAppointmentSlip(id) {
        return trackPromise(axios.get(`${SLOT_NAMESPACE}/appointmentSlip/${id}`, { responseType: 'blob' }))
    }
}

export default SlotApi