import { Route, Switch, withRouter } from "react-router-dom";
import DoctorRoute from "../../ProtectedRoutes/DoctorRoute";
import Appointments from "./Appointments";
import DoctorsDashboard from "./Dashboard";

const DoctorRouter = withRouter(({ match, ...props }) => {
    return (
        <Switch {...props}>
            <DoctorRoute exact path={`${match.path}`}>
                <DoctorsDashboard />
            </DoctorRoute>
            <DoctorRoute exact path={`${match.path}/appointments`}>
                <Appointments />
            </DoctorRoute>
        </Switch>
    )
});

export default DoctorRouter;
