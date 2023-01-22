import { useEffect, useState, useContext } from "react";
import { Route, Switch, withRouter } from "react-router-dom"
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
import { expgetToken, onMessageListener } from "../../firebase";
import PatientApi from '../../api/Patients';
import { RootContext } from '../../contextApi'
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";
import { LOGIN_ROUTE } from "../../constants/Redirects";
import { PATIENT } from '../../constants/Roles';
import PlayAlert from 'alert-sound-notify';

const PatientRouter = withRouter(({ match, ...props }) => {

    const { user, setUser } = useContext(RootContext)
    const [tabHasFocus, setTabHasFocus] = useState(true);

    const history = useHistory();

    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({ title: '', body: '' });
    const [isTokenFound, setTokenFound] = useState(false);
    useEffect(() => {
        expgetToken(setTokenFound);
    }, [])

    useEffect(() => {
        const handleFocus = () => {
            if (user.role === PATIENT) {
                PatientApi.getSinglePatient(user._id, false).then(res => {
                    if (res.data.data.accountDeletionRequest) {
                        localStorage.clear();
                        window.location.href = "/";
                    }
                })
            }
            setTabHasFocus(true);
        };

        const handleBlur = () => {
            console.log('Tab lost focus');
            setTabHasFocus(false);
        };

        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);

        return () => {
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('blur', handleBlur);
        };
    }, []);

    useEffect(() => {
        if (isTokenFound && user) {
            console.log({
                token: isTokenFound,
                id: user._id
            })
            PatientApi.updateFcToken({
                token: isTokenFound,
                id: user._id
            })
                .then(res => {
                    console.log("data", res.data)
                })
        }
    }, [isTokenFound, user])

    onMessageListener().then(payload => {
        if (payload?.notification?.title === "Congratulations") {
            toast.success(payload?.notification?.body);
            PlayAlert();
            setUser({ ...user, points: parseFloat(user.points) + parseFloat(payload?.data?.points) });
        } else {
            setShow(true);
            // setNotification({title: payload.notification.title, body: payload.notification.body})
            toast.success(payload.notification.title);
            PlayAlert();
            setTimeout(() => {
                // setNotification({title: '', body: ''})
                setShow(false);
                localStorage.clear();
                setUser(false);
                history.push(LOGIN_ROUTE);
            }, 1500);
        }
    }).catch(err => console.log('failed: ', err));

    return (
        <Switch {...props}>
            <Route exact path={`${match.path}`}>
                <Home />
            </Route>
            <Route exact path={`${match.path}hospitals`}>
                <Hospital />
            </Route>
            <Route exact path={`${match.path}hospitals/:id`}>
                <HospitalDetails />
            </Route>
            <Route exact path={`${match.path}doctor`}>
                <Doctor />
            </Route>
            <Route exact path={`${match.path}doctor/:id`}>
                <PatientDoctorProfile />
            </Route>
            <Route exact path={`${match.path}pharmacy`}>
                <Pharmacy />
            </Route>
            <Route exact path={`${match.path}insurance`}>
                <Insurance />
            </Route>
            {/* <PatientRoute exact path={`${match.path}/promos`}>
                <Promos />
            </PatientRoute> */}
            {/* <Route exact path={`${match.path}rewards`}>
                <Rewards />
            </Route>
            <PatientRoute exact path={`${match.path}reward/:id`}>
                <Details />
            </PatientRoute> */}
            <Route exact path={`${match.path}profile`}>
                <PatientProfile />
            </Route>
            <Route exact path={`${match.path}get-qoute`}>
                <Getaqoute />
            </Route>
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
