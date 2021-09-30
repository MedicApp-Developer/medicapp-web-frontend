import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { doctorReducer } from './reducers/doctorReducer';
import { nurseReducer } from './reducers/nurseReducer';
import { labReducer } from './reducers/labReducer';
import { patientReducer } from './reducers/patientReducer';
import { appointmentReducer } from './reducers/appointmentReducer';

const rootReducer = combineReducers({
    doctors: doctorReducer,
    nurses: nurseReducer,
    labs: labReducer,
    patients: patientReducer,
    appointments: appointmentReducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));