import { DOCTORS_ROUTE, HOSPITAL_ROUTE, LAB_ROUTE, NURSE_ROUTE } from "../constants/Redirects"
import { DOCTOR, HOSPITAL, LABORTORY, NURSE } from "../constants/Roles"

export const redirectTo = (role) => {
    let redirecTo = "/";
    switch(role){
        case HOSPITAL: redirecTo = HOSPITAL_ROUTE; break;
        case DOCTOR: redirecTo = DOCTORS_ROUTE; break;
        case NURSE: redirecTo = NURSE_ROUTE; break;
        case LABORTORY: redirecTo = LAB_ROUTE; break;
        default: redirecTo = "/login"
    }
    return redirecTo;
}
