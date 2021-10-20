import { Switch, withRouter } from "react-router-dom";
import DoctorRoute from "../../ProtectedRoutes/DoctorRoute";
import Patient from "../shared/Patient";
import Appointments from "./Appointments";
import DoctorLabResults from "./DoctorLabResults";
import DoctorProfile from "./Profile";
import HospitalPatientInfo from "../shared/Patient/components/HospitalPatientInfo";

const DoctorRouter = withRouter(({ match, ...props }) => {
    return (
        <Switch {...props}>
            <DoctorRoute exact path={`${match.path}`}>
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
        </Switch>
    )
});

export default DoctorRouter;
