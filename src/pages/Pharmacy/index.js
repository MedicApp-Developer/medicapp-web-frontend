import { Switch, withRouter } from "react-router-dom";
import PharmacyRoute from "../../ProtectedRoutes/PharmacyRoute";
import Branch from "./Branch";
import PharmacyDetails from "./PharmacyDetails";
import PharmacyProfile from "./Profile";
import ScanQRPrescription from "./ScanQRPrescription";

const PharmacyRouter = withRouter(({ match, ...props }) => {
    return (
        <Switch {...props}>
            <PharmacyRoute exact path={`${match.path}`}>
                <Branch />
            </PharmacyRoute>
            <PharmacyRoute exact path={`${match.path}/scan-qr-prescription`} >
                <ScanQRPrescription />
            </PharmacyRoute>
            <PharmacyRoute exact path={`${match.path}/pharmacy-details`} >
                <PharmacyDetails />
            </PharmacyRoute>
            <PharmacyRoute exact path={`${match.path}/profile`} >
                <PharmacyProfile />
            </PharmacyRoute>
        </Switch>
    )
});

export default PharmacyRouter;
