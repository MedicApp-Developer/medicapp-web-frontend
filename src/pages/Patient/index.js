import { Switch, withRouter } from "react-router-dom"
import PatientRoute from "../../ProtectedRoutes/PatientRoute"
import Home from "./Home"
import Hospital from "./Hospital"
import Doctor from './Doctor'
import Pharmacy from "./Pharmacy"
import Insurance from "./Insurance"
import Promos from "./Promos"
import HospitalDetails from "./Hospital/components/HospitalDetails"
import PatientProfile from "./Profile"
import Getaqoute from "./Getaqoute"
import PatientDoctorProfile from "./Doctor/components/PatientDoctorProfile"
import BookAppointment from "./Doctor/components/BookAppointment"
import BookVaccinationHospital from './Hospital/components/appointment/BookVaccinationHospital'
import BookTestHospitalAppointment from './Hospital/components/appointment/BookTestHospitalAppointment'
import PCRAppointments from './PCRAppointments'
import Rewards from './Rewards'
import Details from './Rewards/Details'

const PatientRouter = withRouter(({ match, ...props }) => {
    return (
        <Switch {...props}>
            <PatientRoute exact path={`${match.path}`}>
                <Home />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}hospitals`}>
                <Hospital />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}hospitals/:id`}>
                <HospitalDetails />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}doctor`}>
                <Doctor />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}doctor/:id`}>
                <PatientDoctorProfile />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}pharmacy`}>
                <Pharmacy />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}insurance`}>
                <Insurance />
            </PatientRoute>
            {/* <PatientRoute exact path={`${match.path}/promos`}>
                <Promos />
            </PatientRoute> */}
            <PatientRoute exact path={`${match.path}rewards`}>
                <Rewards />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}reward/:id`}>
                <Details />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}profile`}>
                <PatientProfile />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}get-qoute`}>
                <Getaqoute />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}book-appointment`}>
                <BookAppointment />
            </PatientRoute>
            {/* <PatientRoute exact path={`${match.path}/book-vaccination-appointment`}>
                <BookVaccinationHospital />
            </PatientRoute>
            <PatientRoute exact path={`${match.path}/book-pcr-appointment`}>
                <BookTestHospitalAppointment />
            </PatientRoute> */}
            {/* <PatientRoute exact path={`${match.path}/book-medicapp-appointment`}>
                <PCRAppointments />
            </PatientRoute> */}
        </Switch>
    )
})

export default PatientRouter
