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

const rootReducer = combineReducers({
    doctors: doctorReducer,
    nurses: nurseReducer,
    labs: labReducer,
    patients: patientReducer,
    appointments: appointmentReducer,
    doctorAppointments: doctorAppointmentReducer,
    pendingLabRequests: pendingLabRequestReducer,
    completedLabRequests: completedLabRequestReducer,
    promos: promoReducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));