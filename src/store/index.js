import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { doctorReducer } from './reducers/doctorReducer';
import { nurseReducer } from './reducers/nurseReducer';
import { labReducer } from './reducers/labReducer';
import { patientReducer } from './reducers/patientReducer';
import { appointmentReducer } from './reducers/appointmentReducer';
import { doctorAppointmentReducer } from './reducers/doctorAppointmentsReducer';
import { pendingLabRequestReducer } from './reducers/pendingLabRequestReducer';
import { completedLabRequestReducer } from './reducers/completedLabRequestReducer';
import { promoReducer } from './reducers/promosReducer';
import { specialitiesReducer } from './reducers/specialitiesReducer';
import { insurancesReducer } from './reducers/insurancesReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { addonsReducer } from './reducers/addonsReducer';
import { searchedDoctorsReducer } from './reducers/patient/searchedDoctorReducer';
import { searchedHospitalsReducer } from './reducers/patient/searchedHospitalReducer';
import { vendorsReducer } from './reducers/vendorReducer';
import { packagesReducer } from './reducers/packageReducer';

const rootReducer = combineReducers({
    doctors: doctorReducer,
    nurses: nurseReducer,
    labs: labReducer,
    patients: patientReducer,
    appointments: appointmentReducer,
    doctorAppointments: doctorAppointmentReducer,
    pendingLabRequests: pendingLabRequestReducer,
    completedLabRequests: completedLabRequestReducer,
    promos: promoReducer,
    specialities: specialitiesReducer,
    insurances: insurancesReducer,
    categories: categoriesReducer,
    addons: addonsReducer,
    searchedDoctors: searchedDoctorsReducer,
    searchedHospitals: searchedHospitalsReducer,
    vendors: vendorsReducer,
    packages: packagesReducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));