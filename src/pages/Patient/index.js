import { Switch, withRouter } from "react-router-dom";
import PatientRoute from "../../ProtectedRoutes/PatientRoute";
import Home from "./Home";
import Hospital from "./Hospital";
import Doctor from './Doctor';
import Pharmacy from "./Pharmacy";
import Insurance from "./Insurance";
import Promos from "./Promos";
import BookAppointment from "./Doctor/components/BookAppointment";
import HospitalDetails from "./Hospital/components/HospitalDetails";
import PatientProfile from "./Profile";
import Getaqoute from "./Getaqoute";

const PatientRouter = withRouter(({ match, ...props }) => {
    return (
        <Switch {...props}>
            <PatientRoute exact path={`${match.path}`}>
                <Home />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}/hospital`}>
                <Hospital />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}/hospital/:id`}>
                <HospitalDetails />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}/doctor`}>
                <Doctor />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}/doctor/:id`}>
                <BookAppointment />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}/pharmacy`}>
                <Pharmacy />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}/insurance`}>
                <Insurance />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}/promos`}>
                <Promos />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}/profile`}>
                <PatientProfile />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}/get-qoute`}>
                <Getaqoute />
            </PatientRoute>
        </Switch>
    )
});

export default PatientRouter;
