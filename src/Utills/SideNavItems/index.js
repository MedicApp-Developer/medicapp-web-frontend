import { HospitalRoutes } from "../../constants/routes/HospitalRoutes"
import { DOCTOR, HOSPITAL, NURSE, LABORTORY } from "../../constants/Roles"
import { DoctorsRoutes } from "../../constants/routes/DoctorRoutes";
import { NurseRoutes } from "../../constants/routes/NurseRoutes";
import { LabRoutes } from "../../constants/routes/LabRoutes";

export const getRoutes = (role) => {
    let routes = [];
    switch(role){
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
        default: routes = []
    }
    return routes;
}