import { DOCTOR, HOSPITAL, LABORTORY, NURSE, PHARMACY } from "../constants/Roles"
import { DoctorsRoutes } from "../constants/routes/DoctorRoutes";
import { HospitalRoutes } from "../constants/routes/HospitalRoutes";
import { LabRoutes } from "../constants/routes/LabRoutes";
import { NurseRoutes } from "../constants/routes/NurseRoutes";
import { PharmacyRoutes } from "../constants/routes/PharmacyRoutes";

export const selectNav = (role) => {
    let selectedNav = "/";
    switch(role){
        case HOSPITAL: selectedNav = HospitalRoutes[0].name; break;
        case DOCTOR: selectedNav = DoctorsRoutes[0].name; break;
        case NURSE: selectedNav = NurseRoutes[0].name; break;
        case LABORTORY: selectedNav = LabRoutes[0].name; break;
        case PHARMACY: selectedNav = PharmacyRoutes[0].name; break;
        default: selectedNav = ""
    }
    return selectedNav;
}
