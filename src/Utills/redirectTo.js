import { ADMIN_ROUTE, DOCTORS_ROUTE, HOSPITAL_ROUTE, LAB_ROUTE, NURSE_ROUTE, PHARMACY_ROUTE } from "../constants/Redirects"
import { ADMIN, DOCTOR, HOSPITAL, LABORTORY, NURSE, PHARMACY } from "../constants/Roles"

export const redirectTo = (role) => {
    let redirecTo = "/";
    switch(role){
        case HOSPITAL: redirecTo = HOSPITAL_ROUTE; break;
        case DOCTOR: redirecTo = DOCTORS_ROUTE; break;
        case NURSE: redirecTo = NURSE_ROUTE; break;
        case LABORTORY: redirecTo = LAB_ROUTE; break;
        case PHARMACY: redirecTo = PHARMACY_ROUTE; break;
        case ADMIN: redirecTo = ADMIN_ROUTE; break;
        default: redirecTo = "/login"
    }
    return redirecTo;
}
