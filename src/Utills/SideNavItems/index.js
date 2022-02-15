import { HospitalRoutes } from "../../constants/routes/HospitalRoutes"
import { DOCTOR, HOSPITAL, NURSE, LABORTORY, PHARMACY, ADMIN, PATIENT } from "../../constants/Roles"
import { DoctorsRoutes } from "../../constants/routes/DoctorRoutes";
import { NurseRoutes } from "../../constants/routes/NurseRoutes";
import { LabRoutes } from "../../constants/routes/LabRoutes";
import { PharmacyRoutes } from "../../constants/routes/PharmacyRoutes";
import { AdminRoutes } from "../../constants/routes/AdminRoutes";
import { PatientRoutes } from '../../constants/routes/PatientRoutes';

export const getRoutes = (role) => {
    let routes = [];
    switch (role) {
        case HOSPITAL:
            routes = HospitalRoutes;
            break;
        case DOCTOR:
            routes = DoctorsRoutes;
            break;
        case NURSE:
            routes = NurseRoutes;
            break;
        case LABORTORY:
            routes = LabRoutes;
            break;
        case PHARMACY:
            routes = PharmacyRoutes;
            break;
        case ADMIN:
            routes = AdminRoutes;
            break;
        case PATIENT:
            routes = PatientRoutes;
            break;
        default: routes = []
    }
    return routes;
}