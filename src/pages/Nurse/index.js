import { Switch, withRouter } from "react-router-dom";
import NurseRoute from "../../ProtectedRoutes/NurseRoute";
import Patient from "../shared/Patient";
import PatientInfo from "../shared/Patient/components/PatientInfo";
import NurseProfile from "./Profile";

const NurseRouter = withRouter(({ match, ...props }) => {
    return (
        <Switch {...props}>
            <NurseRoute exact path={`${match.path}`}>
                <Patient />
            </NurseRoute>
            <NurseRoute exact path={`${match.path}/patient-info`} >
                <PatientInfo />
            </NurseRoute>
            <NurseRoute exact path={`${match.path}/profile`} >
                <NurseProfile />
            </NurseRoute>
        </Switch>
    )
});

export default NurseRouter;
