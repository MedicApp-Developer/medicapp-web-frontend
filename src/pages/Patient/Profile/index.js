import React, { useState } from 'react'
import { ACCOUNT, APPOINTMENTS, LAB_RESULTS, MEDICAL_PROFILE, QR_PRESCRIPTION } from '../../../constants/patientProfile';
import ProfileTopNavigation from './components/ProfileTopNavigation';
import AppLayout from '../../../layout/AppLayout';
import MedicalProfile from './components/MedicalProfile';
import Appointments from './components/Appointments';
import QRPrescription from './components/QRPrescription';
import LabResults from './components/LabResults';
import Account from './components/Account';

function PatientProfile() {
    const [selectedTab, setSelectedTab] = useState(MEDICAL_PROFILE);

    let componentToRender = null;

    switch(selectedTab) {
        case MEDICAL_PROFILE: 
            componentToRender = <MedicalProfile />; break;
        case APPOINTMENTS: 
            componentToRender = <Appointments />; break;
        case QR_PRESCRIPTION: 
            componentToRender = <QRPrescription />; break;
        case LAB_RESULTS: 
            componentToRender = <LabResults />; break;
        case ACCOUNT: 
            componentToRender = <Account />; break;
        default: 
            componentToRender = <MedicalProfile />; 
    }

    return (
        <AppLayout>
            <ProfileTopNavigation selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {componentToRender}
        </AppLayout>
    )
}

export default PatientProfile
