import { Route, Switch, withRouter } from "react-router-dom";
import HospitalRoute from "../../ProtectedRoutes/HospitalRoute";
import Dashboard from "./Dashboard";
import Doctors from "./Doctors";
import DoctorInfo from "./Doctors/components/DoctorInfo";
import Laboratory from "./Laboratory";
import Nurse from "./Nurse";
import Patient from "../shared/Patient";
import HospitalPatientInfo from "../shared/Patient/components/HospitalPatientInfo";
import HospitalProfile from "./Profile";
import Promos from "./Promos";
import PCRTests from "./PCR/PCRTests";
import PCRVaccination from "./PCR/PCRVaccination";

const HospitalRouter = withRouter(({ match, ...props }) => {
    return (
        <Switch {...props}>
            <HospitalRoute exact path={`${match.path}`}>
                <Dashboard />
            </HospitalRoute>
            <HospitalRoute exact path={`${match.path}/doctors`}>
                <Doctors />
            </HospitalRoute>
            <HospitalRoute exact path={`${match.path}/nurse`}>
                <Nurse />
            </HospitalRoute>
            <HospitalRoute exact path={`${match.path}/laboratory`}>
                <Laboratory />
            </HospitalRoute>
            <HospitalRoute exact path={`${match.path}/patient`}>
                <Patient />
            </HospitalRoute>
            <HospitalRoute exact path={`${match.path}/promos`}>
                <Promos />
            </HospitalRoute>
            <HospitalRoute exact path={`${match.path}/profile`} >
                <HospitalProfile />
            </HospitalRoute>
            <HospitalRoute exact path={`${match.path}/doctor-info/:id`} >
                <DoctorInfo />
            </HospitalRoute>
            <HospitalRoute exact path={`${match.path}/patient-info/:id`} >
                <HospitalPatientInfo />
            </HospitalRoute>
            <HospitalRoute exact path={`${match.path}/PCR/tests`} >
                <PCRTests />
            </HospitalRoute>
            <HospitalRoute exact path={`${match.path}/PCR/vaccination`} >
                <PCRVaccination />
            </HospitalRoute>
        </Switch>
    )
});

export default HospitalRouter;
