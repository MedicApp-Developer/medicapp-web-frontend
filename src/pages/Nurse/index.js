import { Switch, withRouter } from "react-router-dom";
import NurseRoute from "../../ProtectedRoutes/NurseRoute";
import Patient from "../shared/Patient";
import NursePatientInfo from "../shared/Patient/components/NursePatientInfo";
import NurseProfile from "./Profile";

const NurseRouter = withRouter(({ match, ...props }) => {
    return (
        <Switch {...props}>
            <NurseRoute exact path={`${match.path}`}>
                <Patient />
            </NurseRoute>
            <NurseRoute exact path={`${match.path}/patient-info/:id`} >
                <NursePatientInfo />
            </NurseRoute>
            <NurseRoute exact path={`${match.path}/profile`} >
                <NurseProfile />
            </NurseRoute>
        </Switch>
    )
});

export default NurseRouter;
