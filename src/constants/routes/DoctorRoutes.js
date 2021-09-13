import Appointments from "../../pages/Doctors/Appointments";
import DoctorsDashboard from "../../pages/Doctors/Dashboard";

export const DoctorsRoutes = [
    {
        name: "Dashboard",
        icon: "icon-dashboard",
        route: "/doctors",
        component: DoctorsDashboard
    },
    {
        name: "Appointments",
        icon: "icon-stethoscope",
        route: "/doctors/appointments",
        component: Appointments
    }
]