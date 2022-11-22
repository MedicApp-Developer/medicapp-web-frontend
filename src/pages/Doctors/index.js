import { Switch, withRouter } from "react-router-dom";
import DoctorRoute from "../../ProtectedRoutes/DoctorRoute";
import Patient from "../shared/Patient";
import Appointments from "./Appointments";
import DoctorLabResults from "./DoctorLabResults";
import DoctorProfile from "./Profile";
import HospitalPatientInfo from "../shared/Patient/components/HospitalPatientInfo";
import SlotsCalendar from "./SlotsCalendar";
import PatientAppointmentDetail from "../shared/Patient/components/PatientAppointmentDetail";

const DoctorRouter = withRouter(({ match, ...props }) => {
    return (
        <Switch {...props}>
            <DoctorRoute exact path={`${match.path}`}>
                <SlotsCalendar />
            </DoctorRoute>
            <DoctorRoute exact path={`${match.path}/appointment`}>
                <Appointments />
            </DoctorRoute>
            <DoctorRoute exact path={`${match.path}/patient`}>
                <Patient />
            </DoctorRoute>
            <DoctorRoute exact path={`${match.path}/lab-results`}>
                <DoctorLabResults />
            </DoctorRoute>
            <DoctorRoute exact path={`${match.path}/profile`} >
                <DoctorProfile />
            </DoctorRoute>
            <DoctorRoute exact path={`${match.path}/patient-info/:id`} >
                <HospitalPatientInfo />
            </DoctorRoute>
            <DoctorRoute exact path={`${match.path}/patient-info/:id/:appointmentId`} >
                <PatientAppointmentDetail />
            </DoctorRoute>
        </Switch>
    )
});

export default DoctorRouter;
