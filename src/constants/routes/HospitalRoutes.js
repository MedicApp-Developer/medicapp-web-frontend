import Dashboard from "../../pages/Hospital/Dashboard";
import Doctors from "../../pages/Hospital/Doctors";
import Laboratory from "../../pages/Hospital/Laboratory";
import Nurse from "../../pages/Hospital/Nurse";
import Patient from "../../pages/shared/Patient";

export const HospitalRoutes = [
    {
        name: "Dashboard",
        icon: "icon-dashboard",
        route: "/hospital",
        component: Dashboard
    },
    {
        name: "Doctors",
        icon: "icon-stethoscope",
        route: "/hospital/doctors",
        component: Doctors
    },
    {
        name: "Nurse",
        icon: "icon-nurse",
        route: "/hospital/nurse",
        component: Nurse
    },
    {
        name: "Laboratory",
        icon: "icon-laboratory",
        route: "/hospital/laboratory",
        component: Laboratory
    },
    {
        name: "Patient",
        icon: "icon-patient",
        route: "/hospital/patient",
        component: Patient
    },
]