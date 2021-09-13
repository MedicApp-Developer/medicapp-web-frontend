import { Switch, withRouter } from "react-router-dom";
import LabRoute from "../../ProtectedRoutes/LabRoute";
import LabRequests from "./LabRequests";
import LabResultRecords from "./LabResultRecords";
import LaboratoryProfile from "./Profile";

const LabortoriesRouter = withRouter(({ match, ...props }) => {
    return (
        <Switch {...props}>
            <LabRoute exact path={`${match.path}`}>
                <LabRequests />
            </LabRoute>
            <LabRoute exact path={`${match.path}/lab-result-records`} >
                <LabResultRecords />
            </LabRoute>
            <LabRoute exact path={`${match.path}/profile`} >
                <LaboratoryProfile />
            </LabRoute>
        </Switch>
    )
});

export default LabortoriesRouter;
