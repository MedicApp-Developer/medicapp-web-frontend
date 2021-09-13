import LabRequests from "../../pages/Laboratories/LabRequests";
import LabResultRecords from "../../pages/Laboratories/LabResultRecords";

export const LabRoutes = [
    {
        name: "Lab Requests",
        icon: "icon-laboratory",
        route: "/laboratory",
        component: LabRequests
    },
    {
        name: "Lab Result Records",
        icon: "icon-patient",
        route: "/laboratory/lab-result-records",
        component: LabResultRecords
    },
]